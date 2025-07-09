import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
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
    Alert.alert("Exito", "Producto actualizado correctamente");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Actualizar Producto</Text>
      <TextInput
        placeholder="Ingresar nombre"
        onChangeText={(texto) => setnombre(texto)}
        style={styles.input}
        value={nombre}
        placeholderTextColor="#888"
      />
      <Text style={styles.label}>Ingrese el precio:</Text>
      <TextInput
        placeholder="Ingresar precio"
        onChangeText={(texto) => setPrecio(parseFloat(texto))}
        style={styles.input}
        value={precio.toString()}
        keyboardType="numeric"
        placeholderTextColor="#888"
      />
      <Text style={styles.label}>Ingrese el stock:</Text>
      <TextInput
        placeholder="Ingresar stock"
        onChangeText={(texto) => setStock(parseInt(texto))}
        style={styles.input}
        value={stock.toString()}
        keyboardType="numeric"
        placeholderTextColor="#888"
      />
      <Text style={styles.label}>Precio con descuento:</Text>
      <TextInput
        editable={false}
        style={[styles.input, styles.disabledInput]}
        value={descuento.toString()}
      />
      <View style={styles.buttonContainer}>
        <Button title="Editar" onPress={calcular} color="#2196F3" />
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
  label: {
    fontSize: 18,
    color: "#555",
    alignSelf: "flex-start",
    marginLeft: "10%",
    marginTop: 10,
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
  disabledInput: {
    backgroundColor: "#EEE",
    color: "#AAA",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "80%",
    marginTop: 20,
    gap: 10,
  },
});
