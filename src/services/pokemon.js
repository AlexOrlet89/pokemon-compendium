export async function fetchPokemon() {
  const resp = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex');
  const data = await resp.json();
  console.log(data);
  console.log(data.results);
  return data.results;
}
export async function fetchTypes() {
  const resp = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex/types');
  const data = await resp.json();
  console.log(data);
  console.log(data.results);
  return data.map((object) => object.type);
}
export async function fetchFilteredPokemon(selectedType, searchPokemon) {
  const params = new URLSearchParams();
  if (selectedType) {
    params.set('type', selectedType);
    params.set('pokemon', searchPokemon);
    console.log(params.toString());
  }
  //   const params2 = new URLSearchParams();
  //   if (searchPokemon) {
  //     console.log(params2.toString());
  //   }

  const resp = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex?${params.toString()}`
  );
  const data = await resp.json();
  console.log(data);
  return data.results;
}
