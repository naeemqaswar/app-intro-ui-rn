import React from "react";
import {
    Animated,
    Text,
    View,
    Image,
    StyleSheet,
    Dimensions
} from "react-native";

import {
    ParallaxSwiper,
    ParallaxSwiperPage
} from "react-native-parallax-swiper";

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

        let _bgComponent = <View style={styles.backgroundContainer}>
            <View style={styles.backgroundWrapper}>
                <Image
                    style={styles.backgroundImage}
                    resizeMode="contain"
                    source={image}
                />
            </View>
        </View>;

        let _fgComponent = <View style={styles.foregroundContainer}>
            <View style={styles.foregroundWrapper}>
                <Text style={styles.foregroundText}>{text}</Text>
            </View>
        </View>;

        return <ParallaxSwiperPage
            key={text}
            BackgroundComponent={_bgComponent}
            ForegroundComponent={_fgComponent}
        />;
    }

    _renderSlider(){
        return <ParallaxSwiper
            speed={0.5}
            showProgressBar={false}
            dividerWidth={0}
            dividerColor="transparent"
            backgroundColor="transparent"
            onMomentumScrollEnd={activePageIndex => {
                console.log(activePageIndex);
                this.setState({pageIndex: activePageIndex});
            }}
            showsHorizontalScrollIndicator={false}
            progressBarBackgroundColor="transparent"
        >
            {this.props.content.map((item)=> this._slideSection(item))}
        </ParallaxSwiper>
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
        return <View>
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