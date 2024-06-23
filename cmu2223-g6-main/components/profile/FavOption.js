import { Pressable, Image, Text, StyleSheet } from 'react-native';
import React from 'react';

const FavOption = ({ action, img, title }) => {
    return (
        <Pressable style={styles.btn} onPress={action}>
            <Image source={img} />
            <Text style={styles.txt}>{title}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    btn: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: "center"
    },
    txt: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'Sora-Regular',
        marginLeft: 15
    }
});

export default FavOption;