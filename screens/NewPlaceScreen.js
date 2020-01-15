import React, {useState} from "react";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import {Button, Platform, StyleSheet, ScrollView, Text, TextInput, View} from "react-native";
import Colors from "../constants/Colors";

const NewPlaceScreen = props => {
    const [title, setTitle] = useState('');

    const titleChangeHandler = text => setTitle(text);

    const savePlaceHandler = () => {

    };

    return (
        <ScrollView>
            <View style={styles.form}>
            <View style={styles.formGroup}>
                <Text style={styles.label}>Title</Text>
                <TextInput style={styles.textInput} onChangeText={titleChangeHandler} value={title} />
            </View>
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