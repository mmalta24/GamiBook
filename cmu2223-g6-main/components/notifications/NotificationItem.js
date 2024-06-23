import { View, Text, Image, StyleSheet } from 'react-native';
import React, { useState, useEffect } from "react";
import NavigationPressable from '../shared/NavigationPressable';

import { removeNotification } from '../../api/profile';

const NotificationItem = ({ data }) => {

    function handleDelete(val) {
        removeNotification(val)
    }

    return (
        <View style={styles.notificationContainer}>
            <View style={styles.containerHeader}>
                <View style={styles.headerMain}>
                    <Image source={require('../../assets/icons/notificationRanking.png')} style={styles.icon} />
                    <Text style={styles.title}>{data.title}</Text>
                </View>
                <NavigationPressable
                    navigateAction={() => handleDelete(data.id)}
                    iconName="close"
                    iconColor="black"
                    iconSize={20}
                    marginSize={0}
                    aditionalStyles={styles.btnClose}
                />
            </View>
            <View style={styles.containerBody}>
                <Text style={styles.description}>{data.body}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    notificationContainer: {
        borderWidth: 1,
        borderColor: '#232323',
        width: "100%",
        borderRadius: 15,
        marginTop: 15,
        marginBottom: 20
    },
    containerHeader: {
        width: "100%",
        backgroundColor: "#232323",
        borderTopLeftRadius: 13,
        borderTopRightRadius: 13,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10
    },
    headerMain: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center'
    },
    icon: {
        width: 30,
        height: 30
    },
    title: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'Sora-SemiBold',
        marginLeft: 15
    },
    btnClose: {
        backgroundColor: "white",
        borderRadius: 100
    },
    containerBody: {
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    description: {
        color: 'black',
        fontSize: 13,
        fontFamily: 'Sora-Regular'
    }
});

export default NotificationItem;