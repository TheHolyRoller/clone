

'use client'
import React from 'react'; 
import CardStyle from '../Styles/CardStyle.css'; 


const Card = ({company}) =>{

    return(


        <div id='mainCardContainer' >

        <div id='cardContainer'>

        <div  id='titleContainer'>
        {company.title}

        </div>

        <div id='addressContainer'>

        {company.address}



        </div>

        <div id='phoneContainer'>

        {company.phone} 

        </div>

        <div id='emailContainer' >

        {company.email}


        </div>



        </div>




        </div>


    )


}

export default Card; 