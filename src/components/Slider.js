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
    myCustomAnimatedValue = new Animated.Value(0);
    sliderContent = [
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

    constructor(props){
        super(props);

        this.state = {
            pageIndex: 0,
        };
    }


    getPageTransformStyle = index => ({
        transform: [
            {
            scale: this.myCustomAnimatedValue.interpolate({
                inputRange: [
                (index - 1) * (width + 8), // Add 8 for dividerWidth
                index * (width + 8),
                (index + 1) * (width + 8)
                ],
                outputRange: [0, 1, 0],
                extrapolate: "clamp"
            })
            },
            {
            rotate: this.myCustomAnimatedValue.interpolate({
                inputRange: [
                (index - 1) * (width + 8),
                index * (width + 8),
                (index + 1) * (width + 8)
                ],
                outputRange: ["180deg", "0deg", "-180deg"],
                extrapolate: "clamp"
            })
            }
        ]
    });

    _sliderPage(content){
        const {text, image} = content;

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
            BackgroundComponent={_bgComponent}
            ForegroundComponent={_fgComponent}
        />;
    }

    _renderSlider(){
        return <ParallaxSwiper
            speed={0.5}
            // animatedValue={this.myCustomAnimatedValue}
            showProgressBar={false}
            dividerWidth={0}
            dividerColor="transparent"
            backgroundColor="transparent"
            // onMomentumScrollEnd={activePageIndex => console.log(activePageIndex)}
            onMomentumScrollEnd={activePageIndex => {
                console.log(activePageIndex);
                this.setState({pageIndex: activePageIndex});
            }}
            showsHorizontalScrollIndicator={false}
            progressBarBackgroundColor="transparent"
            // progressBarBackgroundColor="rgba(0,0,0,1)"
            // progressBarBackgroundColor="transparent"
            // progressBarValueBackgroundColor="white"
        >
            {this._sliderPage(this.sliderContent[0])}
            {this._sliderPage(this.sliderContent[1])}
            {this._sliderPage(this.sliderContent[2])}
        </ParallaxSwiper>
    }

    _renderPagination(){
        let _selectedIndex = this.state.pageIndex;

        return <View style={styles.paginationWrapper}>
            {Array.from(Array(this.sliderContent.length).keys()).map((key, index)=>{
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
        bottom: 230,
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