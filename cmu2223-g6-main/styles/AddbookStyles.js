import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    body: {
        backgroundColor: '#232323',
        width: '100%',
        height: '100%',
    },
    secondBody: {
        backgroundColor: '#FFFFFF',
        width: '100%',
        height: '100%',
        display: 'flex',
        borderRadius: 15,
        paddingHorizontal: 20
    },
    btns: {
        flexDirection: 'row',
        marginBottom: 20,
        justifyContent: "space-between",
        alignItems: "center"
    },
    changeView: {
        color: '#3E4553',
        fontFamily: 'Sora-Regular'
    }
});

/*
body: {
        backgroundColor: '#232323',
        width: '100%',
        height: '100%',
        paddingVertical: 20
    },
    main: {
        paddingHorizontal: 20,
        backgroundColor: "white"
    },
    header: {
        width: '100%',
        //flexDirection: 'row',
        //justifyContent: 'space-between',
        //alignItems: 'center',
        marginTop: 20
    },

    body: {
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    mainText: {
        maxWidth: 300,
        textAlign: "center",
        fontSize: 16,
        color: 'black',
        fontFamily: 'Sora-Regular'
    }
     */

export default styles;