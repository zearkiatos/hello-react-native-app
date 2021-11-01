import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Dimensions,
  Button,
} from "react-native";
import Greeting from "./src/components/Greeting";

const width = Dimensions.get("window").width;

export default function App() {
  const [text, setText] = useState("Happy 🐷");
  const [submit, setSubmit] = useState("");
  return (
    <View style={styles.container}>
      <Greeting text="Hello World! 👋 🌎" style={[styles.text, styles.red]} />
      <Text>Text: {text}</Text>
      <Text>Data Submitted: {submit}</Text>
      <TextInput
        style={styles.input}
        placeholder="Write Here"
        onChangeText={(t) => setText(t)}
        defaultValue={text}
      />
      <Button onPress={() => {
        setSubmit(text);
        alert('Text sended successful');
      }} title="Accept" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    width: "100%",
  },
  text: {
    fontSize: 24,
    color: "white",
  },
  red: {
    backgroundColor: "red",
  },
  green: {
    backgroundColor: "green",
  },
  blue: {
    backgroundColor: "blue",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
