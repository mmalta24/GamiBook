import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    coverContainer: {
        width: "100%",
        height: 150
    },
    pressable: {
        margin: 20,
        backgroundColor: "rgba(37, 37, 37, 0.58)",
        width: 40,
        height: 40,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center"
    },
    body: {
        backgroundColor: "#232323",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        paddingTop: 10
    },
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        marginBottom:30,
        marginHorizontal: 10
    },
    imgActivity: {
        width: 38,
        height: 38
    },
    title: {
        fontFamily: "Sora-SemiBold",
        fontSize: 25,
        color: "white",
        marginHorizontal: 5
    },
    exerciseContainer: {
        marginHorizontal: 20
    }
});

export default styles;