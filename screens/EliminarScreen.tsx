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
    <View>
      <Text>EliminarScreen</Text>
      <TextInput
        placeholder="Ingresar nombre"
        onChangeText={(texto) => setnombre(texto)}
        style={styles.input}
      />
      <Button title="Eliminar" onPress={eliminar} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 25,
    backgroundColor: "#9999",
    margin: 6,
    width: "80%",
  },
});
