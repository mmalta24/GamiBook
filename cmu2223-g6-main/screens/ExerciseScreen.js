import { View, Text, ImageBackground, Image, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';

import NavigationPressable from '../components/shared/NavigationPressable';
import GreyBar from '../components/shared/GreyBar';

import styles from '../styles/ExerciseStyles';
import MultipleChoice from '../components/exercises/MultipleChoice';
import TrueFalse from '../components/exercises/TrueFalse';
import ShortAnswer from '../components/exercises/ShortAnswer';
import FillTheBlanks from '../components/exercises/FillTheBlanks';

import { getExercise } from '../api/books';

const exampleMC = {
    activityType: "Escolha Múltipla",
    question: "Qual das seguintes opções completa de forma correta a seguinte frase:  Hoje _______ bastante frio.",
    options: ["está", "estarei", "estaremos", "estivemos"],
    correctAnswer: "está"
};

const exampleTF = {
    activityType: "Verdadeiro ou Falso",
    question: "A seguinte frase está correta: Hoje está bastante frio.",
    options: ["Verdadeiro", "Falso"],
    correctAnswer: "Verdadeiro"
};

const exampleSA = {
    activityType: "Resposta Curta",
    question: "Complete a seguinte frase: Hoje _______ bastante frio.",
    correctAnswer: "está"
};

const exampleFB = {
    activityType: "Completar Espaços",
    question: ["Pensar - Eu _______ muito.", "Falar - Tu _______ Português.", "Morar - Eles _______ em Lisboa."],
    correctAnswer: ["penso", "falas", "moram"]
};

const ExerciseScreen = ({ navigation, route }) => {
    const [exercise, setExercise] = useState({});

    async function findExercise(data) {
        setExercise(await getExercise(data));
    }

    useEffect(() => {
        findExercise([route.params.idBook, route.params.idModule, route.params.idActivity])
    }, [])

    const showExercise = () => {
        switch (exercise.activityType) {
            case "Escolha Múltipla": return <MultipleChoice exercise={exercise} identifiers={route.params} />
            case "Verdadeiro ou Falso": return <TrueFalse exercise={exercise} identifiers={route.params} />
            case "Resposta Curta": return <ShortAnswer exercise={exercise} identifiers={route.params} />
            default: return <FillTheBlanks exercise={exercise} identifiers={route.params} />;
        }
    };

    return (
        <View style={{ display: 'flex', justifyContent: 'space-between', height: '100%' }}>
            <Image style={{ width: '100%', height: 323, position: 'absolute', zIndex: -1 }}
                source={require('../assets/img/exercise.png')} />
            <NavigationPressable
                navigateAction={() => navigation.navigate("BookScreen", { id: route.params.idBook })}
                iconName="close"
                iconColor="white"
                iconSize={30}
                marginSize={40}
                aditionalStyles={styles.pressable}
            />
            <ScrollView style={[styles.body, { maxHeight: exercise.activityType == 'Completar Espaços' || exercise.activityType == 'Escolha Múltipla' ? '75%' : exercise.activityType == 'Verdadeiro ou Falso' ? '65%' : '70%' }]}>
                <GreyBar />

                <View style={styles.titleContainer}>
                    <Image source={require("../assets/icons/bookActivity.png")} style={styles.imgActivity} />
                    <Text style={styles.title}>{exercise.name}</Text>
                </View>
                <View style={styles.exerciseContainer}>
                    {showExercise()}
                </View>

            </ScrollView>
        </View>
    );
};

export default ExerciseScreen;