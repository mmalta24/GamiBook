import { View, Text, TextInput, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import { updateExercise } from '../../api/books';

const ShortAnswer = ({ exercise, identifiers }) => {
    const [answers, setAnswers] = useState("");
    const question = exercise.question[0], title = exercise.title, correctAnswer = exercise.correctAnswer[0];

    useEffect(() => {
        if (exercise && exercise.answers) setAnswers(exercise.answers);
    }, [exercise])

    if (!exercise.title) return <View></View>

    return (
        <View style={styles.container}>
            <Text style={styles.instructions}>
                <Text style={[styles.instructions, styles.boldInstructions]}>Instruções: </Text>{title}
            </Text>
            <Text style={styles.question}>{question}</Text>
            <TextInput
                style={!answers ? styles.input :
                    correctAnswer.toLowerCase() == answers.toLowerCase() ?
                        [styles.input, styles.rightAnswer] : [styles.input, styles.wrongAnswer]}
                value={answers} onChangeText={val => setAnswers(val)}
                onBlur={() => updateExercise({
                    ...identifiers,
                    answers: correctAnswer.toLowerCase() == answers.toLowerCase() ? correctAnswer : answers
                })}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    instructions: {
        fontFamily: "Sora-Regular",
        fontSize: 16,
        color: "white",
        marginBottom: 10,
        lineHeight: 20
    },
    boldInstructions: {
        fontFamily: "Sora-SemiBold",
    },
    question: {
        fontFamily: "Sora-Regular",
        fontSize: 18,
        color: "white",
        lineHeight: 24,
        width: "100%"
    },
    input: {
        width: "90%",
        marginTop: 40,
        borderBottomColor: 'white',
        borderBottomWidth: 2,
        paddingVertical: 10,
        color: "white",
        fontSize: 20
    },
    rightAnswer: {
        backgroundColor: "#0BA484"
    },
    wrongAnswer: {
        backgroundColor: "#D63E3E"
    }
});

export default ShortAnswer;