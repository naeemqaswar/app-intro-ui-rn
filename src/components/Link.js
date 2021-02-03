import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'

export default function Link(props) {
    const {text, action, color = '#8e8e8e'} = props;

    return <View style={styles.container}>
        <TouchableHighlight
            onPress={action}
            style={styles.actionSkipTouchable}
            underlayColor="transparent"
        >
            <Text style={[styles.text, {color}]}>{text}</Text>
        </TouchableHighlight>
    </View>;
}

const styles = StyleSheet.create({
    container:{
        height: 60,
        justifyContent: 'center',
    },
    text:{
        fontSize: 16,
    },
});
