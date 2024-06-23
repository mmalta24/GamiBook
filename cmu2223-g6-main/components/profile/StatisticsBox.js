import { View, Image, Text, StyleSheet } from 'react-native';
import React from 'react';

const StatisticsBox = ({ img, title, description }) => {
    return (
        <View style={styles.box}>
            <Image style={styles.statisticsIcon} source={img} />
            <View style={styles.details}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    box: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: "center",
        paddingRight: 10,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 15,
        height: 60,
    },
    statisticsIcon: {
        marginLeft: 10,
        width: 40,
        height: 40
    },
    details: {
        marginLeft: 10
    },
    title: {
        color: 'white',
        fontFamily: 'Sora-SemiBold',
        fontSize: 16
    },
    description: {
        color: '#A0A0A0',
        fontFamily: 'Sora-Regular',
        fontSize: 14
    }
});

export default StatisticsBox;