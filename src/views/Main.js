import './Main.css';
import { useEffect, useState } from 'react';
import { fetchPokemon } from '../services/pokemon';

export default function Main() {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemon();
      setPokemon(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {pokemon.map((pokeman) => (
        <p key={pokeman.id}>{pokeman.pokemon}</p>
      ))}
    </div>
  );
}
