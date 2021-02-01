import React from "react";
import {
    Animated,
    Text,
    View,
    Image,
    StyleSheet,
    Dimensions
} from "react-native";
import Swiper from "react-native-web-swiper";

const { width, height } = Dimensions.get("window");

export default class Slider extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            pageIndex: 0,
        };
    }

    _slideSection(item){
        const {text, image} = item;

        let _title = <View style={styles.foregroundContainer}>
            <View style={styles.foregroundWrapper}>
                <Text style={styles.foregroundText}>{text}</Text>
            </View>
        </View>;
        let _illustration = <View style={styles.backgroundContainer}>
            <View style={styles.backgroundWrapper}>
                <Image
                    style={styles.backgroundImage}
                    resizeMode="contain"
                    source={image}
                />
            </View>
        </View>;

        return <View key={text}>
            {_title}
            {_illustration}
        </View>
    }

    _renderSlider(){
        return <Swiper
            from={0}
            controlsEnabled={false}
            minDistanceForAction={0.1}
            springConfig={{ bounciness: 10 }}
            onIndexChanged={i => this.setState({pageIndex: i})}
        >
            {this.props.content.map((item)=> this._slideSection(item))}
        </Swiper>
    }

    _renderPagination(){
        let _selectedIndex = this.state.pageIndex;

        return <View style={styles.paginationWrapper}>
            {Array.from(Array(this.props.content.length).keys()).map((key, index)=>{
                let _dotStyle = [
                    styles.paginationDots,
                    _selectedIndex == index ? styles.paginationDotSelected:{}
                ];
                return <View style={_dotStyle} key={index} />;
            })}
        </View>;
    }

    render() {
        return <View style={{flex: 1}}>
            {this._renderSlider()}
            {this._renderPagination()}
        </View>;
    }
}

const styles = StyleSheet.create({
    backgroundContainer: {
        width,
        height
    },
    backgroundWrapper: {
        width: '100%', 
        position: 'absolute',
        top: '30%',
    },
    backgroundImage: {
        height: 320, 
        width: '100%',
    },
    foregroundContainer: {
        flex: 1,
    },
    foregroundWrapper: {
        height: 180,
        width: '100%',
        marginTop: '15%',
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: '20%',
    },
    foregroundText: {
        fontSize: 27,
        fontWeight: "700",
        fontFamily: 'sans-serif',
        color: "black",
        textAlign: 'center',
    },
    paginationWrapper: {
        position: 'absolute',
        bottom: 220,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    paginationDots: {
        height: 10,
        width: 10,
        borderRadius: 10 / 2,
        backgroundColor: '#d8d8d8',
        marginLeft: 10,
    },
    paginationDotSelected: {
        width: 25,
        backgroundColor: '#fc7be0',
    },
});