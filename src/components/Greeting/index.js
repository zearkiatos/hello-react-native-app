import React, { useState } from 'react';
import { Text } from 'react-native';
const Greeting = (props) => {
    const [text, setText] = useState(props.text);
    const updateText = () => {
        setText('Bye World! 👋 🌎')
    };
    return (<div>
        <Text style={{fontSize: 24}} onPress={updateText}>{text}</Text>
    </div>)
};

export default Greeting;
