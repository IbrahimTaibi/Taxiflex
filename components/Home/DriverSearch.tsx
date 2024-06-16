import React, {useEffect, useRef} from 'react';
import {View, Animated, Text, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
import styles from '../../styles/HomeScreenStyles/BottomSectionStyles';
import colors from '../../constants/colors';

// Replace this with the path to your Lottie JSON file
const taxiAnimation = require('../../assets/animations/SearchingAnimation.json');

type BottomSectionProps = {
  animatedHeight: Animated.Value;
  animatedOpacity: Animated.Value;
  panHandlers: any;
  handlePress: () => void;
  visitedPlaces: {adresse: string; City: string}[];
};

const DriverSearch: React.FC<BottomSectionProps> = ({
  animatedHeight,
  animatedOpacity,
  panHandlers,
}) => {
  const searchLinePosition = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animateLine = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(searchLinePosition, {
            toValue: 300, // Adjust the maximum position as needed
            duration: 1000, // Adjust the duration as needed
            useNativeDriver: true,
          }),
          Animated.timing(searchLinePosition, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
          }),
        ]),
      ).start();
    };

    animateLine();
  }, [searchLinePosition]);

  return (
    <Animated.View
      style={[localStyles.bottomSection, {height: animatedHeight}]}
      {...panHandlers}>
      <View style={styles.swipeLine} />
      <Animated.View style={{opacity: animatedOpacity}}>
        <View style={localStyles.searchContainer}>
          <View style={localStyles.iconContainer}>
            <LottieView
              source={taxiAnimation}
              autoPlay
              loop
              style={localStyles.icon}
            />

            <Text style={localStyles.searchText}>
              En train de chercher un taxi ...
            </Text>
          </View>
        </View>
      </Animated.View>
    </Animated.View>
  );
};

const localStyles = StyleSheet.create({
  bottomSection: {
    width: '100%',
    backgroundColor: colors.background,
    paddingHorizontal: '4%',
    position: 'absolute',
    bottom: 0,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },
  searchContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginTop: 50,
    width: 200,
    height: 200, // Adjusted for Lottie animation
  },
  searchText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 22,
    color: '#000',
  },
  searchLineContainer: {
    width: 300, // Match this with the translateX value
    height: 8,
    overflow: 'hidden',
    backgroundColor: '#E0E0E0', // Optional: background color for container
    borderRadius: 2.5,
    marginVertical: 20,
  },
  searchLine: {
    width: 100, // Width of the scanning line
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: 2.5,
  },
});

export default DriverSearch;
