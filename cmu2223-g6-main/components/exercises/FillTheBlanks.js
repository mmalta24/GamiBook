import { View, Text, StyleSheet, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';
import { updateExercise } from '../../api/books';

const FillTheBlanks = ({ exercise, identifiers }) => {
    const { correctAnswer, example, question, title } = exercise;
    const [answers, setAnswers] = useState(Array(question?.length).fill(""));

    useEffect(() => {
        if (exercise && exercise.answers) {
            let newAnswers = []
            let savedAnswers = exercise.answers.split("/")
            for (let index = 0; index < question.length; index++) {
                newAnswers.push(savedAnswers[index] || answers[index])
            }
            setAnswers(newAnswers);
        }
    }, [exercise])

    if (!exercise.title) return <View></View>

    return (
        <View style={{ marginHorizontal: 10 }}>
            <Text style={styles.instructions}>
                <Text style={[styles.instructions, styles.boldInstructions]}>Instruções: </Text>{title}
            </Text>
            <Text style={styles.instructions}>
                <Text style={[styles.instructions, styles.boldInstructions]}>Exemplo: </Text>{example}
            </Text>
            <View style={styles.separator}></View>

            {question.map((q, id) => {
                const parts = q.split("_");
                return (
                    <View style={styles.question} key={id}>
                        {
                            parts.map((part, index) => (
                                <React.Fragment key={index}>
                                    <Text style={styles.questionText} >{part}</Text>
                                    {
                                        index !== question[0].split("_").length - 1 &&
                                        <TextInput
                                            style={!answers[id] ? styles.input :
                                                correctAnswer[id] == answers[id] ? [styles.input, styles.rightAnswer] : [styles.input, styles.wrongAnswer]}
                                            value={answers[id]}
                                            onChangeText={val => setAnswers(answers.map((a, i) => id == i ? val : a))}
                                            onBlur={() => updateExercise({ ...identifiers, answers: answers.join("/") })}
                                        />
                                    }
                                </React.Fragment>
                            ))
                        }
                    </View>
                )
            })}
        </View>
    );
};

const styles = StyleSheet.create({
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
    separator: {
        width: "100%",
        borderWidth: 0.5,
        borderColor: "#D9D9D9",
        marginTop: 20,
        marginBottom: 30
    },
    question: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10
    },
    questionText: {
        fontFamily: "Sora-Regular",
        fontSize: 18,
        color: "white",
        lineHeight: 24
    },
    input: {
        width: 100,
        height: 30,
        paddingHorizontal: 5,
        paddingVertical: 2,
        fontSize: 16,
        borderColor: "white",
        borderWidth: 1,
        borderRadius: 5,
        color: "white",
        marginBottom: 10,
        marginHorizontal: 5
    },
    rightAnswer: {
        backgroundColor: "#0BA484"
    },
    wrongAnswer: {
        backgroundColor: "#D63E3E"
    }
});

export default FillTheBlanks;