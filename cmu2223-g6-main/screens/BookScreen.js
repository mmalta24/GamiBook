import { ScrollView, View, Text, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useIsFocused } from "@react-navigation/native"

import { NavigationPressableOC } from '../components/shared/NavigationPressable';
import { Circle as ProgressCircle } from 'react-native-progress';

import styles from '../styles/BookStyles';
import ModuleItem from '../components/library/ModuleItem';
import { getBookById } from '../api/books';

const BookScreen = ({ navigation, route }) => {
    const [modules, setModules] = useState([]);
    const [book, setBook] = useState({})

    async function findBookById() {
        let response = await getBookById(route.params.id)
        setModules(response.modules)
        setBook(response)
    }

    const isFocused = useIsFocused();

    console.log(isFocused);

    useEffect(() => {
        // Call only when screen open or when back on screen 
        if (isFocused) {
            findBookById();
        }
    }, [isFocused]);

    //useEffect(() => findBookById(), [])

    return (
        <ScrollView style={styles.body}>
            <NavigationPressableOC
                navigateAction={() => navigation.navigate("Biblioteca")}
                iconName="chevron-left"
                iconColor="white"
                iconSize={35}
                marginSize={0}
            />

            <View style={styles.header}>
                <Image source={require("../assets/icons/ptFoco.png")} />
                <Text style={styles.title}>{book.name}</Text>
            </View>
            <Text style={styles.subheader}>Progresso Geral</Text>

            <View style={styles.progressContainer}>
                <ProgressCircle
                    size={210} progress={book.completedPercentage} showsText textStyle={styles.progressText} fill="#232323" strokeCap="round" animated={false}
                    color="#BC5F51" unfilledColor="white" borderWidth={0} thickness={18}
                />
            </View>

            <Text style={styles.subheader}>Módulos</Text>

            <View style={styles.moduleContainer}>
                {modules.map((module, index) => (
                    <ModuleItem key={index} module={module} onExercisePress={(id) => navigation.navigate("ExerciseScreen", { idBook: book.id, idModule: module.id, idActivity: id })} />
                ))}
            </View>
        </ScrollView>
    );
};

export default BookScreen;