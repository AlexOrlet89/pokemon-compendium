import react from 'react';
import './Pokecard.css';

export default function PokeCard({ pokemon, type_1, type_2 }) {
  return (
    <div className="pokecard">
      <p>name: {pokemon}</p>
      <p>
        types: {type_1}, {type_2}
      </p>
    </div>
  );
}
