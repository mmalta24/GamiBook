import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#232323',
        width: '100%',
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
        marginBottom: 20
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        width: "100%"
    },
    descriptionText: {
        marginHorizontal: 20,
        marginVertical: 20,
        color: '#353535',
        fontSize: 16,
        textAlign: 'center',
        fontFamily: 'Sora-Regular'
    },
    useAvatar: {
        borderWidth: 1,
        borderRadius: 6,
        width: "100%",
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 30,
        padding: 10,
        flexDirection: 'row'
    },
    useAvatarText: {
        color: '#353535',
        fontSize: 20,
        fontFamily: 'Sora-SemiBold'
    },
    btnAdd: {
        marginTop: 20,
        backgroundColor: "#232323",
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        marginTop: 10,
    },
    addImgText: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'Sora-SemiBold',
        paddingVertical: 10
    },
    textUrl:{
        marginTop: 20,
        marginBottom: 10,
        fontFamily: 'Sora-SemiBold',

    },
    input: {
        height: 40,
        borderRadius: 6,
        width: "100%",
        margin: 12,
        borderWidth: 1,
        marginTop: 10,
      },
    
});

export default styles;