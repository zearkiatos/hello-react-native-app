import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import * as Location from 'expo-location';
import Constants from 'expo-constants';
import MapView, { Marker } from 'react-native-maps';
import { Dimensions } from 'react-native-web';
const PERMISSIONS = {
    GRANTED: 'granted'
};

const GeolocalizationDemo = () => {
    const [currentLocation, setCurrentLocation] = useState({});
    const searchLocation = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== PERMISSIONS.GRANTED) {
            setErrorMessage
            return Alert.alert('We do not have the necessary permissions to access to the location');
        };
        const location = await Location.getCurrentPositionAsync({});
        setCurrentLocation(location)
    };

    useEffect(() => {
        searchLocation()
    }, []);
    let text = 'Waiting..';
    console.log(currentLocation);
    return (
        <View style={styles.container}>
            <MapView style={styles.map}>
                {
                    currentLocation.coords ?
                        <Marker
                            coordinate={currentLocation.coords}
                            title="Your current Location"
                            description="Point Description"
                        />
                        : <Text>{text}</Text>
                }
            </MapView>
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