import './Main.css';
import { useEffect, useState } from 'react';
import { fetchPokemon } from '../services/pokemon';

export default function Main() {
  useEffect(() => {
    fetchPokemon();
  }, []);

  return <div>Main</div>;
}
