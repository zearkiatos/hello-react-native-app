import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import * as Location from 'expo-location';
import Constants from 'expo-constants';
import MapView from 'react-native-maps';
import { Dimensions } from 'react-native-web';
const PERMISSIONS = {
    GRANTED: 'granted'
};

const GeolocalizationDemo = () => {
    const [location, setLocation] = useState(null);
    const searchLocation = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== PERMISSIONS.GRANTED) {
            setErrorMessage
            return Alert.alert('We do not have the necessary permissions to access to the location');
        };
        const location = await Location.getCurrentPositionAsync({});
        console.log('Location:', location);
        setLocation(location)
    };

    useEffect(() => {
        searchLocation()
    }, []);
    let text = 'Waiting..';
    if (!location) 
        return <Text>{text}</Text>
  
    console.log(location);
    return (
        <View style={styles.container}>
            <MapView style={styles.map} />
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
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
});


export default GeolocalizationDemo;