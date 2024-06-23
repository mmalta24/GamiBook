import React, { useEffect, useState } from 'react';
import { View, StatusBar, Text, Image, Pressable, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ShortcutPressable from '../components/home/ShortcutPressable';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from '../styles/HomeStyles';

const HomeScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState("");
  const [categories, setCategories] = useState(
    [{ "id": 3, "name": "Gestão e Economia" },
    { "id": 4, "name": "Hotelaria e Turismo" },
    { "id": 2, "name": "Informática" },
    { "id": 1, "name": "PLNM" }]
  );

  loadData = () => {
    AsyncStorage.getItem('@accessToken').then(value => {
      fetch("https://gamibook.onrender.com/users/me", {
        method: "GET",
        headers: {
          Accept: 'application/json',
          "Content-Type": 'application/json',
          'Authorization': `Bearer ${value}`
        },

      }).then(response => response.json()).then(({ user }) => setData(user));
      fetch("https://gamibook.onrender.com/categories", {
        method: "GET",
        headers: {
          Accept: 'application/json',
          "Content-Type": 'application/json',
          'Authorization': `Bearer ${value}`
        },

      }).then(response => response.json()).then(({ categories }) => setCategories(categories));
    });
    setLoading(false);
  }

  useEffect(() => loadData(), []);

  if (loading) return <View></View>

  return (
    <ScrollView contentContainerStyle={styles.body}>
      <StatusBar
        animated={true}
        backgroundColor="#232323"
      />
      <View style={styles.header}>
        <Text style={styles.salutation}>Olá, {data.fullName}!</Text>
        <View style={styles.iconPart}>
          <Image style={styles.circlesHome} source={require('../assets/img/circles_home.png')} />
          <Image style={styles.profileImg} source={{ uri: data.avatar }} />
        </View>
      </View>

      <Text style={styles.sectionTitle}>Para Si</Text>

      <View style={styles.containerShortCuts}>

        <ShortcutPressable
          width={204} height={63} bgColor="#3E4553" giveMR={true}
          label={categories.find(c => c.name === "Informática").name}
          shortcutAction={() => navigation.navigate("Biblioteca", { category: categories.find(c => c.name === "Informática") })}
        />
        <ShortcutPressable width={136} height={63} bgColor="#BC5F51"
          label={categories.find(c => c.name === "PLNM").name}
          shortcutAction={() => navigation.navigate("Biblioteca", { category: categories.find(c => c.name === "PLNM") })}
        />
        <View style={styles.shortcutRow}>
          <ShortcutPressable width={73} height={190} bgColor="#BC5F51" giveMR={true} giveMT={true} rotateText={true}
            label={categories.find(c => c.name === "Gestão e Economia").name}
            shortcutAction={() => navigation.navigate("Biblioteca", { category: categories.find(c => c.name === "Gestão e Economia") })}
          />
          <View style={styles.shortcutTop}>
            <ShortcutPressable width={267} height={114} bgColor="white"
              label="A Minha Coleção"
              shortcutAction={() => navigation.navigate("Biblioteca")}
            />
            <ShortcutPressable width={267} height={63} bgColor="#3E4553" giveMT={true}
              label={categories.find(c => c.name === "Hotelaria e Turismo").name}
              shortcutAction={() => navigation.navigate("Biblioteca", { category: categories.find(c => c.name === "Hotelaria e Turismo") })}
            />
          </View>
        </View>

        <Text style={[styles.sectionTitle, styles.gameLabel]}>Quer Prémios ?</Text>

        <Pressable style={styles.option} onPress={() => navigation.navigate('SpinnerScreen')}>
          <Image style={styles.spinner} source={require('../assets/img/roleta.png')} />

          <View style={styles.optionBox}>
            <Text style={styles.optionTitle}>Gira Joga</Text>
            <Text style={styles.optionText}>Tente a sua sorte, tem vários prémios à sua espera!</Text>
          </View>

          <Icon name="ios-arrow-forward-circle" color='white' size={35} />
        </Pressable>

      </View>
    </ScrollView>
  );
};

export default HomeScreen;
