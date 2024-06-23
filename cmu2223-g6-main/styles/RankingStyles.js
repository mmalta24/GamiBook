import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#232323',
        width: '100%',
        height: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: "space-between",
        alignItems: "center"
    },
    rankingUpdate: {
        flexDirection: 'row',
        alignItems: "center"
    },
    rotateIcon: {
        transform: [{ rotate: '-90deg' }, { scaleX: -1 }],
    },
    monthUpdate: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'Sora-SemiBold',
        marginLeft: 5
    },
    buttonObtPts: {
        backgroundColor: '#424242',
        width: '40%',
        height: 54,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
        marginTop: 20,
    },
    level: {
        color: 'white',
        fontSize: 23,
        fontFamily: 'Sora-SemiBold'
    },
    top3: {
        textAlign: 'center',
        alignItems: 'center',
        color: 'white',
        flexDirection: 'row',
        marginBottom: 30,
    },
    ranking: {
        width: '100%',
    }
});

export default styles;