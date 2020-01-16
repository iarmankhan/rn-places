import * as FileSystem from "expo-file-system";
import {insertPlace} from "../../helpers/db";

export const ADD_PLACE = 'ADD_PLACE';

export const addPlace = (title, image) => {
    return async (dispatch, getState) => {
        const filename = image.split('/').pop();
        const newPath = FileSystem.documentDirectory + filename;

        try{
            await FileSystem.moveAsync({
                from: image,
                to: newPath
            });
            const dbResult = await insertPlace(title, newPath, 'Dummy Address', 15.6, 12.3);

            dispatch({
                type: ADD_PLACE,
                placeData: {
                    id: dbResult.insertId,
                    title: title,
                    image: newPath,
                }
            });
        }catch (e) {
            console.log(e);
            throw e;
        }


    };
};