import React, { useState, useEffect } from "react";
import { View, Pressable, Text, ScrollView, Image } from "react-native";

import PageTitle from '../components/shared/PageTitle';
import NavigationPressable from '../components/shared/NavigationPressable';
import StatisticsBox from '../components/profile/StatisticsBox';
import FavOption from '../components/profile/FavOption';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Dialog} from '@rneui/themed';

import styles from '../styles/ProfileStyles';

import { getProfile } from '../api/profile';

const ProfileScreen = ({ navigation }) => {
    const [profile, setProfile] = useState({});
    const [modal, setModal] = useState(false);
    const showModal = () => {
        setModal(!modal);
    };

    async function getInfo() {
        const response = await getProfile();
        setProfile(response);
    }

    function logout() {
        navigation.navigate("Login")
        AsyncStorage.removeItem('@accessToken');
    }
    useEffect(() => {
        getInfo();
      }, []);

    return (
        <ScrollView>
            <ScrollView contentContainerStyle={styles.body}>

                <View style={styles.header}>
                    <PageTitle title="Perfil" />
                    <NavigationPressable
                        navigateAction={() => navigation.navigate("Notifications")}
                        iconName="notifications"
                        iconColor="white"
                        iconSize={35}
                        marginSize={0}
                        aditionalStyles={styles.bgNotifications}
                    />
                </View>

                <View style={styles.info}>
                    <View style={styles.circle}>
                        <Image source={{ uri: profile.avatar }} style={styles.mainImg} />
                    </View>
                    <Text style={styles.infoName}>{profile.fullName}</Text>
                    <Text style={styles.infoUsername}>@{profile.username}</Text>
                </View>

                <View style={styles.btns}>
                    <Pressable style={styles.buttonPts}>
                        <Image source={require('../assets/icons/star.png')} />
                        <Text style={styles.txtPts}>{profile.totalPoints} Pts</Text>
                    </Pressable>
                    <Pressable style={styles.buttonObtPts} onPress={() => showModal()}>
                        <Text style={styles.txtObtPts}>Como obter pontos?</Text>
                    </Pressable>
                </View>

                <View style={styles.statisticsContainer}>
                    <View style={styles.statisticsCol}>
                        <StatisticsBox img={require("../assets/icons/croa.png")} title="Nível" description={profile.LevelId} />
                        <StatisticsBox img={require("../assets/icons/avatares.png")} title="Avatars" description="1" />
                    </View>
                    <View style={styles.statisticsCol}>
                        <StatisticsBox img={require("../assets/icons/horas.png")} title="Horas" description="2 Horas" />
                        <StatisticsBox img={require("../assets/icons/jogos.png")} title="Jogos" description="1" />
                    </View>
                </View>

                <View style={styles.divider}></View>
                <View style={styles.favSection}>
                    <PageTitle title="Favoritos" />

                    <View style={styles.favList}>
                        <FavOption
                            action={() => navigation.navigate('Achievements')}
                            img={require('../assets/icons/conquistas.png')}
                            title="Conquistas"
                        />
                        <FavOption
                            action={() => navigation.navigate('ChangePw')}
                            img={require('../assets/icons/alterarpassword.png')}
                            title="Alterar Password"
                        />
                        <FavOption
                            action={() => navigation.navigate('ChangeAvatar')}
                            img={require('../assets/icons/alterarimagem.png')}
                            title="Alterar Imagem"
                        />
                        <FavOption
                            action={() => {logout() }}
                            img={require('../assets/icons/terminar.png')}
                            title="Terminar Sessão"
                        />
                    </View>
                </View>

            </ScrollView>
            <Dialog
                isVisible={modal}
                onBackdropPress={showModal}
            >
                <View style={styles.modal}>
                    <Text style={{color: "#3E4553", fontSize: 20, fontFamily:'Sora-SemiBold'}}>Como obter pontos?</Text>
                    <Text style={{color: "#A0A0A0", fontSize: 15, fontFamily:'Sora', marginTop:20, textAlign:"center", lineHeight: 25,}}>Os pontos podem ser obtidos com a realização de atividades, o seu valor é definido pelo administrador ou através da roleta, neste caso implica ter bilhetes. </Text>
                    <Pressable style={{marginTop:30}} onPress={() => {setModal(false)}}>
                        <Text style={styles.closeText}>Fechar</Text>
                    </Pressable>
                </View>

            </Dialog>
        </ScrollView>
    );
};

export default ProfileScreen;