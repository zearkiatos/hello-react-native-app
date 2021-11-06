import React, { useState } from 'react';
import { StyleSheet, Modal, View, Text, Button } from 'react-native';

const ModalDemo = () => {
    const [modal, setModal] = useState(false);
    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modal}
            >
                <View style={styles.center}>
                    <View styles={styles.content}>
                        <Text>I'm a modal</Text>
                        <Button title="Close" onPress={() => setModal(!modal)}></Button>
                    </View>
                </View>
            </Modal>
            <Button title="Open Modal" onPress={() => setModal(!modal)} />
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
    center: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)'
    },
    content: {
        flex: 1,
        backgroundColor: '#555',
        alignItems: 'stretch',
        justifyContent: 'center',
        margin: 25,
    }
});


export default ModalDemo;