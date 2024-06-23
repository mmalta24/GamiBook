import React, { useState, useEffect } from "react";
import { View, Image, Text, ScrollView, Pressable } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import InputGroup from "../components/auth/InputGroup";
import GreyBar from "../components/shared/GreyBar";

import styles from "../styles/LoginStyles";
import { loginUser } from "../api/auth";

const Login = ({ navigation }) => {
    const [loading, setLoading] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState("");

    //AsyncStorage
    const updateStorage = () => {
        AsyncStorage.getItem('@didOnboarding').then(value => {
            if (value == null) AsyncStorage.setItem('@didOnboarding', 'true');
        });
        setLoading(false);
    }

    useEffect(() => updateStorage(), []);

    async function logUser() {
        setErrors("");
        const response = await loginUser({username: username, password: password});
        if (response.success) {
            setUsername("");
            setPassword("");
            AsyncStorage.setItem('@accessToken', response.accessToken);
            AsyncStorage.setItem('@typeUser', response.typeUser);
            navigation.navigate("HomeScreen");
        }
        else {
            setErrors(response.msg);
        }
    }

    if (loading) return <View></View>;

    return (
        <ScrollView contentContainerStyle={styles.body}>
            <Image style={styles.logo} source={require('../assets/img/logo.png')} />
            <View style={styles.bodyForm}>
                <Image style={styles.ballred} source={require('../assets/img/ballred4.png')} />
                <GreyBar />
                <Text style={styles.title}>Autenticar</Text>
                <Text style={styles.description}>Olá, seja bem-vindo outra vez!</Text>

                <InputGroup iconName="person" placeholder="Username" value={username} updateValue={(text) => setUsername(text)} />
                <InputGroup iconName="vpn-key" placeholder="Password" value={password} updateValue={(text) => setPassword(text)} />

                {errors &&
                    <View style={styles.errorBg}>
                        <Text style={styles.errorText}>{errors}</Text>
                    </View>
                }

                <Pressable style={styles.buttonLogin}
                    onPress={logUser}
                    disabled={!username && !password}>
                    <Text style={styles.textBtn}>Autenticar</Text>
                </Pressable>
                <View style={styles.divider}></View>
                <Pressable style={styles.buttonRegister} onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.textBtn}>Registar</Text>
                </Pressable>
            </View>
        </ScrollView>
    );
};

export default Login;