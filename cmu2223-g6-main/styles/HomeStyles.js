import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    body: {
        width: '100%',
        height: '100%',
        backgroundColor: '#232323',
        padding: 20
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    salutation: {
        fontFamily: 'Sora-Light',
        fontSize: 17,
        color: '#A0A0A0'
    },
    iconPart: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    circlesHome: {
        width: 86.84,
        height: 86.84
    },
    profileImg: {
        width: 59,
        height: 59,
        position: 'absolute',
        zIndex: 1,
        borderRadius: 100
    },
    sectionTitle: {
        fontFamily: 'Sora-SemiBold',
        color: 'white',
        fontSize: 27
    },
    containerShortCuts: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 25
    },
    shortcutTop: {
        marginTop: 12
    },
    shortcutRow: {
        flexDirection: 'row',
    },
    gameLabel: {
        fontSize: 24,
        marginVertical: 23
    },
    option: {
        width: "100%",
        borderWidth: 1,
        borderRadius: 15,
        borderColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    spinner: {
        width: 90,
        height: 90,
        marginVertical: 4
    },
    optionBox: {
        width: 180,
        alignSelf: 'flex-start',
        marginTop: 7
    },
    optionTitle: {
        color: 'white',
        fontFamily: 'Sora-SemiBold',
        fontSize: 18
    },
    optionText: {
        color: 'white',
        fontFamily: 'Sora-Light',
        fontSize: 12
    }
});

export default styles;