import React, {useState} from "react";
import {View, ActivityIndicator, Alert, StyleSheet, Button, Text} from "react-native";
import Colors from "../constants/Colors";
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

const LocationPicker = props => {
    const [isFetchingState, setIsFetchingState] = useState(false);
    const [pickedLocation, setPickedLocation] = useState();

    const verifyPermissions = async () => {
        const result = await Permissions.askAsync(Permissions.LOCATION);
        if(result.status !== 'granted'){
            Alert.alert(
                'Insufficient Permissions!',
                'You need to grant location permissions to use this app.',
                [{text: 'Okay'}]
            );
            return false;
        }
        return true;
    };
    const getLocationHandler = async () => {
        const hasPermissions = await verifyPermissions();
        if(!hasPermissions){
            return;
        }
        try{
            setIsFetchingState(true);
            const location = await Location.getCurrentPositionAsync({
                timeout: 5000
            });
            setPickedLocation({
                lat: location.coords.latitude,
                lng: location.coords.longitude
            })
        } catch (e) {
            Alert.alert('Could not fetch location', 'Please try again later or pick a location on map.', [{text: 'Okay'}])
        }
        setIsFetchingState(false);
    };

    return (
      <View style={styles.locationPicker}>
          <View style={styles.mapPreview}>
              { isFetchingState
                  ? <ActivityIndicator color={Colors.primary} size="large" />
                  : <Text>No Location chosen yet!</Text>
              }
          </View>
          <Button title="Get User Location" color={Colors.primary} onPress={getLocationHandler} />
      </View>
    );
};

const styles = StyleSheet.create({
    locationPicker: {
        marginBottom: 15
    },
    mapPreview: {
        marginBottom: 10,
        width: '100%',
        height: 150,
        borderColor: '#ccc',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default LocationPicker