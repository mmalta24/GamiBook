// Import Components
import { View, Pressable, Text, ScrollView, Switch, Alert, Button, TextInput } from 'react-native';
import React, { useState } from 'react';
import SubPageHeader from '../components/shared/SubPageHeader';
import PageTitle from '../components/shared/PageTitle';
import NavigationPressable from '../components/shared/NavigationPressable';

// Import Styles
import styles from '../styles/ChangeAvatarStyles';

// Import Api files
import { patchProfile } from '../api/profile';

const ChangeAvatarScreen = ({ navigation }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [newAvatar, setNewAvatar] = useState("");

    async function toggleSwitch() {
        setIsEnabled(previousState => !previousState);
        if (isEnabled == true) {
            console.log('Using your profile picture.');
        } else {
            console.log("Using the level's avatar.");
            const data = {avatar: ""};
            patchProfile(data)
            // Got to Profile
            navigation.navigate("Perfil");
        }
    }

    function updateAvatar() {
        const data = {avatar: newAvatar};
        if (newAvatar == "") {
            Alert.alert('Aviso', 'Imagem de perfil não pode estar vazia!',)
        } else {
            patchProfile(data)
            navigation.navigate("Perfil");
        }
    }

    return (
        <ScrollView contentContainerStyle={styles.body}>
            <ScrollView>
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
                <PageTitle title="Alterar Imagem" color="black" />
                <View style={styles.container}>
                    <Text style={styles.descriptionText}>Escolhe uma imagem dos teus avatares ou personaliza a tua própria identidade ao adicionares a tua imagem.</Text>
                    <View style={styles.useAvatar}>
                        <Text style={styles.useAvatarText}>Usar Avatar</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#BC5F51" }}
                            thumbColor={isEnabled ? "#3E4553" : "#f4f3f4"}
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />

                    </View>
                    <Text style={styles.textUrl}>Insira uma nova foto de perfil</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setNewAvatar}
                        value={newAvatar}
                    />
                    <Pressable style={styles.btnAdd} onPress={() => updateAvatar()}>
                        <Text style={styles.addImgText}>Adicionar Imagem</Text>
                    </Pressable>
                </View>
            </View>
            </ScrollView>
        </ScrollView>
    );
};

export default ChangeAvatarScreen;