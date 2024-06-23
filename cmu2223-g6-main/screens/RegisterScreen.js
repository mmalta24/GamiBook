import React, { useState } from "react";
import { View, Image, Text, ScrollView, Pressable } from "react-native";
//Icons
import GreyBar from "../components/shared/GreyBar";
import InputGroup from "../components/auth/InputGroup";

import styles from "../styles/RegisterStyles";
import { registerUser } from "../api/auth";

const Register = ({ navigation }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState("");

    async function createAccount() {
        setErrors("");
        const response = await registerUser({username: username, password: password, fullName: fullName, email: email});
        if (response.success) {
            setUsername("");
            setPassword("");
            setFullName("");
            setEmail("");
            navigation.navigate("Login");
        }
        else {
            setErrors(response.errors ? response.errors : response.msg);
        }
    }

    return (
        <ScrollView contentContainerStyle={styles.body}>
            <Image style={styles.logo} source={require('../assets/img/logo.png')} />
            <View style={styles.bodyForm}>
                <Image style={styles.ballred} source={require('../assets/img/ballred4.png')} />
                <GreyBar />
                <Text style={styles.title}>Registar</Text>
                <Text style={styles.description}>Por favor, insira os seus dados!</Text>

                <InputGroup iconName="person" placeholder="Username" value={username} updateValue={(text) => setUsername(text)} />
                <InputGroup iconName="vpn-key" placeholder="Password" value={password} updateValue={(text) => setPassword(text)} />
                <InputGroup iconName="badge" placeholder="Nome" value={fullName} updateValue={(text) => setFullName(text)} />
                <InputGroup iconName="alternate-email" placeholder="Email" value={email} updateValue={(text) => setEmail(text)} />

                {errors && typeof errors == "object" &&
                    errors.map((error, index) => (
                        <View key={index} style={styles.errorBg}>
                            <Text style={styles.errorText}>{error}</Text>
                        </View>
                    ))
                }
                {errors && typeof errors == "string" &&
                    <View style={styles.errorBg}>
                        <Text style={styles.errorText}>{errors}</Text>
                    </View>
                }

                <Pressable style={styles.buttonLogin}
                    onPress={createAccount}
                    disabled={!username && !password && !fullName && !email}
                >
                    <Text style={styles.txtBtn}>Registar</Text>
                </Pressable>
                <View style={styles.divider}></View>
                <Pressable style={styles.buttonRegister} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.txtBtn}>Autenticar</Text>
                </Pressable>

            </View>
        </ScrollView>
    );
};

export default Register;