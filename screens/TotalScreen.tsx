import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import { db } from "../firebase/Config";
import { Producto } from "./LeerScreen";
export const TotalScreen = () => {
  const [datos, setDatos] = useState<Producto[]>();
  const [total, setTotal] = useState<number | undefined>(0);
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
  const sumarAcumulado = () => {
    let sumaTotal: number | undefined = datos?.reduce(
      (acumulador: number, producto: Producto) => {
        return acumulador + producto.precio * producto.stock;
      },
      0
    );
    setTotal(sumaTotal);
  };
  useEffect(() => {
    leer();
    sumarAcumulado();
  }, []);

  return (
    <View>
      <Text>Total acumulado del inventario </Text>
      <FlatList
        data={datos}
        renderItem={({ item }) => <Text>{item.precio * item.stock}</Text>}
      />
      <Text style={{ fontSize: 30 }}>Total: {total}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
