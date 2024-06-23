import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#232323',
        flex: 1,
        paddingHorizontal: 20
    },
    section: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 30
    },
    sectionTitle: {
        alignItems: "center"
    },
    optionsLibrary: {
        width: 90,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    resultText: {
        fontSize: 17,
        fontFamily: 'Sora-Regular',
        color: "white"
    },
    typeViewBtn: {
        backgroundColor: "#424242",
        borderRadius: 7,
        justifyContent: "center",
        padding:2.5,
        alignItems: "center",
    },
    scrollList: {
        marginTop: 35
    },
    mainView: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.74)",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        width: "100%",
    },
    modalView: {
        backgroundColor: "white",
        width: "100%",
        alignItems: "flex-start",
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    searchView: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        flex: 1,
        paddingLeft: 0,
        backgroundColor: "white",
        fontFamily: "Sora-Regular",
        fontSize: 18,
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderTopLeftRadius: 20, 
        borderTopRightRadius: 20,
    },
    categoryView: {
        backgroundColor: "#232323",
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        width: "100%",
        paddingHorizontal: 20
    },
    categoryTitle: {
        fontFamily: "Sora-SemiBold",
        color: "white",
        fontSize: 23,
        marginBottom: 20
    },
    resultBtn: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,
        marginBottom: 20
    },
    resultTxt: {
        textAlign: "center",
        fontSize: 16,
        fontFamily: "Sora-SemiBold",
        color: "white"
    }
});

export default styles;
