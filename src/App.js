import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Search';

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');


  useEffect(()=> {
    const fetchItems = async ()=> {
      const res = await axios.get(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      //console.log(res.data);
      setItems(res.data)
      setIsLoading(false)
    }

    fetchItems();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q)=> setQuery(q)} />
      <CharacterGrid items={items} isLoading={isLoading} />
    </div>
  );
}

export default App;
