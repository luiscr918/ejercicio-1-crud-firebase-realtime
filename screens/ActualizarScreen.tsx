import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { ref, update } from "firebase/database";
import { db } from "../firebase/Config";

export const ActualizarScreen = () => {
  const [nombre, setnombre] = useState("");
  const [precio, setPrecio] = useState<number>(0);
  const [stock, setStock] = useState<number>(0);
  const [descuento, setDescuento] = useState<number>(0);
  const calcular = () => {
    let total = stock * precio;
    let descuentoT = total - total * 0.1;
    setDescuento(descuentoT);
    editar(descuentoT);
  };
  const editar = (descuentoHecho: number) => {
    update(ref(db, "productos/" + nombre), {
      precio: precio,
      stock: stock,
      descuento: descuentoHecho,
    });
  };

  return (
    <View>
      <Text>ActualizarScreen</Text>
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
        placeholder="Ingresar stock"
        onChangeText={(texto) => setStock(parseInt(texto))}
        style={styles.input}
      />
      <Text>PRECION CON DESCUENTO:</Text>
      <TextInput readOnly style={styles.input} value={descuento.toString()} />
      <Button title="editar" onPress={calcular} />
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
