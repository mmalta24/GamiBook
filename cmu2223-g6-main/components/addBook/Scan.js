import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import CameraScanner from "./Camera";


const Scan = ({updateBook}) => {

    return (
        <View style={{ width: '100%', height: '100%' }}>
            <Text style={styles.mainText}>Por favor aponte a câmera para o código QR que lhe foi atribuido.</Text>
            <CameraScanner updateBook={()=>updateBook}/>
        </View>
    )
}

const styles = StyleSheet.create({
    mainText: {
        marginVertical: 30,
        maxWidth: 300,
        textAlign: "center",
        fontSize: 16,
        color: 'black',
        fontFamily: 'Sora-Regular',
        alignSelf: 'center'
    },
    pressable: {
        backgroundColor: '#ffffff',
        width: 70,
        height: 70,
        position: 'absolute',
        bottom: 170,
        alignSelf: 'center',
        zIndex: 2,
        borderRadius: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    }
});

export default Scan