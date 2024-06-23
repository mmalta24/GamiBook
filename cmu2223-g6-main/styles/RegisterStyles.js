import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#284B63',
        width: '100%',
        height: '123%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    logo: {
        width: 158,
        height: 130,
        marginVertical: 30
    },
    bodyForm: {
        backgroundColor: '#232323',
        width: '100%',
        height: '80%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        paddingVertical: 15,
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    ballred: {
        width: 200,
        height: 206,
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    title: {
        fontFamily: 'Sora-SemiBold',
        color: 'white',
        fontSize: 26,
        alignSelf: 'flex-start',
        marginVertical: 20
    },
    description: {
        fontFamily: 'Sora-Regular',
        color: 'white',
        alignSelf: 'flex-start',
        fontSize: 16
    },
    buttonLogin: {
        backgroundColor: '#3E4553',
        width: '100%',
        height: 54,
        marginVertical: 30,
        borderRadius: 10
    },
    buttonRegister: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: 'white',
        width: '100%',
        height: 54,
        marginVertical: 30,
        borderRadius: 10,
    },
    txtBtn: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'Sora-SemiBold',
        height: 54,
        width: '100%',
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    divider: {
        width: '100%',
        height: 1,
        backgroundColor: "#D9D9D9"
    },
    errorBg: {
        backgroundColor: "rgba(188, 95, 81, 0.6)",
        padding: 10,
        width: "100%",
        marginTop: 20,
        borderRadius: 10,
    },
    errorText: {
        color: "white",
        fontFamily: "Sora-Regular",
        fontSize: 14
    }
});

export default styles;