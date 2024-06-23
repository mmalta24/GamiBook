import { View, StyleSheet } from 'react-native';
import React from 'react';

const GreyBar = () => {
    return (
        <View style={styles}></View>
    );
};

const styles = StyleSheet.create({
    width: 61,
    height: 6,
    backgroundColor: '#D9D9D9',
    borderRadius: 3,
    marginVertical: 11,
    alignSelf: "center"
});

export default GreyBar;