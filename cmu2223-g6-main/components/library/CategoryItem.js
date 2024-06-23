import { Pressable, View, Text, StyleSheet } from 'react-native';
import React from 'react';
// Icons
import Icon from 'react-native-vector-icons/MaterialIcons';

const CategoryItem = ({ item, isSelected, action }) => {
    const style = styles(isSelected);

    return (
        <Pressable style={style.btn} onPress={action}>
            <View style={style.categoryBtn}>
                {item.name!='PLNM' ?
                    <Icon name={item.name=='Informática'?'computer':item.name=='Gestão e Economia'?'euro':item.name=='Hotelaria e Turismo'?'card-travel':''} size={42} color="white" /> :
                    <Text style={style.categoryText}>Pt</Text>}
            </View>
            <Text style={style.categoryName}>{item.name}</Text>
        </Pressable>
    );
};

const styles = isSelected => StyleSheet.create({
    btn: {
        marginRight: 20,
        alignItems: "center",
        width: 72
    },
    categoryBtn: {
        width: 72,
        height: 72,
        borderRadius: 36,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: isSelected ? "#BC5F51" : "#A0A0A0"
    },
    categoryText: {
        fontSize: 25,
        fontFamily: "Sora-SemiBold",
        color: "white"
    },
    categoryName: {
        fontSize: 12,
        fontFamily: "Sora-SemiBold",
        textAlign: "center",
        marginTop: 5,
        marginBottom: 15,
        color: isSelected ? "#BC5F51" : "white"
    }
});

export default CategoryItem;