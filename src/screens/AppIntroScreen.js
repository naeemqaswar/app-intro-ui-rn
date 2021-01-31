import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

import Slider from '../components/Slider'

export default function AppIntroScreen() {
    const _actions = () => {
        return <View style={styles.actionsContainer}>
            <TouchableHighlight
                onPress={()=>{}}
                activeOpacity={0.9}
                style={styles.actionGettingStartedTouchable}
            >
                <View style={styles.actionGettingStarted}>
                    <Text style={styles.gettingStartedText}>Get Started</Text>
                </View>
            </TouchableHighlight>
                <View style={styles.actionSkip}>
                    <TouchableHighlight
                        onPress={()=>{}}
                        style={styles.actionSkipTouchable}
                        underlayColor="transparent"
                    >
                        <Text style={styles.skipText}>Skip</Text>
                    </TouchableHighlight>
                </View>
        </View>;
    };

    // TODO: Add top menu space height
    return <View>
        <Slider/>
        {_actions()}
    </View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    actionsContainer:{
        position: 'absolute',
        bottom: 50,
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: '20%',
    },
    actionGettingStartedTouchable:{
        borderRadius: 15,
    },
    actionGettingStarted:{
        width: 310,
        borderRadius: 15,
        paddingVertical: 20,
        paddingHorizontal: 10,
        backgroundColor: '#ffde05',
    },
    gettingStartedText:{
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    actionSkipTouchable:{
    },
    actionSkip:{
        height: 60,
        justifyContent: 'center',
    },
    skipText:{
        fontSize: 16,
        color: '#8e8e8e',
    },
});
