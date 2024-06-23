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
        console.log(error);
    }
}


const getBooks = async (data) => {
    try {
        const response = await fetch(
            `https://gamibook.onrender.com/myBooks${Object.keys(data).length === 0 ? '' : `?category=${data.id}`}`, {
            method: "GET",
            headers: {
                Accept: 'application/json',
                "Content-Type": 'application/json',
                'Authorization': `Bearer ${await getToken()}`
            },
        }
        );
        const json = await response.json();
        return json.books;
    } catch (error) {
        console.error(error);
    }
}

const addBook = async (data) => {
    try {
        const response = await fetch('https://gamibook.onrender.com/myBooks', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                "Content-Type": 'application/json',
                'Authorization': `Bearer ${await getToken()}`
            },
            body: JSON.stringify({
                code: +data
            }),
        });
        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
    }
}

const giveLike = async (data) => {
    try {
        const response = await fetch(`https://gamibook.onrender.com/myBooks/${data}`, {
            method: 'PATCH',
            headers: {
                Accept: 'application/json',
                "Content-Type": 'application/json',
                'Authorization': `Bearer ${await getToken()}`
            }
        });
        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
    }
}

const getBookById = async (data) => {
    try {
        const response = await fetch(
            `https://gamibook.onrender.com/myBooks/${data}`, {
            method: "GET",
            headers: {
                Accept: 'application/json',
                "Content-Type": 'application/json',
                'Authorization': `Bearer ${await getToken()}`
            },
        }
        );
        const json = await response.json();
        return json.book;
    } catch (error) {
        console.error(error);
    }
}

const getExercise = async (data) => {
    try {
        const response = await fetch(
            `https://gamibook.onrender.com/myBooks/${data[0]}/modules/${data[1]}/activities/${data[2]}`, {
            method: "GET",
            headers: {
                Accept: 'application/json',
                "Content-Type": 'application/json',
                'Authorization': `Bearer ${await getToken()}`
            },
        }
        );
        const json = await response.json();
        return json.activity;
    } catch (error) {
        console.error(error);
    }
}

const updateExercise = async ({ idBook, idModule, idActivity, answers }) => {
    try {
        console.log("a");
        const response = await fetch(
            `https://gamibook.onrender.com/myBooks/${idBook}/modules/${idModule}/activities/${idActivity}`, {
            method: 'PATCH',
            headers: {
                Accept: 'application/json',
                "Content-Type": 'application/json',
                'Authorization': `Bearer ${await getToken()}`
            },
            body: JSON.stringify({ answers }),
        });
        const json = await response.json();
        console.log(json);
        return json;
    } catch (error) {
        console.error(error);
    }
}

export { getBooks, addBook, giveLike, getBookById, getExercise, updateExercise }