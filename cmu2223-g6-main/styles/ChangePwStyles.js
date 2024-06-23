import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#232323',
        width: '100%',
        height: '100%'
    },
    secondBody: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        borderRadius: 15,
        paddingHorizontal: 20
    },
    btns: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: "space-between",
        marginBottom: 20
    },
    descriptionText: {
        marginVertical: 20,
        color: '#353535',
        fontSize: 16,
        textAlign: 'center',
        fontFamily: 'Sora-Regular'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        backgroundColor: "rgba(0, 0, 0, 0.74)",
    },
    modalView: {
        width: "90%",
        backgroundColor: "white",
        borderRadius: 20,
        elevation: 5
    },
    alignRow: {
        flexDirection: "row",
        alignItems: "center",
    },
    alertImg: {
        width: 66,
        height: 66
    },
    alertTxt: {
        color: '#252525',
        fontSize: 20,
        fontFamily: 'Sora-SemiBold',
        marginHorizontal: 10
    },
    modalText: {
        marginTop: 20,
        marginBottom: 50,
        textAlign: "center",
        color: '#252525',
        fontSize: 16,
        fontFamily: 'Sora-Regular'
    },
    options: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        borderTopColor: "#A0A0A0",
        borderTopWidth: 1
    },
    button: {
        width: "50%",
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonConfirm: {
        borderRightColor: "#A0A0A0",
        borderRightWidth: 1
    },
    txtYes: {
        fontFamily: 'Sora-Medium',
        color: '#252525',
        fontSize: 18
    },
    txtNo: {
        fontFamily: 'Sora-Medium',
        color: '#D63E3E',
        fontSize: 18
    },
    txtLabel: {
        color: 'black',
        fontSize: 18,
        fontFamily: 'Sora-Regular'
    },
    input: {
        height: 40,
        marginBottom: 14,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        paddingVertical: 10
    }
});

export default styles;