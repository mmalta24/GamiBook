import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#232323',
        width: '100%',
        height: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    mainImg: {
        width: 155,
        height: 155,
        borderRadius: 100,
        maxWidth: 155,
        maxHeight: 155,
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20
    },
    bgNotifications: {
        backgroundColor: "#BC5F51",
        borderRadius: 100,
        padding: 5
    },
    info: {
        textAlign: 'center',
        alignItems: 'center'
    },
    circle: {
        width: 170,
        height: 170,
        borderRadius: 100,
        backgroundColor: '#232323',
        borderColor: '#BC5F51',
        alignItems: 'center',
        borderWidth: 2,
        justifyContent: 'center',
    },
    infoName: {
        color: 'white',
        fontSize: 25,
        fontFamily: 'Sora-SemiBold',
        marginTop: 15
    },
    infoUsername: {
        color: '#A0A0A0',
        fontSize: 19,
        fontFamily: 'Sora-Regular'
    },
    btns: {
        flexDirection: 'row'
    },
    buttonPts: {
        backgroundColor: '#3E4553',
        width: '40%',
        height: 40,
        marginVertical: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonObtPts: {
        backgroundColor: '#FFFFFF',
        width: '40%',
        height: 40,
        marginVertical: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
    },
    txtPts: {
        color: 'white',
        fontSize: 13,
        fontFamily: 'Sora-Regular',
        paddingLeft: 10
    },
    txtObtPts: {
        color: '#232323',
        fontSize: 12,
        fontFamily: 'Sora-Regular'
    },
    statisticsContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    statisticsCol: {
        width: "46%"
    },
    divider: {
        width: '80%',
        height: 1,
        backgroundColor: "#D9D9D9",
        marginTop: 40,
        marginBottom: 20
    },
    favSection: {
        width: "100%"
    },
    favList: {
        marginTop: 10
    },
    modal: {
        alignItems: 'center',
        justifyContent:'center'
    },
    closeText:{
        color: '#BC5F51', 
        fontFamily: 'Sora-SemiBold',
        fontSize: 16,
    }
});

export default styles;