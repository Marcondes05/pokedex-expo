import { View, Text, Image, StyleSheet } from "react-native";

export default function DetailsScreen({ route }) {
  const { pokemon } = route.params;

  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: pokemon.sprites.front_default }} 
        style={styles.img}
      />

      <Text style={styles.name}>{pokemon.name.toUpperCase()}</Text>
      <Text style={styles.id}>#{pokemon.id}</Text>

      <Text style={styles.title}>Tipos:</Text>
      {pokemon.types.map((t) => (
        <Text key={t.type.name}>• {t.type.name}</Text>
      ))}

      <Text style={styles.title}>Altura: {pokemon.height}</Text>
      <Text style={styles.title}>Peso: {pokemon.weight}</Text>

      <Text style={styles.title}>Estatísticas:</Text>
      {pokemon.stats.map((s) => (
        <Text key={s.stat.name}>
          {s.stat.name}: {s.base_stat}
        </Text>
      ))}

      <Text style={styles.title}>Habilidades:</Text>
      {pokemon.abilities.map((a) => (
        <Text key={a.ability.name}>• {a.ability.name}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  img: {
    width: 150,
    height: 150,
    alignSelf: "center",
  },
  name: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
  },
  id: {
    textAlign: "center",
    color: "#555",
    marginBottom: 20,
  },
  title: {
    marginTop: 10,
    fontWeight: "bold",
  },
});
