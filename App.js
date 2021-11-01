import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Dimensions,
  Button,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import Greeting from "./src/components/Greeting";

const width = Dimensions.get("window").width;

export default function App() {
  const [text, setText] = useState("Happy 🐷");
  const [submit, setSubmit] = useState("");
  const onPress = () => {
    setSubmit(text);
    alert("Text sended successful");
  };
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
      <Button onPress={onPress} title="Accept" />
      <TouchableHighlight
        underlayColor={"#999"}
        activeOpacity={0.2}
        onPress={onPress}
      >
        <Text>Accept</Text>
      </TouchableHighlight>
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple("#00f", true)}
        onPress={onPress}
      >
        <View style={styles.view}>
          <Text>Accept</Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableOpacity style={styles.touchableOpacity} onPress={onPress}>
        <View style={styles.view}>
          <Text>Accept</Text>
        </View>
      </TouchableOpacity>
      <TouchableWithoutFeedback
        onPress={onPress}
      >
        <View style={styles.view}>
          <Text>Accept</Text>
        </View>
      </TouchableWithoutFeedback>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  touchableOpacity: {
    backgroundColor: "#eee",
  },
  view: {
    height: 40,
    width: 300,
  },
  input: {
    height: 40,
    alignItems: "center",
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
