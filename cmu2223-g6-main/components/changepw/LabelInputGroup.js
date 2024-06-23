import { Text, TextInput, StyleSheet } from 'react-native';
import React, { useState } from 'react';

const LabelInputGroup = ({ txtLabel, value, updateValue = () => { } }) => {
    const [oldPw, setOldPw] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirm, setConfirm] = useState("");



    return (
        <React.Fragment>
            <Text style={styles.txtLabel}>Password Atual</Text>
            <TextInput 
                style={styles.input} 
                secureTextEntry={true} 
                value={oldPw}
                onChange={event => setOldPw(event.nativeEvent.text)}
            />
            <Text style={styles.txtLabel}>Password Nova</Text>
            <TextInput 
                style={styles.input} 
                secureTextEntry={true} 
                value={newPassword}
                onChange={event => setNewPassword(event.nativeEvent.text)}
            />
            <Text style={styles.txtLabel}>Confirmar Password</Text>
            <TextInput 
                style={styles.input} 
                secureTextEntry={true} 
                value={confirm}
                onChange={event => setConfirm(event.nativeEvent.text)}
            />
        </React.Fragment>
    );
};

const styles = StyleSheet.create({
    txtLabel: {
        color: 'black',
        fontSize: 18,
        fontFamily: 'Sora-Regular'
    },
    input: {
        height: 40,
        marginBottom: 14,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        paddingVertical: 10
    }
});

export default LabelInputGroup;