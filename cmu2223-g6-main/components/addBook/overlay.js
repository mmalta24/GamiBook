import React, { useState } from 'react';
import { Button, Overlay, Icon } from '@rneui/themed';
import { View, Text, Pressable } from 'react-native';
import IconIO from 'react-native-vector-icons/Ionicons';
import styles from '../../styles/AddbookStyles';
import Manually from './Manually';
import Scan from './Scan';
import PageTitle from '../shared/PageTitle';

const OverlayComponent = ({ show, toggleOverlay, updateBook }) => {
    const [text, setText] = useState('Digitalizar Código');
    function changeScreen() {
        if (text === 'Digitalizar Código') {
            setText('Inserir Manualmente')
        } else {
            setText('Digitalizar Código')
        }
    }

    return (
        <View>
            <Overlay isVisible={show} onBackdropPress={toggleOverlay} overlayStyle={{ width: '100%', height: '95%', position: 'absolute', bottom: 0, borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 0 }}>
                <View style={[styles.btns, { marginTop: 15, marginHorizontal: 10 }]}>

                    <Pressable onPress={()=>{toggleOverlay()}}>
                        <IconIO name='close' size={40} color={"#353535"} />
                    </Pressable>

                    <Pressable onPress={changeScreen}>
                        <Text style={styles.changeView}>{text}</Text>
                    </Pressable>
                </View>

                <View style={{ paddingHorizontal: 5, marginTop: 10, marginHorizontal: 10 }}>
                    <PageTitle title="Adicionar Livro" color="#353535" />
                </View>

                {text === 'Digitalizar Código' ? <Manually updateBook={() => { updateBook() }} /> : <Scan updateBook={() => { updateBook() }}/>}
            </Overlay>
        </View>
    );

}

export default OverlayComponent;