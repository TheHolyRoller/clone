
'use client'
import Image from "next/image";
import Card from './Components/Card'; 
import CompaniesList from "./Components/CompaniesList";
import companies from './Components/Database/company.json'

export default function Home() {
  return (
    <div className="color-white">

    testing 
     
      {/* Loop through the JSON File here */}
     
      {companies.map((company, index) => (
        <Card key={index} company={company} />
      ))}
        

      {/* <CompaniesList companies={companies} /> */}


      {/* <h1 style={{color: 'white', }} >TESTING</h1> */}
         


    </div>
  );
}
