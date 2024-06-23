import { View, TextInput, StyleSheet } from 'react-native';
import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

const InputGroup = ({ iconName, placeholder, value, updateValue = () => { } }) => {
    return (
        <View style={styles.searchSection}>
            <Icon style={styles.searchIcon} name={iconName} size={24} color="#3E4553" />
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={value}
                onChangeText={updateValue}
                placeholderTextColor="#353535"
                underlineColorAndroid="transparent"
                secureTextEntry={placeholder === "Password"}
                keyboardType={placeholder === "Email" ? "email-address" : "default"}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        height: 54,
        marginTop: 23
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        flex: 1,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
        borderRadius: 10,
        fontFamily: 'Sora-Regular',
        color: "#353535",
        fontSize: 16
    }
});

export default InputGroup;