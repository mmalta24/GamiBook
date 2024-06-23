import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';

const NoNotifications = () => {
    return (
        <View style={styles.containerNo}>
            <Image source={require('../../assets/img/noNotifications.png')} style={styles.img} />
            <Text style={styles.text}>Sem notificações</Text>
            <Text style={[styles.text, styles.textDescription]}>Quando tiver notificações, poderá vê-las aqui!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    containerNo: {
        flexDirection: "column",
        alignItems: "center"
    },
    img: {
        width: "90%",
        height: 400
    },
    text: {
        color: 'black',
        fontSize: 25,
        fontFamily: 'Sora-Bold',
        marginVertical: 5,
        maxWidth: 280,
        textAlign: 'center'
    },
    textDescription: {
        fontSize: 18,
        fontFamily: 'Sora-Regular'
    }
});

export default NoNotifications;