import React, { useState, useEffect } from "react";
import { View, Pressable, Text, ScrollView, Image } from "react-native";
import AchievementBox from '../components/achievements/AchievementBox';
import NavigationPressable from '../components/shared/NavigationPressable';
import PageTitle from '../components/shared/PageTitle';
import SubPageHeader from '../components/shared/SubPageHeader';

import styles from '../styles/AchievementsStyles';
import { getProfile } from '../api/profile';
import { getAchievements } from '../api/profile';

const Achievements = ({ navigation }) => {
    const [profile, setProfile] = useState({});
    const [achievements, setAchievements] = useState([]);
    

    async function getInfo() {
        const profileInfo = await getProfile();
        const achievementsInfo = await getAchievements();
        setProfile(profileInfo);
        setAchievements(achievementsInfo.achievements)
        
        achievements.sort((a, b) => {
            if (a.owned === b.owned) return 0;
            return a.owned ? -1 : 1;
          });
          
    }
    useEffect(() => {
        const timerId = setInterval(getInfo, 5000);
        getInfo();

        return () => clearInterval(timerId);
      }, []);
    
  
    return (
        <ScrollView>
            <ScrollView contentContainerStyle={styles.body}>
                <SubPageHeader />
                <View style={styles.secondBody}>
                    <View style={styles.btns}>
                        <NavigationPressable
                            navigateAction={() => navigation.navigate("Perfil")}
                            iconName="close"
                            iconColor="black"
                            iconSize={40}
                        />
                    </View>
                    <PageTitle title="Conquistas" color="black" />
                    <View style={styles.viewCenter}>
                        <View style={styles.circle}>
                            <Image source={{ uri: profile.avatar }} style={styles.mainImg} />
                        </View>
                        <Text style={styles.userName}>{profile.fullName}</Text>
                        <Text style={styles.userUsername}>@{profile.username}</Text>
                        <Pressable style={styles.buttonPts}>
                            <Image source={require('../assets/icons/star.png')} />
                            <Text style={styles.userPoints}>{profile.totalPoints} Pts</Text>
                        </Pressable>

                        {achievements.map((item, index) => <AchievementBox key={index} achievement={item} />)}
                    </View>
                </View>
            </ScrollView>
        </ScrollView>
    );
};

export default Achievements;