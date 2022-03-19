import React from 'react';

// export default function Search({ setSearchPokemon }) {
//   return (
//     <>
//       <input onChange={(e) => setSearchPokemon(e.target.value)}></input>
//       <button>Search</button>
//     </>
//   );
// }
export default function Search({ setSearchPokemon }) {
  return (
    <>
      Filter by Name:
      <input onChange={(e) => setSearchPokemon(e.target.value)}></input>
    </>
  );
}
