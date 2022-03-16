import react from 'react';
import './Pokecard.css';

export default function PokeCard({ pokemon, type_1, type_2 }) {
  return (
    <div>
      <p>{pokemon}</p>
      <p>{type_1}</p>
      <p>{type_2}</p>
    </div>
  );
}
