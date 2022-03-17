import './Main.css';
import { useEffect, useState } from 'react';
import { fetchPokemon, fetchTypes } from '../services/pokemon';
import PokeCard from '../components/Pokecard';
import TypeSelector from '../components/TypeSelector';

export default function Main() {
  const [pokemon, setPokemon] = useState([]);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemon();
      setPokemon(data);
      const typesData = await fetchTypes();
      setTypes(typesData);
    };
    fetchData();
  }, []);

  return (
    <main>
      <div className="filter">
        <TypeSelector types={types} />
      </div>
      <div className="pokemen">
        {pokemon.map((pokeman) => (
          // <p key={pokeman.id}>{pokeman.pokemon}</p>
          <PokeCard key={pokeman.id} {...pokeman} />
        ))}
      </div>
    </main>
  );
}
