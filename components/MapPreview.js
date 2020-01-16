import React from "react";
import {Image, StyleSheet, View, TouchableOpacity} from "react-native";
import ENV from '../env';
import Colors from "../constants/Colors";

const MapPreview = props => {

    let imagePreviewUrl;

    if (props.location) {
        imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${props.location.lat},${props.location.lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:A%7C${props.location.lat},${props.location.lng}&key=${ENV.googleApiKey}`;
    }

    return (
        <TouchableOpacity style={{...styles.mapPreview, ...props.style}} onPress={props.onPress}>
            {props.location ? <Image source={{uri: imagePreviewUrl}} style={styles.mapImage}/> : props.children}
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    mapPreview: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    mapImage: {
        width: '100%',
        height: '100%'
    }
});

export default MapPreview