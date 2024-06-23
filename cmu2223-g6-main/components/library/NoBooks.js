import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';

const NoBooks = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={require('../../assets/img/noBooks.png')} />
            <Text style={styles.txtTitle}>Sem livros!</Text>
            <Text style={styles.txtDescription}>Quando adicionar livros à sua biblioteca, poderá vê-los aqui!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "flex-start",
        alignItems: "center",
    },
    img: {
        width: 350,
        height: 350,
        paddingHorizontal: 10
    },
    txtTitle: {
        fontSize: 24,
        fontFamily: 'Sora-Bold',
        color: "white"
    },
    txtDescription: {
        marginTop:12,
        fontSize: 17,
        fontFamily: 'Sora-Regular',
        color: "white",
        textAlign:'center'
    }
});

export default NoBooks;