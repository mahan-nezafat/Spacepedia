import React, { useEffect, useRef, useState } from 'react';

const Video = ({ jsonLink, selectedItem }) => {

    const [videoLink, setVideoLink] = useState('')
    // const { description } = typeof selectedItem !== "undefined" ? selectedItem[0] : ''
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

    },[jsonLink])

    return ( 
        <>
          <div className="video">
                {
                    videoLink ? 
                    <video controls>
                        <source src={videoLink} type='video/mp4' />
                    </video>
                    :
                    ""
                }
                {/* <p>{description}</p> */}
          </div>

        </>
     );
}
 
export default Video;