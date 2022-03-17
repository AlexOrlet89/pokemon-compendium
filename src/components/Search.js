import React from 'react';

export default function Search({ setSearchPokemon }) {
  return (
    <form>
      <input onChange={(e) => setSearchPokemon(e.target.value)}></input>
      <button>Search</button>
    </form>
  );
}
