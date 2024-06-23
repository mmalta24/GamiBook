import { Pressable, Text, StyleSheet } from 'react-native';
import React from 'react';

export const ShortcutPressable = ({ width, height, bgColor, label, giveMR = false, giveMT = false, rotateText = false, shortcutAction }) => {
    const style = styles(width, height, bgColor);

    return (
        <Pressable style={[style.btn, giveMR ? style.shortcutRight : {}, giveMT ? style.shortcutTop : {}]} onPress={shortcutAction}>
            <Text style={[style.txt, rotateText ? style.rotateText : {}]}>
                {label}
            </Text>
        </Pressable>
    );
};

const styles = (w, h, bgColor) => StyleSheet.create({
    btn: {
        width: w,
        height: h,
        backgroundColor: bgColor,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center"
    },
    txt: {
        textAlign: 'center',
        color: bgColor === "white" ? "#232323" : "white",
        fontSize: 16,
        fontFamily: 'Sora-SemiBold'
    },
    shortcutRight: {
        marginRight: 12
    },
    shortcutTop: {
        marginTop: 12
    },
    rotateText: {
        transform: [{ rotate: '-90deg' }],
        width: h,
    }
});

export default ShortcutPressable;