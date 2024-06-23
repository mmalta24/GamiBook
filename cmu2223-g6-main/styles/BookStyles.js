import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    body: {
        backgroundColor: "#232323",
        width: "100%",
        height: "100%",
        padding: 20,
        paddingTop: 40
    },
    header: {
        flexDirection: "row",
        marginTop: 20
    },
    title: {
        fontFamily: "Sora-SemiBold",
        fontSize: 22,
        color: "white",
        marginHorizontal: 10
    },
    subheader: {
        fontFamily: "Sora-SemiBold",
        fontSize: 18,
        color: "white",
        marginVertical: 30
    },
    progressContainer: {
        width: "100%",
        alignItems: "center",
    },
    progressText: {
        fontFamily: "Sora-SemiBold",
        fontSize: 30,
        color: "white",
    },
    moduleContainer: {
        width: "100%",
        marginBottom: 40
    }
});

export default styles;