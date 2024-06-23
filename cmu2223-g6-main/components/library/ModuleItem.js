import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons'

const ModuleItem = ({ module, onExercisePress }) => {
    const [open, setOpen] = useState(false);

    const style = styles(open);

    return (
        <View style={style.item}>
            <Pressable style={style.btn} onPress={() => setOpen(!open)}>
                <View style={style.dirRow}>
                    <Image source={require("../../assets/icons/bookModule.png")} style={style.imgModule} />
                    <Text style={style.moduleName}>{module.moduleName}</Text>
                </View>
                <Pressable style={style.expandBtn}>
                    <Icon name={open ? "arrow-drop-up" : "arrow-drop-down"} size={30} color="black" />
                </Pressable>
            </Pressable>

            {open &&
                <View style={style.activityContainer}>
                    {module.activities.map(((activity, index) => (
                        <Pressable key={index}
                            onPress={() => onExercisePress(activity.id)}
                            disabled={module?.activities[index - 1]?.completed === false}
                        >
                            <View style={style.activity}>
                                <View style={style.dirRow}>
                                    <Image source={require("../../assets/icons/bookActivity.png")} style={style.imgActivity} />
                                    <Text style={style.txtActivity}>{activity.name}</Text>
                                </View>
                                {
                                    module?.activities[index - 1]?.completed === false
                                    && <IconMCI name="lock" size={30} color="#353535"></IconMCI>
                                }
                            </View>
                            {index !== module.activities.length - 1 && <View style={style.borderActivity}></View>}
                        </Pressable>
                    )
                    ))}
                </View>
            }
        </View>
    );
};

const styles = (open) => StyleSheet.create({
    item: {
        marginBottom: 20
    },
    btn: {
        width: "100%",
        borderColor: "white",
        borderWidth: 1,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: open ? 0 : 15,
        borderBottomRightRadius: open ? 0 : 15,
        padding: 6,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
    },
    dirRow: {
        flexDirection: 'row',
        alignItems: "center",
    },
    imgModule: {
        width: 40,
        height: 40
    },
    imgActivity: {
        width: 38,
        height: 38
    },
    moduleName: {
        fontFamily: "Sora-Regular",
        fontSize: 15,
        color: "white",
        marginHorizontal: 5,
        flexWrap: 'wrap',
        width: 200
    },
    expandBtn: {
        width: 30,
        height: 30,
        borderRadius: 100,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
    },
    activityContainer: {
        backgroundColor: "white",
        paddingHorizontal: 10,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    activity: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10
    },
    txtActivity: {
        fontFamily: "Sora-Regular",
        fontSize: 13,
        color: "#232323",
    },
    borderActivity: {
        borderBottomColor: "#252525",
        borderWidth: 0.3
    }
});

export default ModuleItem;