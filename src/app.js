import React, { useEffect, useState } from 'react';
import Cards from './Components/Cards';
const App = () => {
    const [query, setQuery] = useState('');
    const [items, setItems] = useState([]);
    const [dataItems, setDataItems] = useState({
        info: [],
        jsonLinks: [],
        imageLinks: [],
      });

    useEffect( () => {
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

    
    function handleSubmit(e) {
      e.preventDefault();
      
    }
    
    

    return (
        <>
            <form onSubmit={handleSubmit} >
            <input type='text' value={query} onChange={(e) => setQuery(e.target.value)}/>
            <button>Submit</button>
            </form>
            <Cards dataItems={dataItems}/>
        </>
    );
}
 
export default App;