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
  }, []);

  useEffect(() => {
    sumarAcumulado();
  }, [datos]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Total acumulado del inventario</Text>
      <FlatList
        data={datos}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.precio * item.stock}</Text>
          </View>
        )}
      />
      <Text style={styles.totalText}>Total: {total}</Text>
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
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
    textAlign: "center",
  },
  itemContainer: {
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 12,
    marginVertical: 6,
    width: 220,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  itemText: {
    fontSize: 18,
    color: "#444",
  },
  totalText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#2196F3",
    marginTop: 24,
  },
});
