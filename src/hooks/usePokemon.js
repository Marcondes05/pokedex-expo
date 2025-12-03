import { useEffect, useState } from 'react';
import { getPokemons, getPokemonDetails } from '../api/pokeapi';

export default function usePokemon() {
  const [pokemonList, setPokemonList] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);

  async function load() {
    if (loading) return;
    setLoading(true);

    const data = await getPokemons(offset);
    const detailed = await Promise.all(
      data.results.map((p) => getPokemonDetails(p.url))
    );

    setPokemonList((prev) => [...prev, ...detailed]);
    setOffset(offset + 20);
    setLoading(false);
  }

  useEffect(() => {
    load();
  }, []);

  return { pokemonList, load, loading };
}
