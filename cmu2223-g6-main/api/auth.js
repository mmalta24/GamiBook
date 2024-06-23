const loginUser = async (data) => {
    try {
        const response = await fetch(`https://gamibook.onrender.com/users/login`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(data)
        });
        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
    }
}

const registerUser = async (data) => {
    try {
        const response = await fetch(`https://gamibook.onrender.com/users/register`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(data)
        });
        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
    }
}

export { loginUser, registerUser }