import React, { useEffect } from 'react';
import Card from './Card.jsx';
const Cards = ({ dataItems }) => {

    const hrefs = [];

    useEffect(() => {
        if(typeof dataItems !== "undefined"){
            Object.values(dataItems)[2].map(item => {
                
                if(typeof item !== "undefined"){

                    const { href } = Object.values(item)[0]
                    return hrefs.push(href);
                }
             })
        }
        
    },[dataItems,hrefs])
    
    console.log(hrefs)
    
    return ( 
        <>
            <div>
               <ul>
                     
                
                    {
                        Object.values(dataItems)[0].map((infoItem,index) => {
                                
                        return  <Card infoItem={infoItem} key={infoItem[0].nasa_id} dataLinks={hrefs[index]} />
                        
                    })
                       
                    }

               </ul>
            </div>
        </>
     );
}
 
export default Cards;