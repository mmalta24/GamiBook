import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
//Icons
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';

const RankingTop = ({ user, position }) => {
    return (
        <View style={[position != 1 ? styles.circle : {}, styles.alignCenter]}>
            {position == 1 ?
                <React.Fragment>
                    <Image source={require('../../assets/icons/rei.png')} />
                    <View style={{ borderWidth: 2, borderRadius: 100, borderColor: '#232323' }}>
                        <Image style={[styles.img, styles.imgFirst]} source={{ uri: user.avatar }} />
                    </View>
                </React.Fragment>
                :
                <React.Fragment>
                    {
                        user.lastRanking === position ?
                            <IconMCI name="minus" size={30} color="#D9D9D9" />
                            :
                            user.lastRanking > position ?
                                <Icon name="keyboard-arrow-down" size={30} color="#D9D9D9" /> :
                                <Icon name="keyboard-arrow-up" size={30} color="#BC5F51" />
                    }
                    <Text style={styles.rankPosition}>{position}</Text>
                    <Image style={styles.img} source={{ uri: user.avatar }} />
                </React.Fragment>
            }
            <Text style={styles.tagUsername}>{user.username}</Text>
            <Text style={styles.tagPoints}>{user.points} Pts</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    circle: {
        width: 75,
        marginTop: 70,
        borderRadius: 100,
        backgroundColor: '#232323',
        borderColor: '#BC5F51',
        justifyContent: 'center',
        zIndex: -1
    },
    alignCenter: {
        alignItems: 'center',
        width: 120
    },
    rankPosition: {
        color: 'white',
        fontSize: 25,
        fontFamily: 'Sora-SemiBold'
    },
    img: {
        width: 120,
        height: 120,
        borderRadius: 100
    },
    imgFirst: {
        width: 150,
        height: 150,
    },
    tagUsername: {
        color: 'white',
        fontSize: 17,
        fontFamily: 'Sora-Regular',
        marginTop: 10
    },
    tagPoints: {
        color: '#BC5F51',
        fontSize: 17,
        fontFamily: 'Sora-SemiBold'
    }
});

export default RankingTop;