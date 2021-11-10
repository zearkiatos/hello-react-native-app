import React, { useState } from 'react';
import { StyleSheet, View, Alert, Button } from 'react-native';

const createDialog = () => Alert.alert(
    'Title',
    'Subitile some message for the dialog',
    [{
        text: 'Cancel',
        onPress: () => { },
        style: 'cancel'
    },
    {
        text: 'Accept',
        onPress: () => console.log('Button pressed'),
        style: 'accept'
    }
    ],
    { cancelable: false }
);
const AlertDemo = () => {
    const [modal, setModal] = useState(false);
    return (
        <View style={styles.container}>
            <Button title="Open Dialog" onPress={createDialog} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "stretch",
        justifyContent: "center",
        paddingTop: 22,
    },
});


export default AlertDemo;