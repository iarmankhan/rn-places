import React from "react";
import {Image, StyleSheet, View, TouchableOpacity, TouchableNativeFeedback, Platform} from "react-native";
import ENV from '../env';
import Colors from "../constants/Colors";

const MapPreview = props => {
    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 23) {
        TouchableCmp = TouchableNativeFeedback;
    }

    let imagePreviewUrl;
    if (props.location) {
        imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${props.location.lat},${props.location.lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:A%7C${props.location.lat},${props.location.lng}&key=${ENV.googleApiKey}`;
    }

    return (
        <View style={{...styles.mapPreview, ...props.style}}>
            <TouchableCmp onPress={props.onPress}>
                {props.location ? <Image source={{uri: imagePreviewUrl}} style={styles.mapImage}/> : props.children}
            </TouchableCmp>
        </View>
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