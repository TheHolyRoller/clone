
'use client'
import { useState } from 'react';
// Import the Card style sheet here 
import CardStyle from '../Styles/CardStyle.css';



const CompaniesList = ({ companies }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const companiesPerPage = 4;

  // Calculate the index range for the current page
  const indexOfLastCompany = currentPage * companiesPerPage;
  const indexOfFirstCompany = indexOfLastCompany - companiesPerPage;
  const currentCompanies = companies.slice(indexOfFirstCompany, indexOfLastCompany);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate total number of pages
  const totalPages = Math.ceil(companies.length / companiesPerPage);

  return (
    <div>
      <div className="companies-container">
        {currentCompanies.map((company, index) => (
            <div key={index} className="company-card">
            {/* Add in the Card Code here  */}

            <h2>{company.name}</h2>
            <p>{company.description}</p>
            {/* Render other company details as needed */}
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="pagination">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={index + 1 === currentPage ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <style jsx>{`
        .companies-container {
          display: flex;
          flex-wrap: wrap;
        }
        .company-card {
          width: 100%;
          margin-bottom: 1rem;
        }
        .pagination button {
          margin: 0 5px;
          padding: 0.5rem;
          cursor: pointer;
        }
        .pagination .active {
          font-weight: bold;
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default CompaniesList;







