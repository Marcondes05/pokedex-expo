const BASE_URL = "https://pokeapi.co/api/v2/";

export async function getPokemons(offset = 0, limit = 20) {
  const res = await fetch(`${BASE_URL}pokemon?offset=${offset}&limit=${limit}`);
  return res.json();
}

export async function getPokemonDetails(url) {
  const res = await fetch(url);
  return res.json();
}

export async function getPokemonByName(name) {
  const res = await fetch(`${BASE_URL}pokemon/${name.toLowerCase()}`);
  return res.json();
}
