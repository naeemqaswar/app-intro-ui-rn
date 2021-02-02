import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

const { width, height } = Dimensions.get("window");

export default function Slide(props) {
    const {text, image} = props.item;

    let _title = <View style={styles.titleContainer}>
        <View style={styles.titleWrapper}>
            <Text style={styles.title}>{text}</Text>
        </View>
    </View>;
    let _illustration = <View style={styles.illustrationContainer}>
        <View style={styles.illustrationWrapper}>
            <Image
                style={styles.image}
                resizeMode="contain"
                source={image}
            />
        </View>
    </View>;

    return <View key={text}>
        {_title}
        {_illustration}
    </View>
};

const styles = StyleSheet.create({
    titleContainer: {
        flex: 1,
    },
    titleWrapper: {
        height: 180,
        width: '100%',
        marginTop: '15%',
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: '20%',
    },
    title: {
        fontSize: 27,
        fontWeight: "700",
        fontFamily: 'sans-serif',
        color: "black",
        textAlign: 'center',
    },
    illustrationContainer: {
        width,
        height
    },
    illustrationWrapper: {
        width: '100%', 
        position: 'absolute',
        top: '30%',
    },
    image: {
        height: 320, 
        width: '100%',
    },
});