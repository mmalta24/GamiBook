import React, { useEffect, useState } from 'react';
import { Button, Overlay } from '@rneui/themed';
import { View, Text, Pressable, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from '../../styles/LibraryStyles';
import GreyBar from '../../components/shared/GreyBar';
import CategoryItem from '../../components/library/CategoryItem';
import { getCategories } from '../../api/categories';


const OverlayComponent = ({ show, toggleOverlay,filter,changeFilter }) => {

    const [categories, setCategories] = useState([]);
    

    useEffect(()=>{
        findCategories()
    },[])

    async function findCategories(){
        setCategories(await getCategories())
    }

    return (
        <View>
            <Overlay isVisible={show} onBackdropPress={toggleOverlay} overlayStyle={{ width: '100%', height: '46%', position: 'absolute', bottom: 0, borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 0 }}>
                <View style={styles.searchView}>
                    <Icon style={styles.searchIcon} name="search" size={38} color="#424242" />
                    <TextInput
                        style={styles.input}
                        placeholder="Pesquise alguma coisa..."
                        value=""
                        placeholderTextColor="#232323"
                        underlineColorAndroid="transparent"
                        editable={false}
                    />
                </View>
                <View style={styles.categoryView}>
                    <GreyBar />
                    <Text style={styles.categoryTitle}>Categorias</Text>
                    <ScrollView horizontal={true}>
                        {categories.map((category, index) => (
                            <CategoryItem key={index} item={category}
                                isSelected={category.name === filter.name}
                                action={() => filter.name==category.name? changeFilter({}) : changeFilter(category)}
                            />
                        ))}
                    </ScrollView>
                    <Pressable style={styles.resultBtn} onPress={() =>{toggleOverlay()}} >
                        <Text style={styles.resultTxt}>Ver Resultados</Text>
                    </Pressable>
                </View>
            </Overlay>
        </View>
    );

}

export default OverlayComponent;