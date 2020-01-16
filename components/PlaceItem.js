import React from "react";
import {View, StyleSheet, Text, Image, TouchableOpacity, TouchableNativeFeedback, Platform} from "react-native";
import Colors from "../constants/Colors";

const PlaceItem = props => {
    let TouchableCmp = TouchableOpacity;

    if(Platform.OS === 'android' && PlaceItem.OS >= 23) {
        TouchableCmp = TouchableNativeFeedback;
    }
    return (
        <TouchableCmp onPress={props.onSelect} style={styles.placeItem}>
            <Image source={{uri: props.image}} style={styles.image} />
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.address}>{props.address}</Text>
            </View>
        </TouchableCmp>
    )
};

const styles = StyleSheet.create({
    placeItem: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingVertical: 15,
        paddingHorizontal: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: 'blue',
        borderColor: Colors.primary,
        borderWidth: 1,
    },
    infoContainer: {
        marginLeft: 25,
        width: 250,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    title: {
        color: 'black',
        fontSize: 18,
        marginBottom: 5
    },
    address: {
        color: '#666',
        fontSize: 16
    }
});

export default PlaceItem;