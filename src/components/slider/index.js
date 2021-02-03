import React, {useState} from "react";
import { View, StyleSheet } from "react-native";
import Swiper from "react-native-web-swiper";

import Slide from '../slider/Slide';
import Pagination from '../slider/Pagination';

export default function Slider(props) {
    const [pageIndex, setPageIndex] = useState(0);

    return <View style={styles.container}>
        <Swiper
            from={0}
            controlsEnabled={false}
            minDistanceForAction={0.1}
            springConfig={{ bounciness: 10 }}
            onIndexChanged={i => setPageIndex(i)}
        >
            {props.content.map((item)=> <Slide key={item.text} item={item} />)}
        </Swiper>
        <Pagination
            total={props.content.length} 
            index={pageIndex}
        />
    </View>;
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
});