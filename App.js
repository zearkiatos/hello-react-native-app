import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, Text, ActivityIndicator, Image } from "react-native";
import config from "./src/config";

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`${config.JSON_PLACEHOLDER_API_BASE_URL}/users`)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View>
        <Text style={styles.center}>Loading...</Text>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
        keyExtractor={item => String(item.id)}
      ></FlatList>
      <Image
        style={styles.photo}
        source={require('./assets/icon.png')}
      />
      <Image
        style={styles.photo}
        source={{url: 'https://placekitten.com/200/200'}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  photo: {
    height: 200,
    width: 200
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
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
});
