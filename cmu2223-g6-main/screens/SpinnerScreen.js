import React, { useState, useEffect } from "react";
import { ScrollView,View, ImageBackground, StyleSheet, Pressable, Image, Text } from 'react-native';
import SpinnerWheel from '../components/Spinner/SpinnerWheel'

import { getProfile } from '../api/profile';

const Spinner = ({ navigation }) => {

    const [profile, setProfile] = useState({});

    async function getInfo() {
        const response = await getProfile();
        setProfile(response);
    }
    useEffect(() => {
        const timerId = setInterval(getInfo, 5000);
        getInfo();

        return () => clearInterval(timerId);
      }, []);

    return (
        <ScrollView style={styles.body}>
            <ImageBackground style={{ width: '100%', height: '100%', position: 'absolute', zIndex: -1 }} source={require('../assets/img/girajoga.png')} />
            <Pressable onPress={() => navigation.navigate('HomeScreen')} style={{ width: 16, height: 27, margin: 25 }}><Image style={styles.backIcon} source={require('../assets/icons/back.png')} /></Pressable>
            <Text style={styles.title}>Gira Joga</Text>
            <SpinnerWheel nTickets={profile.tickets}/>

            <View style={styles.info}>
                <Text style={styles.firstText}>Tente a sua sorte, tem vários prémios à sua espera!</Text>
                <View style={styles.ticketGroup}>
                    <Text style={styles.nTickets}>{profile.tickets}</Text>
                    <Image source={require('../assets/img/tickets.png')} style={{ width: 49.87, height: 49.87 }} />
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    body: {
        width: '100%',
        minHeight: '100%',
        backgroundColor: '#232323'
    },
    backIcon: {
        width: 16,
        height: 27
    },
    title: {
        fontFamily: 'Sora-SemiBold',
        fontSize: 40,
        textAlign: 'center',
        color: 'white',
        marginVertical: 10
    },
    info: {
        backgroundColor: "rgba(35, 35, 35, 0.8)",
        borderRadius: 15,
        padding: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,


    },
    firstText: {
        color: 'white',
        fontFamily: 'Sora-SemiBold',
        fontSize: 17,
        textAlign: 'center'
    },
    ticketGroup: {
        borderRadius: 15,
        width: 109,
        height: 52,
        borderWidth: 1,
        borderColor: 'white',
        marginVertical: 20,
        padding: 4,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    nTickets: {
        fontFamily: 'Sora-SemiBold',
        color: 'white',
        fontSize: 20,
    }
})

export default Spinner;