import React, { useState } from 'react';
import { View, Pressable, Text, ScrollView, Image } from "react-native";
import RankingItem from '../components/ranking/RankingItem';
import RankingTop from '../components/ranking/RankingTop';
import { NavigationPressableFA } from '../components/shared/NavigationPressable';
import PageTitle from "../components/shared/PageTitle";

import styles from '../styles/RankingStyles';

const monthsUpdate = [...Array(3).fill("Abril"), ...Array(3).fill("Julho"), ...Array(3).fill("Outubro"), ...Array(3).fill("Janeiro")];

const RankingScreen = ({ navigation }) => {

    const [data, setData] = useState([
        { avatar: "https://www.w3schools.com/howto/img_avatar.png", username: "mmalta", name: "Marco Malta", points: 8000, lastRanking: 2 },
        { avatar: "https://www.w3schools.com/howto/img_avatar.png", username: "jraquel", name: "Joana Raquel", points: 7000, lastRanking: 1 },
        { avatar: "https://www.w3schools.com/howto/img_avatar.png", username: "lgomes", name: "Luís Gomes", points: 6000, lastRanking: 3 },
        { avatar: "https://www.w3schools.com/howto/img_avatar.png", username: "jsilva", name: "João Silva", points: 5000, lastRanking: 5 },
        { avatar: "https://www.w3schools.com/howto/img_avatar.png", username: "msantos", name: "Miguel Santos", points: 4000, lastRanking: 4 },
        { avatar: "https://www.w3schools.com/howto/img_avatar.png", username: "isalopes", name: "Isabel Lopes", points: 3000, lastRanking: 6 },
    ]);

    return (
        <ScrollView>
            <ScrollView contentContainerStyle={styles.body}>
                <View style={styles.header}>
                    <PageTitle title="Ranking" />
                    <View style={styles.rankingUpdate}>
                        <NavigationPressableFA
                            navigateAction={() => { }}
                            iconName="refresh"
                            iconColor="#BC5F51"
                            iconSize={25}
                            marginSize={0}
                            iconStyle={styles.rotateIcon}
                        />
                        <Text style={styles.monthUpdate}>{monthsUpdate[new Date().getMonth()]}</Text>
                    </View>
                </View>

                <Pressable style={styles.buttonObtPts}>
                    <Text style={styles.level}>Nível 450</Text>
                </Pressable>

                <View style={styles.top3}>
                    <RankingTop user={data[1]} position={2} />
                    <RankingTop user={data[0]} position={1} />
                    <RankingTop user={data[2]} position={3} />
                </View>


                <View style={styles.ranking}>
                    {data.map((item, index) => (
                        index < 3 ? <React.Fragment key={index}></React.Fragment> :
                            <RankingItem key={index} user={item} position={index + 1} />
                    ))}
                </View>
            </ScrollView>
        </ScrollView>
    );
};

export default RankingScreen;