import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { ref, set } from "firebase/database";
import { db } from "../firebase/Config";

export const CreateScreen = () => {
  const [nombre, setnombre] = useState("");
  const [precio, setPrecio] = useState<number>(0);
  const [categoria, setCategoria] = useState("");
  const [stock, setStock] = useState<number>(0);
  const [descuento, setDescuento] = useState<number>(0);
  const calcular = () => {
    let total = stock * precio;
    let descuentoT = total - total * 0.1;
    setDescuento(descuentoT);
    guardar(descuentoT);
  };
  const guardar = (descuentoHecho: number) => {
    set(ref(db, "productos/" + nombre), {
      precio: precio,
      categoria: categoria,
      stock: stock,
      descuento: descuentoHecho,
    });
  };
  return (
    <View>
      <Text>CreateScreen</Text>
      <TextInput
        placeholder="Ingresar nombre"
        onChangeText={(texto) => setnombre(texto)}
        style={styles.input}
      />
      <TextInput
        placeholder="Ingresar precio"
        onChangeText={(texto) => setPrecio(parseFloat(texto))}
        style={styles.input}
      />
      <TextInput
        placeholder="Ingresar categoria"
        onChangeText={(texto) => setCategoria(texto)}
        style={styles.input}
      />
      <TextInput
        placeholder="Ingresar stock"
        onChangeText={(texto) => setStock(parseInt(texto))}
        style={styles.input}
      />
      <TextInput readOnly style={styles.input} value={descuento.toString()} />
      <Button title="Guardar" onPress={calcular} />
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
