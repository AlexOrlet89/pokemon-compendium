import './Main.css';
import { useEffect, useState } from 'react';
import { fetchFilteredPokemon, fetchPokemon, fetchTypes } from '../services/pokemon';
import PokeCard from '../components/Pokecard';
import TypeSelector from '../components/TypeSelector';
import Search from '../components/Search';

export default function Main() {
  const [pokemon, setPokemon] = useState([]);
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('');
  const [searchPokemon, setSearchPokemon] = useState('');
  const [sorted, setSort] = useState('asc');

  const [loading, setLoading] = useState(true);

  const setAlphabetical = () => {
    setSort('asc');
  };
  const setReverseAlphabetical = () => {
    setSort('desc');
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemon();
      setPokemon(data);
      setLoading(false);

      const typesData = await fetchTypes();
      setTypes(typesData);
    };
    fetchData();
  }, []); // on load, this will fetch every pokemon

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFilteredPokemon(selectedType, searchPokemon, sorted);
      setPokemon(data); //when the dependency is triggered, the filtered data from fetchfiltered will be fed to setPokemon, which will update the pokemon state variable
    };
    fetchData();
  }, [selectedType, searchPokemon, sorted]); //on selectedtype state change, this will load pokemon with the same type

  if (loading) return <div>Loading...</div>;

  return (
    <main>
      <div>
        <Search setSearchPokemon={setSearchPokemon} />
      </div>
      <div className="filter">
        Filter by Type:
        <TypeSelector types={types} setSelectedType={setSelectedType} selectedType={selectedType} />
      </div>
      <div>
        <button onClick={setAlphabetical}>Alphabetical</button>
        <button onClick={setReverseAlphabetical}>Reverse Alphabetical</button>
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
