import React, {useCallback, useEffect, useState} from "react";
import {Text, View, StyleSheet, TouchableOpacity, Platform, Alert} from "react-native";
import MapView, {Marker} from "react-native-maps";
import Colors from "../constants/Colors";

const MapScreen = props => {
    const [selectedLocation, setSelectedLocation] = useState();

    const mapRegion = {
        latitude: 37.78,
        longitude: -122.43,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };

    const savePickedLocationHandler = useCallback(() => {
        if(!selectedLocation){
            Alert.alert('A location is required!', 'Please select any location on map.', [{text: 'Okay'}]);
            return;
        }
        props.navigation.navigate('NewPlace', {pickedLocation: selectedLocation});
    }, [selectedLocation]);

    useEffect(() => {
        props.navigation.setParams({saveLocation: savePickedLocationHandler})
    }, [savePickedLocationHandler]);


    let markerCoordinates;

    if(selectedLocation){
        markerCoordinates = {
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng
        }
    }

    const selectLocationHandler = e => {
        setSelectedLocation({
            lat: e.nativeEvent.coordinate.latitude,
            lng: e.nativeEvent.coordinate.longitude
        })
    };

    return (
        <MapView region={mapRegion} style={styles.map} onPress={selectLocationHandler}>
            {markerCoordinates && <Marker coordinate={markerCoordinates} title="Picked Location" />}
        </MapView>
    )
};

MapScreen.navigationOptions = navData => {
    const saveFn = navData.navigation.getParam('saveLocation')
    return{
        headerTitle: "Map",
        headerRight: () => (
            <TouchableOpacity style={styles.headerButton} onPress={saveFn}>
                <Text style={styles.headerButtonText}>Save</Text>
            </TouchableOpacity>
        )
    }
};

const styles = StyleSheet.create({
    map: {flex: 1},
    headerButton: {
        marginHorizontal: 20,
    },
    headerButtonText: {
        fontSize: 16,
        color: Platform.OS === 'android' ? 'white' : Colors.primary
    }
});

export default MapScreen