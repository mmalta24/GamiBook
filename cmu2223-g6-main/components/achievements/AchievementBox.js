import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';

const AchievementBox = ({ achievement }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: achievement.img }} style={{ width: 70, height: 70 }} />
            <View style={{ width: 220 }}>
                <Text style={styles.achievementName}>{achievement.name}</Text>
                <Text style={styles.achievementPoints}>{achievement.pointsNeeded} Pontos</Text>
            </View>
            {achievement.owned === true ? 
                <Image source={require('../../assets/icons/unlock.png')} /> 
            : 
                <Image source={require('../../assets/icons/lock.png')} />
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: '#232323',
        width: 350,
        borderRadius: 15,
        marginHorizontal: 22,
        alignItems: 'center',
        marginTop: 25,
        paddingHorizontal: 5,
        paddingVertical: 5,
        marginBottom: 10,
    },
    achievementName: {
        color: '#232323',
        fontSize: 20,
        fontFamily: 'Sora-SemiBold',
        paddingLeft: 10,
        marginBottom: 8
    },
    achievementPoints: {
        color: '#A0A0A0',
        fontSize: 17,
        fontFamily: 'Sora-Regular',
        paddingLeft: 10,
        marginBottom: 8
    }
});

export default AchievementBox;