import React, { useEffect, useState } from 'react';

const Card = ({ infoItem, dataLinks, jsonLink }) => {
    
    const [videoLink, setVideoLink] = useState('');
    const { 
        title,
        date_created,
        description,
        keywords,

    } = infoItem[0]
   
    useEffect(() => {
        async function fetchJson() {
            const response = await fetch(jsonLink)
            const data = await response.json();
            data.map(item => {
              if(item.includes('preview.mp4')){
               return setVideoLink(item)
              }
            });
            
            
        }
    
        fetchJson();

        console.log(typeof videoLink);
    },[jsonLink])


    return ( 
        <>
            <li>
                <img src={`${dataLinks}`} alt={title} />
                <h1>{title}</h1>
                <span>time: {date_created}</span>
                <p>{description}</p>
                {
                    videoLink ? 
                    <video controls>
                        <source src={videoLink} type='video/mp4' />
                    </video>
                    :
                    ""
                }
                <br />
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