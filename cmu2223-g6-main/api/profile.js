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

const patchProfile = async (data) => {
    fetch("https://gamibook.onrender.com/users/me", {
        method: 'PATCH',
        headers: {
          Accept: 'application/json',
          "Content-Type": 'application/json',
          'Authorization': `Bearer ${await getToken()}`
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
          .then(res => {
              if (res.success) {
                console.log('Profile successfully changed.');
              }
              else {
                console.log('An error occurs.');
              }
          });
}

const getProfile = async () => {
    try {
        const response = await fetch(
            `https://gamibook.onrender.com/users/me`, {
            method: "GET",
            headers: {
                Accept: 'application/json',
                "Content-Type": 'application/json',
                'Authorization': `Bearer ${await getToken()}`
            },
        }
        );

        const json = await response.json();
        return json.user;
    } catch (error) {
        console.error(error);
    }
}


const getNotifications = async () => {
    try {
        const response = await fetch(
            `https://gamibook.onrender.com/users/me/notifications`, {
            method: "GET",
            headers: {
                Accept: 'application/json',
                "Content-Type": 'application/json',
                'Authorization': `Bearer ${await getToken()}`
            },
        }
        );

        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
    }
}

const getAchievements = async () => {
    try {
        const response = await fetch(
            `https://gamibook.onrender.com/achievements`, {
            method: "GET",
            headers: {
                Accept: 'application/json',
                "Content-Type": 'application/json',
                'Authorization': `Bearer ${await getToken()}`
            },
        }
        );

        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
    }
}

const removeNotification = async (val) => {
    try {
        const response = await fetch(
            `https://gamibook.onrender.com/users/me/notifications/${val}`, {
            method: "DELETE",
            headers: {
                Accept: 'application/json',
                "Content-Type": 'application/json',
                'Authorization': `Bearer ${await getToken()}`
            },
        }
        );

        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
    }
}




export {getProfile, patchProfile, getNotifications, getAchievements, removeNotification}