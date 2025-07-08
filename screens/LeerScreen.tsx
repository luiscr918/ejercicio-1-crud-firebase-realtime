import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import { db } from "../firebase/Config";
import { ListaProductos } from "../components/ListaProductos";
export interface Producto {
  id: string;
  precio: number;
  categoria: string;
  stock: number;
  descuento: number;
}
export const LeerScreen = () => {
  const [datos, setDatos] = useState<Producto[]>();
  const leer = () => {
    const starCountRef = ref(db, "productos/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      /*       console.log(data); */
      let arreglo: Producto[] = Object.keys(data).map((id) => ({
        id,
        ...data[id],
      }));
      setDatos(arreglo);
    });
  };
  useEffect(() => {
    leer();
  }, []);

  return (
    <View>
      <Text>LeerScreen</Text>
      <FlatList
        data={datos}
        renderItem={({ item }) => <ListaProductos {...item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
