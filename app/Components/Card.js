

'use client'
import React from 'react'; 
import CardStyle from '../Styles/CardStyle.css'; 


const Card = ({company}) =>{

    return(

        // Add in the classes to make this query work as if it was on yellow pages 
        <div id='mainCardContainer' class="box-company-search overout" >

        <div id='cardContainer'>

        <div  id='titleContainer' class="descr-box-company-search">
        {company.title}

        </div>

        <div id='addressContainer' class="ico-box-company-search">

        {company.address}



        </div>

        <div id='phoneContainer' class="ico-box-company-search">

        {company.phone} 

        </div>

        <div id='emailContainer' class="ico-box-company-search" >

        {company.email}


        </div>



        </div>




        </div>


    )


}

export default Card; 