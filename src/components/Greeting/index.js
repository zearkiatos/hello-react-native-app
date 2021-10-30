import React, { useState } from 'react';
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        color: 'red'
    }
})
const Greeting = (props) => {
    const [text, setText] = useState(props.text);
    const updateText = () => {
        setText('Bye World! 👋 🌎')
    };
    return (<div>
        <Text style={styles.text} onPress={updateText}>{text}</Text>
    </div>)
};

export default Greeting;
