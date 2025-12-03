import { View, TextInput, StyleSheet } from "react-native";

export default function SearchBar({ value, onChange }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Buscar Pokémon..."
        value={value}
        onChangeText={onChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
  },
});
