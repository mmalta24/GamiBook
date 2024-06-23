import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
// Icons
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';

const RankingItem = ({ user, position }) => {
    return (
        <View style={styles.item}>
            <View styles={styles.position}>
                {
                    user.lastRanking === position ? <IconMCI name="minus" size={30} color="#D9D9D9" />
                        :
                        user.lastRanking > position ?
                            <Icon name="keyboard-arrow-down" size={30} color="#D9D9D9" /> :
                            <Icon name="keyboard-arrow-up" size={30} color="#BC5F51" />
                }
                <Text style={styles.positionText}>{position}</Text>
            </View>
            <View style={styles.containerRank}>
                <View style={styles.containerUser}>
                    <Image style={styles.img} source={{ uri: user.avatar }} />
                    <Text style={styles.textName}>{user.name}</Text>
                </View>
                <Text style={styles.textPoints}>{user.points} pts</Text>
            </View>
        </View>
    );
};

/*
<View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10 }} key={index}>
        <View style={styles.containerRank}>
            <View>
            Image style={styles.img} source={require('../assets/icons/profileimage.png')} />
            <Text style={styles.textName}>{item.name}</Text>
            </View
            <Text style={styles.textPoints}>{item.points} pontos</Text>
        </View>
    </View>
))}
 */

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        marginVertical: 10
    },
    position: {
        justifyContent: 'center',
        alignItems: "center",
        width: 40
    },
    positionText: {
        width: "100%",
        color: 'white',
        fontSize: 20,
        fontFamily: 'Sora-SemiBold',
        textAlign: "center"
    },
    containerRank: {
        width: "88%",
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        backgroundColor: '#3E4553',
        borderRadius: 6,
        padding: 5,
        paddingVertical: 10
    },
    containerUser: {
        flexDirection: 'row',
        alignItems: "center"
    },
    img: {
        width: 44,
        height: 44,
        marginHorizontal: 10,
        borderRadius: 100
    },
    textName: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'Sora-Regular'
    },
    textPoints: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'Sora-SemiBold',
        marginHorizontal: 10
    }
});

export default RankingItem;