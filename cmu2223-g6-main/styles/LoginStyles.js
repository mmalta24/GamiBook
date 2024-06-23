import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#284B63',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    logo: {
        width: 158.98,
        height: 130.71,
        marginVertical: 30
    },
    bodyForm: {
        backgroundColor: '#232323',
        width: '100%',
        height: '73%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        paddingVertical: 15,
        paddingHorizontal: 20,
        display: 'flex',
        alignItems: 'center'
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
        borderRadius: 10,
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
    ballred: {
        width: 114.38,
        height: 117.45,
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        height: 54,
        marginTop: 23
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        flex: 1,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
        borderRadius: 10,
        fontFamily: 'Sora-Regular',
        color: "#353535",
        fontSize: 16
    },
    textBtn: {
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