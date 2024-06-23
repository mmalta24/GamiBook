import { Pressable, StyleSheet } from 'react-native';
import React from 'react';
//Icons
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconFE from 'react-native-vector-icons/Feather'
import IconIO from 'react-native-vector-icons/Ionicons'
import IconOC from 'react-native-vector-icons/Octicons'

//

const NavigationPressable = (
    { navigateAction, disabled = false, iconName, iconSize, iconColor, marginSize = 20, aditionalStyles = {} }
) => {
    return (
        <Pressable style={[styles(marginSize), aditionalStyles]} onPress={navigateAction} disabled={disabled}>
            <Icon name={iconName} size={iconSize} color={iconColor} />
        </Pressable>
    );
};

export const NavigationPressableMCI = (
    { navigateAction, disabled = false, iconName, iconSize = 40, iconColor, marginSize }
) => {
    return (
        <Pressable style={styles(marginSize)} onPress={navigateAction} disabled={disabled}>
            <IconMCI name={iconName} size={iconSize} color={iconColor} />
        </Pressable>
    );
};

export const NavigationPressableFA = (
    { navigateAction, disabled = false, iconName, iconSize = 40, iconColor, marginSize = 20, iconStyle = {} }
) => {
    return (
        <Pressable style={[styles(marginSize)]} onPress={navigateAction} disabled={disabled}>
            <IconFA name={iconName} size={iconSize} color={iconColor} style={iconStyle} />
        </Pressable>
    );
};

export const NavigationPressableFE=(
    { navigateAction, disabled = false, iconName, iconSize = 40, iconColor, marginSize = 20, iconStyle = {} }
) => {
    return (
        <Pressable style={[styles(marginSize)]} onPress={navigateAction} disabled={disabled}>
            <IconFE name={iconName} size={iconSize} color={iconColor} style={iconStyle} />
        </Pressable>
    );
};

export const NavigationPressableIO=(
    { navigateAction, disabled = false, iconName, iconSize, iconColor, marginSize = 20, iconStyle = {} }
) => {
    return (
        <Pressable style={[styles(marginSize)]} onPress={navigateAction} disabled={disabled}>
            <IconIO name={iconName} size={iconSize} color={iconColor} style={iconStyle} />
        </Pressable>
    );
};

export const NavigationPressableOC=(
    { navigateAction, disabled = false, iconName, iconSize, iconColor, marginSize = 20, iconStyle = {} }
) => {
    return (
        <Pressable style={[styles(marginSize)]} onPress={navigateAction} disabled={disabled}>
            <IconOC name={iconName} size={iconSize} color={iconColor} style={iconStyle} />
        </Pressable>
    );
};

const styles = marginSize => StyleSheet.create({
    marginTop: marginSize
});

export default NavigationPressable;