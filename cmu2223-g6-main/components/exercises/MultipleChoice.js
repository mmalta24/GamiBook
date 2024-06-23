import { View, Text, Pressable, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import { updateExercise } from '../../api/books';

const MultipleChoice = ({ exercise, identifiers }) => {
    const correctAnswer = exercise.correctAnswer[0], options = exercise.options[0], question = exercise.question[0];
    //exercise.answers
    const list = ["A", "B", "C", "D"];
    const [answers, setAnswers] = useState("");
    const [selectedBtnStyle, setSelectedBtnStyle] = useState("");

    onOptionPress = (text) => {
        console.log("a");
        setAnswers(text);
        updateExercise({ ...identifiers, answers: text });
        if (text !== correctAnswer) {
            setSelectedBtnStyle([styles.btn, styles.wrongAnswer]);
            setTimeout(() => {
                setSelectedBtnStyle("");
                setAnswers("");
            }, 1000)
            console.log("errou");
        }
        else {
            setSelectedBtnStyle([styles.btn, styles.rightAnswer]);
            console.log("acertou");
        }
    }

    console.log(answers);

    if (!exercise.title) return <View></View>

    return (
        <View>
            <Text style={styles.question}>{question}</Text>

            <View style={styles.btnContainer}>
                {options.map((option, index) => (
                    <Pressable key={index}
                        style={selectedBtnStyle && (exercise.answers === option || answers === option) ? selectedBtnStyle :
                            exercise && exercise.answers === correctAnswer && option === correctAnswer ? [styles.btn, styles.rightAnswer] : styles.btn}

                        onPress={() => onOptionPress(option)}
                        disabled={exercise.answers != "" || answers != ""}
                    >
                        <Text style={[styles.btnText, styles.btnOption]}>{list[index]}. </Text>
                        <Text style={styles.btnText}>{option}</Text>
                    </Pressable>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    question: {
        fontFamily: "Sora-Regular",
        fontSize: 18,
        color: "white",
        lineHeight: 24
    },
    btnContainer: {
        width: "100%",
        alignItems: "center"
    },
    btn: {
        width: "90%",
        height: 60,
        borderColor: "white",
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 20,
        paddingHorizontal: 15,
        flexDirection: "row",
        alignItems: "center"
    },
    btnText: {
        color: "white",
        fontSize: 17,
        fontFamily: "Sora-Regular"
    },
    btnOption: {
        fontFamily: "Sora-SemiBold"
    },
    rightAnswer: {
        backgroundColor: "#0BA484"
    },
    wrongAnswer: {
        backgroundColor: "#D63E3E"
    }
});

export default MultipleChoice;