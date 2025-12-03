import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function PokemonCard({ pokemon, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image 
        source={{ uri: pokemon.sprites.front_default }} 
        style={{ width: 80, height: 80 }}
      />
      <Text style={styles.name}>{pokemon.name.toUpperCase()}</Text>
      <Text style={styles.id}>#{pokemon.id}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    margin: 8,
    alignItems: "center",
    elevation: 4,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
  },
  id: {
    color: "#888",
    marginTop: 4,
  },
});
