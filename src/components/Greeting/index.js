import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';

const Greeting = (props) => {
    const [text, setText] = useState(props.text);
    const updateText = () => {
        setText('Bye World! 👋 🌎')
    };
    return <Text style={props.style} onPress={updateText}>{text}</Text>
};

export default Greeting;
