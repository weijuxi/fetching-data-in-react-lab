// src/App.jsx
import * as starshipService from './services/starshipService'; 
import StarshipSearch from './components/StarshipSearch';
import StarshipList from './components/StarshipList';
import { useState, useEffect } from 'react';


const App = () => {
  const [starships, setStarships] = useState([]);


  async function fetchStarships(searchQuery) {
    const data = await starshipService.getStarships(searchQuery);
    console.log(data);
    setStarships(data);
  }

  return (
    <main>
      <h1>Starship Search</h1>
      <StarshipSearch fetchData={fetchStarships} />
      <StarshipList starships={starships} />
    </main>
  );
}

export default App
