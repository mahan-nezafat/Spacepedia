import React, { useEffect, useState } from 'react';

const Card = ({ infoItem, dataLinks, jsonLink, onSelectCard }) => {
    
    
    const { 
        title,
        date_created,
        description,
        keywords,
        nasa_id
    } = infoItem[0]
   
    


    return ( 
        <>
            <li onClick={() => onSelectCard(nasa_id)}>
                <img src={`${dataLinks}`} alt={title} />
                <div className="detail">
                    <h1>{title}</h1>
                    <span>Date: {date_created.slice(0,10)}</span>
                    <p><span>Description:</span> {description.slice(0,70) + '...'}</p>
                
                    <div className="tags">
                        {
                        typeof keywords !== "undefined" && keywords.length < 4 ?
                        keywords.map(word => {
                
                            return <span>{word}</span>
                        })
                        :
                        ""
                        }
                    </div>
                </div>
                
                
            </li>
        </>
     );
}
 
export default Card;