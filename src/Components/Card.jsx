import React, { useEffect } from 'react';

const Card = ({ infoItem, dataLinks }) => {

   
    // console.log(typeof dataLinks !== "undefined" ? Object.entries(dataLinks) : "gg")
    const { 
        title,
        date_created,
        description,
        keywords,

    } = infoItem[0]
   
    return ( 
        <>
            <li>
                <img src={`${dataLinks}`} alt={title} />
                <h1>{title}</h1>
                <span>time: {date_created}</span>
                <p>{description}</p>
                {
                    typeof keywords !== "undefined" ?
                    keywords.map(word => {
            
                        return <span>{word}</span>
                    })
                    :
                    ""
                }
            </li>
        </>
     );
}
 
export default Card;