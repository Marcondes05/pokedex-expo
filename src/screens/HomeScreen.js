import { View, FlatList, ActivityIndicator } from "react-native";
import SearchBar from "../components/SearchBar";
import PokemonCard from "../components/PokemonCard";
import usePokemon from "../hooks/usePokemon";
import { getPokemonByName } from "../api/pokeapi";
import { useState } from "react";

export default function HomeScreen({ navigation }) {
  const { pokemonList, load, loading } = usePokemon();
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);

  async function handleSearch(text) {
    setSearch(text);

    if (text.length === 0) {
      setFiltered([]);
      return;
    }

    try {
      const result = await getPokemonByName(text);
      setFiltered([result]);
    } catch {
      setFiltered([]);
    }
  }

  const data = search ? filtered : pokemonList;

  return (
    <View style={{ flex: 1 }}>
      <SearchBar value={search} onChange={handleSearch} />

      <FlatList
        data={data}
        keyExtractor={(item) => String(item.id)}
        numColumns={2}
        onEndReached={load}
        onEndReachedThreshold={0.4}
        renderItem={({ item }) => (
          <PokemonCard
            pokemon={item}
            onPress={() => navigation.navigate("Details", { pokemon: item })}
          />
        )}
        ListFooterComponent={
          loading && <ActivityIndicator size="large" style={{ margin: 20 }} />
        }
      />
    </View>
  );
}
