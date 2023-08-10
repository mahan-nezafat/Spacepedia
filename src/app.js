import React, { useEffect, useState } from 'react';
import Cards from './Components/Cards';
import Video from './Components/Video';
import './index.css';
const App = () => {
    const [query, setQuery] = useState('');
    const [items, setItems] = useState([]);
    const [dataItems, setDataItems] = useState({
        info: [],
        jsonLinks: [],
        imageLinks: [],
      });
    const [videoLink, setVideoLink] = useState('');
    const [selected, setSelected] = useState([])
    useEffect( () => {
      const controller = new AbortController();
       async function fetchData() {
            try {
                if(!query) return
                const response = await fetch(`https://images-api.nasa.gov/search?q=${query}`);
                
                const data = await response.json();

                setItems(items => data.collection.items)
                
            } catch (error) {
                console.log(error);
            }
       }

     
       fetchData();
       
       return () => {
         controller.abort();
       }

    },[query])

    useEffect(() => {
        const updatedDataItems = {
          info: [],
          jsonLinks: [],
          imageLinks: [],
        };
        
        for (const item of items) {
          const { data, href, links } = item;
          updatedDataItems.info.push(data);
          updatedDataItems.jsonLinks.push(href);
          updatedDataItems.imageLinks.push(links);
        }
        updatedDataItems.imageLinks.splice(10,90);
        updatedDataItems.info.splice(10,90);
        updatedDataItems.jsonLinks.splice(10,90);
        
        setDataItems(updatedDataItems);
        
        // console.log(updatedDataItems);
      }, [items]);

    
    function SelectCard(id) {
      setVideoLink('')
      const selected = Object.values(dataItems.info).filter(item => item[0].nasa_id === id )
      const index = dataItems.info.indexOf(selected[0]);
      setVideoLink(dataItems.jsonLinks[index])
      setSelected([...selected])
        
     
    }
    

    return (
        <>
          <div className='search'>
            <input type='text' value={query} onChange={(e) => setQuery(e.target.value)}/>
          </div>
        
          <div className='container'>
            <Cards dataItems={dataItems} onSelectCard={SelectCard}/>
            <Video jsonLink={videoLink} selectedItem={selected}/>
          </div>
        </>
    );
}
 
export default App;