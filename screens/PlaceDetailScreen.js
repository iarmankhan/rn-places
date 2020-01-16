import React from "react";
import {Text, View} from "react-native";

const PlaceDetailScreen = props => {
    return (
        <View>
            <Text>Place Detail Screen</Text>
        </View>
    )
};

PlaceDetailScreen.navigationOptions = navData => {
    return {
        headerTitle: navData.navigation.getParam('placeTitle')
    }
};

export default PlaceDetailScreen