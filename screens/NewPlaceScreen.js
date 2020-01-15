import React from "react";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import {Platform, Text, View} from "react-native";

const NewPlaceScreen = props => {
    return (
        <View>
            <Text>Add Place</Text>
        </View>
    )
};

NewPlaceScreen.navigationOptions = navData => {
    return {
        headerTitle: "Add Place",
    }
};


export default NewPlaceScreen