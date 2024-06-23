import React, { useRef, useState } from 'react';
import { View, Image, Animated,Pressable, Alert, Text, StyleSheet } from 'react-native';

import {Button, Dialog, CheckBox, ListItem, Avatar} from '@rneui/themed';

import { patchProfile } from '../../api/profile';
function LuckyWheel(props) {
    const [rotationAnim] = useState(new Animated.Value(0));
    const wheelRef = useRef(null);
    const [modal, setModal] = useState(false);

    const [prize, setPrize] = useState({category: "teste", description: "teste", value: 0}  );
    const [prizeList, setPrizeList] = useState([
        {category: "points", description: "50 pontos", value: 50},
        {category: "tickets", description: "5 bilhetes", value: 5},
        {category: "points", description: "100 pontos", value: 100},
        {category: "tickets", description: "3 bilhetes", value: 3},
        {category: "points", description: "150 pontos", value: 150},
        {category: "tickets", description: "2 bilhetes", value: 2},
        {category: "points", description: "6 pontos", value: 6},
        {category: "tickets", description: "2 bilhetes", value: 2}  
    ])
    const showModal = () => {
        setModal(!modal);
    };


    function spinWheel() {
        if (props.nTickets == 0) {
            Alert.alert('Aviso', "Não tens bilhetes para a roleta.")
        } else {
            rotationAnim.setValue(0);
            const randomValue = Math.random();
            Animated.timing(rotationAnim, {
                toValue: randomValue,
                duration: 250, 
                useNativeDriver: true
            }).start(() => {
                let sort = prizeList[Math.floor(Math.random() * prizeList.length)]
                setPrize(sort)
                props.nTickets = props.nTickets - 1
                showModal()
                if (sort.category == "tickets") {
                    const data = {tickets: sort.value -1}
                    patchProfile(data)
                } else if (sort.category == "points") {
                    const data = {points: sort.value}                    
                    patchProfile(data)
                    const data1 = {tickets: -1}                    
                    patchProfile(data1)

                }
            })
        }

    }

    const spin = rotationAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    });

    return (
        <View style={{marginVertical:15,width:'100%',height:350,display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Animated.Image
                ref={wheelRef}
                style={{
                    width: 350,
                    height: 350,
                    transform: [{ rotate: spin }],
                    alignSelf:'center'
                }}
                source={require('../../assets/img/spinner.png')}
            />

            <Pressable style={{position:'absolute',zIndex:1}}  onPress={spinWheel}>
              <Image style={{width:76,height:94}} source={require('../../assets/img/button_start.png')}/>
            </Pressable>
            <Dialog
                isVisible={modal}
                onBackdropPress={showModal}
            >
                <View style={styles.modal}>
                    <Text style={{color: "#3E4553", fontSize: 30, fontFamily:'Sora-SemiBold'}}>Parabéns!</Text>
                    <Text style={{color: "#A0A0A0", fontSize: 15, fontFamily:'Sora', marginTop:10}}>Acabaste de ganhar mais {prize.description}.</Text>
                    {prize.category == 'tickets' ? 
                        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop:20}}>
                            <Text style={{color: "#000000", fontSize: 18, fontFamily:'Sora-SemiBold'}}>{prize.value}x</Text>
                            <Image style={{width: 50, height: 50, marginLeft: 10}} source={require('../../assets/img/tickets.png')}/>
                        </View>
                    :
                        <Text style={{color: "#000000", fontSize: 18, fontFamily:'Sora-SemiBold', marginTop:20}}>{prize.description}</Text>
                    }
                    <Image style={{width: 130, height: 130}} source={require('../../assets/img/gift.png')}/>
                    <Pressable onPress={() => setModal(false)}>
                        <Text style={styles.closeText}>Fechar</Text>
                    </Pressable>
                </View>

            </Dialog>
        </View>
        
    );
}

const styles = StyleSheet.create({
    modal: {
        alignItems: 'center',
        justifyContent:'center'
    },
    closeText:{
        color: '#BC5F51', 
        fontFamily: 'Sora-SemiBold',
        fontSize: 16,
    }
})

export default LuckyWheel;