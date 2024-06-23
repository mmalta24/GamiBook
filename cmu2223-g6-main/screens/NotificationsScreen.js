import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";

import NoNotifications from '../components/notifications/NoNotifications';
import NotificationItem from '../components/notifications/NotificationItem';
import NavigationPressable from '../components/shared/NavigationPressable';
import PageTitle from "../components/shared/PageTitle";

import styles from '../styles/NotificationsStyles';
import { getNotifications } from '../api/profile';

const Notifications = ({ navigation }) => {
    const [notifications, setNotifications] = useState([]);

    async function getInfo() {
        const notificationsInfo = await getNotifications();
        setNotifications(notificationsInfo.notifications);
    }

    
      useEffect(() => {
        const timerId = setInterval(getInfo, 1000);
        getInfo();
        return () => clearInterval(timerId);
      }, []);
      
    if (!notifications) return <h1>Loading...</h1>;
    return (
        <ScrollView contentContainerStyle={styles.body}>
            <ScrollView>
                
                <View style={styles.secondBody}>
                    <View style={styles.btns}>
                        <NavigationPressable
                            navigateAction={() => navigation.navigate("Perfil")}
                            iconName="close"
                            iconColor="black"
                            iconSize={40}
                        />
                    </View>
                    {notifications.length === 0 ? <NoNotifications /> :
                        <React.Fragment>
                            <PageTitle title="Notificações" color="black" />
                            {notifications.map((item, index) => (
                                <NotificationItem key={index} data={item} />
                            ))}
                        </React.Fragment>
                    }
                </View>
            </ScrollView>
        </ScrollView>
    );
};

export default Notifications;