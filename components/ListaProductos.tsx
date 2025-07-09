import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Producto } from "../screens/LeerScreen";
/* precio original y descuento */
export const ListaProductos = (props: Producto) => {
  let precioSinDescuento = props.precio * props.stock;
  return (
    <View style={styles.card}>
      <Text style={styles.id}>{props.id}</Text>
      <Text style={styles.precioSinDescuento}>
        Precio sin descuento:{" "}
        <Text style={styles.valor}>{precioSinDescuento}</Text>
      </Text>
      <Text style={styles.precioConDescuento}>
        Precio con descuento:{" "}
        <Text style={styles.valor}>{props.descuento}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 18,
    marginVertical: 10,
    marginHorizontal: 16,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  id: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2196F3",
    marginBottom: 8,
  },
  precioSinDescuento: {
    fontSize: 16,
    color: "#333",
    marginBottom: 4,
  },
  precioConDescuento: {
    fontSize: 16,
    color: "#388E3C",
  },
  valor: {
    fontWeight: "bold",
    color: "#444",
  },
});
