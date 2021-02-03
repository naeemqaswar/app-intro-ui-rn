import React from 'react'
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'

export default function Button(props) {
    const {text, action, bgColor = '#fff', textColor = '#8e8e8e'} = props;

    return <TouchableHighlight
        onPress={action}
        activeOpacity={0.9}
        style={styles.container}
    >
        <View style={[styles.wrapper, {backgroundColor: bgColor}]}>
            <Text style={[styles.text, {color: textColor}]}>{text}</Text>
        </View>
    </TouchableHighlight>;
}


const styles = StyleSheet.create({
    container:{
        borderRadius: 15,
    },
    wrapper:{
        width: 310,
        borderRadius: 15,
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    text:{
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});