import React from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          { key: "1", name: "Nicolas" },
          { key: "2", name: "Pedro" },
          { key: "3", name: "Juan" },
          { key: "4", name: "Maria" },
          { key: "5", name: "Josefa" },
          { key: "6", name: "Nicolas" },
          { key: "7", name: "Pedro" },
          { key: "8", name: "Juan" },
          { key: "9", name: "Maria" },
          { key: "10", name: "Josefa" },
          { key: "11", name: "Nicolas" },
          { key: "12", name: "Pedro" },
          { key: "13", name: "Juan" },
          { key: "14", name: "Maria" },
          { key: "15", name: "Josefa" },
          { key: "16", name: "Nicolas" },
          { key: "17", name: "Pedro" },
          { key: "18", name: "Juan" },
          { key: "19", name: "Maria" },
          { key: "20", name: "Josefa" },
          { key: "21", name: "Nicolas" },
          { key: "22", name: "Pedro" },
          { key: "23", name: "Juan" },
          { key: "24", name: "Maria" },
          { key: "25", name: "Josefa" },
        ]}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 22,
    height: 50,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1
  }
});
