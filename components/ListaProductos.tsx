import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Producto } from "../screens/LeerScreen";
/* precio original y descuento */
export const ListaProductos = (props: Producto) => {
  let precioSinDescuento = props.precio * props.stock;
  return (
    <View>
      <Text style={{ fontSize: 30 }}>{props.id}</Text>
      <Text>Precio sin descuento: {precioSinDescuento}</Text>
      <Text>Preio con descuento:{props.descuento}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
