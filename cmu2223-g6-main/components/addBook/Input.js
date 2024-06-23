import { TextInput, StyleSheet } from 'react-native';
import React, { useState } from 'react';

const Input = ({ val, setVal }) => {
    const [borderColor, setBorderColor] = useState("black");
    const [textColor, setTextColor] = useState("black");

    const focusInput = () => {
        setBorderColor("#BC5F51");
        setTextColor("#BC5F51");
    };

    const resetFocus = () => {
        setBorderColor("black");
        setTextColor("black");
    }

    return (
        <TextInput
            style={styles(borderColor, textColor)}
            maxLength={1}
            value={val}
            onChangeText={setVal}
            keyboardType="numeric"
            onFocus={focusInput}
            onBlur={resetFocus}
        />
    );
};

const styles = (border, text) => StyleSheet.create({
    height: 60,
    width: 60,
    margin: 10,
    marginBottom: 14,
    borderColor: border,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 10,
    fontSize: 30,
    color: text,
    textAlign: 'center',
    fontFamily: 'Sora-SemiBold'
});

export default Input;