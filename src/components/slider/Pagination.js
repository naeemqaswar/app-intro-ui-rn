import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function Pagination(props) {
    const {total, index} = props;
    
    return <View style={styles.container}>
        {Array.from(Array(total).keys()).map((key, i)=>{
            return <View
                key={i}
                style={[styles.dot, index == i ? styles.selected:{}]} 
            />
        })}
    </View>;
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 220,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    dot: {
        height: 10,
        width: 10,
        borderRadius: 10 / 2,
        backgroundColor: '#d8d8d8',
        marginLeft: 10,
    },
    selected: {
        width: 25,
        backgroundColor: '#fc7be0',
    },
});