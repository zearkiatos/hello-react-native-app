import React from "react";
import { StyleSheet, View, FlatList, Text, SectionList } from "react-native";
import data from "./src/mock/data.json";

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      ></FlatList>
      <SectionList
        sections={[
          { title: "Group 1", data: data.slice(0, 4) },
          { title: "Group 2", data: data.slice(5, 10) },
          { title: "Group 3", data: data.slice(11, 15) },
        ]}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
        renderSectionHeader={({ section }) => (
          <Text style={styles.section}>{section.title}</Text>
        )}
      />
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
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  section: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#ccc',
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2
  }
});
