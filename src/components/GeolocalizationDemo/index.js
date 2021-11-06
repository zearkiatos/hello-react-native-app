import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import * as Location from 'expo-location';
import Constants from 'expo-constants';
const PERMISSIONS = {
    GRANTED: 'granted'
}
const GeolocalizationDemo = () => {
    const searchLocation = async () => {
        const { status } = await Location.requestPermissionsAsync();
        if (status !== PERMISSIONS.GRANTED) {
            return Alert.alert('We do not have the necessary permissions to access to the location');
        };
        const location = await Location.getCurrentPositionAsync({});
        console.log(location);
    };

    useEffect(() => {
        searchLocation()
    });
    return (
        <View style={styles.container}>
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


export default GeolocalizationDemo;