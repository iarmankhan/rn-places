import React from "react";
import {Platform, Text, View} from "react-native";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
const PlacesListScreen = props => {
    return (
        <View>
            <Text>PlacesList</Text>
        </View>
    )
};
PlacesListScreen.navigationOptions = navData => {
    return {
        headerTitle: "All Places",
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton} title="New Place">
                <Item
                    title="Add Place"
                    iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
                    onPress={() => navData.navigation.navigate('NewPlace')}
                />
            </HeaderButtons>
        )
    }
};


export default PlacesListScreen