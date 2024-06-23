import { Text, StyleSheet } from 'react-native';
import React from 'react';

const PageTitle = ({ title, color = "white" }) => {
    return (
        <Text style={styles(color)}>{title}</Text>
    );
};

const styles = color => StyleSheet.create({
    color: color,
    fontSize: 30,
    fontFamily: "Sora-SemiBold"
});

export default PageTitle;