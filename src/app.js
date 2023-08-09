import React, { useEffect, useState } from 'react';
const App = () => {
    const [query, setQuery] = useState('');
    const [items, setItems] = useState([]);
    
    let info = [];
    let jsonLinks = [];
    let imageLinks = [];

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

   

    
    function handleSubmit(e) {
        e.preventDefault();
       
        
        for(const item of items) {
            const { data, href, links } = item;
            info.push(data);
            jsonLinks.push(href);
            imageLinks.push(links);
        }

       console.log(info)
       console.log(jsonLinks)
       console.log(imageLinks)

    }


    return (
        <>
            <form onSubmit={handleSubmit} >
            <input type='text' value={query} onChange={(e) => setQuery(e.target.value)}/>
            <button>Submit</button>
            </form>
            <div>
                
            </div>
        </>
    );
}
 
export default App;