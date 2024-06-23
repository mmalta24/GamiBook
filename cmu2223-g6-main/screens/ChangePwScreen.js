import { View, Pressable, Text, ScrollView, Image, TextInput, Modal, Switch, Alert } from 'react-native';
import React, { useState } from 'react';
import SubPageHeader from '../components/shared/SubPageHeader';
import PageTitle from '../components/shared/PageTitle';
import NavigationPressable from '../components/shared/NavigationPressable';

import styles from '../styles/ChangePwStyles';
import LabelInputGroup from '../components/changepw/LabelInputGroup';

import { patchProfile } from '../api/profile';

const ChangePwScreen = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false);
    const [oldPw, setOldPw] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [errors, setErrors] = useState("");

    function toggleSwitch() {
        setIsEnabled(previousState => !previousState);
    }

    function updatePassword() {
        setModalVisible(!modalVisible)
        const data = {password: newPassword};
        if (newPassword != confirm) {
            Alert.alert(
                'Aviso',
                'As passwords não coincidem!',
                [
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                { cancelable: false }
              
        )} else if (newPassword == "") {
            Alert.alert(
                'Aviso',
                'Password não pode estar vazia!',
                [
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                { cancelable: false }
              
        )} else {
            patchProfile(data)
            Alert.alert(
                'Sucesso',
                'Password alterada com sucesso!')
            navigation.navigate("Perfil");
        }

    }
    return (
        <ScrollView contentContainerStyle={styles.body}>
            <SubPageHeader />
            <View style={styles.secondBody}>
                <View style={styles.btns}>
                    <NavigationPressable
                        navigateAction={() => navigation.navigate("Perfil")}
                        iconName="close"
                        iconColor="black"
                        iconSize={40}
                    />
                    <NavigationPressable
                        navigateAction={() => setModalVisible(true)}
                        iconName="check"
                        iconColor="rgba(35, 35, 35, 0.33)"
                        iconSize={40}
                    />
                </View>
                <PageTitle title="Alterar Password" color="black" />
                <View>
                    <Text style={styles.descriptionText}>A tua password deve ter, pelo menos, 6 caracteres e incluir uma combinação de números e letras.</Text>

                    <React.Fragment>
                        <Text style={styles.txtLabel}>Password Atual</Text>
                        <TextInput 
                            style={styles.input} 
                            secureTextEntry={true} 
                            value={oldPw}
                            onChange={event => setOldPw(event.nativeEvent.text)}
                        />
                        <Text style={styles.txtLabel}>Password Nova</Text>
                        <TextInput 
                            style={styles.input} 
                            secureTextEntry={true} 
                            value={newPassword}
                            onChange={event => setNewPassword(event.nativeEvent.text)}
                        />
                        <Text style={styles.txtLabel}>Confirmar Password</Text>
                        <TextInput 
                            style={styles.input} 
                            secureTextEntry={true} 
                            value={confirm}
                            onChange={event => setConfirm(event.nativeEvent.text)}
                        />
                    </React.Fragment>
                </View>
                <Text>{errors}</Text>

            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(!modalVisible)}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.alignRow}>
                            <Image source={require('../assets/icons/alerta.png')} style={styles.alertImg} />
                            <Text style={styles.alertTxt}>Alerta</Text>
                        </View>

                        <Text style={styles.modalText}>Confirma a alteração da password?</Text>

                        <View style={styles.options}>
                            <View style={{ ...styles.button, ...styles.buttonConfirm }}>
                                <Pressable onPress={() => updatePassword()}>
                                    <Text style={styles.txtYes}>Sim</Text>
                                </Pressable>
                            </View>
                            <View style={styles.button}>
                                <Pressable onPress={() => setModalVisible(!modalVisible)}>
                                    <Text style={styles.txtNo}>Não</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>

        </ScrollView>
    );
};

export default ChangePwScreen;
