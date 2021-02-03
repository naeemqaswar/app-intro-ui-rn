import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Slider from '../components/slider';
import Link from '../components/Link';
import Button from '../components/Button';

export default function AppIntroScreen() {
    let _introContent = [
        {
            text: "Welcome to Pof-Pof",
            image: require('../../assets/startup/step-1-welcome.png'),
        },
        {
            text: "Looking for the new style?",
            image: require('../../assets/startup/step-2-looking.png'),
        },
        {
            text: "Beautiful and funny",
            image: require('../../assets/startup/step-3-beautiful.png'),
        }
    ];

    const _actions = () => {
        return <View style={styles.actionsWrapper}>
            <Button
                text="Get Started"
                action={()=>{}}
                textColor="#000"
                bgColor="#ffde05"
            />
            <Link
                text="Skip"
                action={()=>{}}
                color="#8e8e8e"
            />
        </View>;
    };

    return <View style={styles.container}>
        <Slider content={_introContent} />
        {_actions()}
    </View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    actionsWrapper:{
        position: 'absolute',
        bottom: 50,
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: '20%',
    },
});
