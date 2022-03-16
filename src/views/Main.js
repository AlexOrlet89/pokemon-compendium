import './Main.css';
import { useEffect, useState } from 'react';
import { fetchPokemon } from '../services/pokemon';
import PokeCard from '../components/Pokecard';

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
        // <p key={pokeman.id}>{pokeman.pokemon}</p>
        <PokeCard key={pokeman.id} {...pokeman} />
      ))}
    </div>
  );
}
