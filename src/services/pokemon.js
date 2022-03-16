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
