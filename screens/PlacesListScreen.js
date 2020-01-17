import React, {useEffect} from "react";
import {Alert, FlatList, Platform, Text, View} from "react-native";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import {useDispatch, useSelector} from "react-redux";
import PlaceItem from "../components/PlaceItem";
import * as placesActions from '../store/actions/places'

const PlacesListScreen = props => {
    const places = useSelector(state => state.places.places);
    const dispatch = useDispatch();

    useEffect(() => {
        try{
            dispatch(placesActions.setPlaces());
        }catch (e) {
            Alert.alert('Something went wrong!', 'Please try again.', [{text: 'Okay'}])
        }
    }, [dispatch]);

    if(places.length === 0){
        return (<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}><Text>No Places Found!</Text></View>)
    }

    return (
        <FlatList
            data={places}
            keyExtractor={item => item.id}
            renderItem={itemData => (
                <PlaceItem
                    image={itemData.item.imageUri}
                    title={itemData.item.title}
                    address={itemData.item.address}
                    onSelect={() => {
                        props.navigation.navigate('PlaceDetail', {
                            placeTitle: itemData.item.title,
                            placeId: itemData.item.id
                        })
                    }}
                />)
            }
        />
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