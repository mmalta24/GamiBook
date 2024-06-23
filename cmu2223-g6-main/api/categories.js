import AsyncStorage from '@react-native-async-storage/async-storage';

const getToken = async () => {
    try {
        const value = await AsyncStorage.getItem('@accessToken');
        if (value !== null) {
            return value
        }
        else {
            return null
        }
    } catch (error) {
        // Error retrieving data
        console.log(error);
    }
}

const getCategories = async () => {
    try {
        const response = await fetch(
            `https://gamibook.onrender.com/categories`, {
            method: "GET",
            headers: {
                Accept: 'application/json',
                "Content-Type": 'application/json',
                'Authorization': `Bearer ${await getToken()}`
            },
        }
        );
        const json = await response.json();
        return json.categories;
    } catch (error) {
        console.error(error);
    }
}

export {getCategories}