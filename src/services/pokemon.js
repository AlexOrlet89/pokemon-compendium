export async function fetchPokemon() {
  const resp = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex');
  const data = await resp.json();
  return data.results;
}
export async function fetchTypes() {
  const resp = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex/types');
  const data = await resp.json();
  return data.map((object) => object.type);
}
export async function fetchFilteredPokemon(selectedType, searchPokemon, sorted) {
  const params = new URLSearchParams();
  if (selectedType) {
    params.set('type', selectedType);
  }
  const params2 = new URLSearchParams();
  if (searchPokemon) {
    params2.set('pokemon', searchPokemon);
  }
  if (sorted) {
    params.set('sort', 'pokemon');
    params.set('direction', sorted);
  }

  const resp = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex?${params2.toString()}&${params.toString()}`
  );
  const data = await resp.json();
  return data.results;
}
