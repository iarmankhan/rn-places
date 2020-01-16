import React, {useState} from "react";
import {Text, View, StyleSheet} from "react-native";
import MapView, {Marker} from "react-native-maps";

const MapScreen = props => {
    const [selectedLocation, setSelectedLocation] = useState();

    const mapRegion = {
        latitude: 37.78,
        longitude: -122.43,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };

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

const styles = StyleSheet.create({
    map: {flex: 1}
});

export default MapScreen