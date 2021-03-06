import React, {useCallback, useState} from "react";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import {Button, Platform, StyleSheet, ScrollView, Text, TextInput, View, Alert} from "react-native";
import Colors from "../constants/Colors";
import {useDispatch} from "react-redux";
import * as placesActions from '../store/actions/places';
import ImgPicker from "../components/ImagePicker";
import LocationPicker from "../components/LocationPicker";

const NewPlaceScreen = props => {
    const [title, setTitle] = useState('');
    const [selectedImage, setSelectedImage] = useState();
    const [selectedLocation, setSelectedLocation] = useState();

    const titleChangeHandler = text => setTitle(text);

    const dispatch = useDispatch();

    const savePlaceHandler = () => {
        try{
            dispatch(placesActions.addPlace(title, selectedImage, selectedLocation));
            props.navigation.goBack();
        }catch (e) {
            Alert.alert('Something went wrong!', 'Please try again.', [{text: 'Okay'}])
        }
    };

    const imageTakenHandler = imagePath => {
        setSelectedImage(imagePath);
    };

    const locationPickedHandler = useCallback(location => {
        setSelectedLocation(location);
    }, [setSelectedLocation]);

    return (
        <ScrollView>
            <View style={styles.form}>
            <View style={styles.formGroup}>
                <Text style={styles.label}>Title</Text>
                <TextInput style={styles.textInput} onChangeText={titleChangeHandler} value={title} />
            </View>
                <ImgPicker onImageTaken={imageTakenHandler} />
                <LocationPicker navigation={props.navigation} onLocationPicked={locationPickedHandler}/>
            <Button title="Save Place" onPress={savePlaceHandler} color={Colors.primary} />
            </View>
        </ScrollView>
    )
};

NewPlaceScreen.navigationOptions = navData => {
    return {
        headerTitle: "Add Place",
    }
};

const styles = StyleSheet.create({
    form: {
        margin:30,
    },
    formGroup: {

    },
    label: {
        fontSize: 18,
        marginBottom: 15
    },
    textInput: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 15,
        paddingVertical: 4,
        paddingHorizontal: 2
    }
});


export default NewPlaceScreen