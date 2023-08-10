import React, { useEffect, useState } from 'react';
import Card from './Card.jsx';
const Cards = ({ dataItems, onSelectCard }) => {
    const [hrefLinks, setHrefLinks] = useState([]);
    const [jsonLinks, setJsonLinks] = useState([]);
    useEffect(() => {
        const hrefs = [];
        const jsonStrings = [];
        if(typeof dataItems !== "undefined"){
            Object.values(dataItems)[2].map(item => {
                
                if(typeof item !== "undefined"){

                    const { href } = Object.values(item)[0]
                    return hrefs.push(href);
                }
             })
        }
        if(typeof dataItems !== "undefined"){
            Object.values(dataItems)[1].map(item => {
                
                if(typeof item !== "undefined"){

                    return jsonStrings.push(item);    
                    
                }
             })
        }

        setHrefLinks([...hrefs]);
        setJsonLinks([...jsonStrings]);
    },[dataItems])
    
  
    
    return ( 
        <>
            <div className='cards'>
               <ul>
                     
                
                    {
                        Object.values(dataItems)[0].map((infoItem,index) => {
                                
                        return  <Card infoItem={infoItem} key={infoItem[0].nasa_id} dataLinks={hrefLinks[index]} jsonLink={jsonLinks[index]} onSelectCard={onSelectCard} />
                        
                    })
                       
                    }

               </ul>
            </div>
        </>
     );
}
 
export default Cards;