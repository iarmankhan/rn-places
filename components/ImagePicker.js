import React from "react";
import {View, Button, Text, StyleSheet, Image, Alert} from "react-native";
import Colors from "../constants/Colors";
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

const ImgPicker = props => {
    const verifyPermissions = async () => {
        const result = await Permissions.askAsync(Permissions.CAMERA, Permissions.CAMERA_ROLL);
        if(result.status !== 'granted'){
            Alert.alert(
                'Insufficient Permissions!',
                'You need to grant camera permissions to use this app.',
                [{text: 'Okay'}]
            );
            return false;
        }
        return true;
    };

    const takeImageHandler = async () => {
        const hasPermissions = await verifyPermissions();
        if(!hasPermissions) {
            return;
        }
        await ImagePicker.launchCameraAsync();
    };

    return (
      <View style={styles.imagePicker}>
          <View style={styles.imagePreview}>
              <Text>No image picked yet!</Text>
              <Image style={styles.image}/>
          </View>
          <Button title="Take Image" onPress={takeImageHandler} color={Colors.primary} />
      </View>
    );
};

const styles = StyleSheet.create({
    imagePicker: {
        alignItems: 'center'
    },
    imagePreview: {
        width: '100%',
        height: 200,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ccc',
        borderWidth: 1
    },
    image: {
        width: '100%',
        height: '100%'
    },
});

export default ImgPicker