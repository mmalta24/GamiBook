import React, { useState } from 'react';
import { View, Pressable, Text, ScrollView, Image } from "react-native";

import SubPageHeader from '../components/shared/SubPageHeader';
import PageTitle from '../components/shared/PageTitle';
import NavigationPressable from '../components/shared/NavigationPressable';

import styles from '../styles/AddbookStyles';

import Manually from '../components/addBook/Manually';
import Scan from '../components/addBook/Scan';

const AddBookScreen = ({ navigation }) => {
    const [text, setText] = useState('Digitalizar Código');
    function changeScreen() {
        if (text === 'Digitalizar Código') {
            setText('Inserir Manualmente')
        } else {
            setText('Digitalizar Código')
        }
    }

    return (
        <ScrollView contentContainerStyle={styles.body}>
            <SubPageHeader />
            <View style={styles.secondBody}>
                <View style={styles.btns}>
                    <NavigationPressable
                        navigateAction={() => navigation.navigate("Biblioteca")}
                        iconName="close"
                        iconColor="black"
                    />
                    <Pressable onPress={changeScreen}>
                        <Text style={styles.changeView}>{text}</Text>
                    </Pressable>
                </View>
                <PageTitle title="Adicionar Livro" color="black" />

                {text === 'Digitalizar Código' ? <Manually /> : <Scan />}
            </View>
        </ScrollView>
    );
};

export default AddBookScreen;