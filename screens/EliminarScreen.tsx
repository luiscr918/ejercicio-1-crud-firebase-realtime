import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { ref, remove } from "firebase/database";
import { db } from "../firebase/Config";

export const EliminarScreen = () => {
  const [nombre, setnombre] = useState("");
  const eliminar = () => {
    remove(ref(db, "productos/" + nombre));
    Alert.alert("Exito", "se eliminó correctamente");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Eliminar Producto</Text>
      <TextInput
        placeholder="Ingresar nombre"
        onChangeText={(texto) => setnombre(texto)}
        style={styles.input}
        value={nombre}
        placeholderTextColor="#888"
      />
      <View style={styles.buttonContainer}>
        <Button title="Eliminar" onPress={eliminar} color="#F44336" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 24,
    color: "#333",
  },
  input: {
    fontSize: 20,
    backgroundColor: "#FFF",
    marginVertical: 8,
    width: "80%",
    borderRadius: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: "#CCC",
    color: "#222",
  },
  buttonContainer: {
    width: "80%",
    marginTop: 20,
  },
});
