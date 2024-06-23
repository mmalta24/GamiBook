import { StyleSheet } from "react-native";

const achievementStyles = StyleSheet.create({
    body: {
        backgroundColor: '#232323',
        width: '100%',
        height: '100%',
    },
    mainImg: {
        width: 155,
        height: 155,
        borderRadius: 100,
        maxWidth: 155,
        maxHeight: 155,
    },
    secondBody: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        borderRadius: 15,
        paddingHorizontal: 20
    },
    btns: {
        flexDirection: 'row',
        marginBottom: 20
    },
    viewCenter: {
        alignItems: 'center'
    },
    circle: {
        width: 170,
        height: 170,
        borderRadius: 100,
        backgroundColor: 'white',
        borderColor: '#232323',
        alignItems: 'center',
        borderWidth: 3,
        justifyContent: 'center',
        marginTop: 20

    },
    buttonPts: {
        backgroundColor: '#3E4553',
        width: '40%',
        height: 54,
        marginVertical: 20,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    userName: {
        color: '#353535',
        fontSize: 25,
        fontFamily: 'Sora-SemiBold',
        marginTop: 15
    },
    userUsername: {
        color: '#353535',
        fontSize: 19,
        fontFamily: 'Sora-Regular'
    },
    userPoints: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Sora-SemiBold',
        paddingLeft: 10
    },
    container: {
        width: "100%",
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: '#232323',
        width: 350,
        borderRadius: 15,
        marginHorizontal: 22,
        alignItems: 'center',
        marginTop: 25,
        paddingHorizontal: 5,
        paddingVertical: 5,
        marginBottom: 10,
    }
});

export default achievementStyles;