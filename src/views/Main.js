import './Main.css';
import { useEffect, useState } from 'react';
import { fetchFilteredPokemon, fetchPokemon, fetchTypes } from '../services/pokemon';
import PokeCard from '../components/Pokecard';
import TypeSelector from '../components/TypeSelector';

export default function Main() {
  const [pokemon, setPokemon] = useState([]);
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemon();
      setPokemon(data);
      const typesData = await fetchTypes();
      setTypes(typesData);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFilteredPokemon(selectedType);
    };
    fetchData();
  }, [selectedType]);

  return (
    <main>
      <div className="filter">
        <TypeSelector types={types} setSelectedType={setSelectedType} selectedType={selectedType} />
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
