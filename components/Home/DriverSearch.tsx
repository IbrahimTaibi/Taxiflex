import React, {useEffect, useRef} from 'react';
import {View, Animated, Text, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
import styles from '../../styles/HomeScreenStyles/DriverSearchStyles';

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
      style={[styles.bottomSection, {height: animatedHeight}]}
      {...panHandlers}>
      <Animated.View style={{opacity: animatedOpacity}}>
        <View style={styles.searchContainer}>
          <View style={styles.iconContainer}>
            <LottieView
              source={taxiAnimation}
              autoPlay
              loop
              style={styles.icon}
            />

            <Text style={styles.searchText}>
              En train de chercher un taxi ...
            </Text>
          </View>
        </View>
      </Animated.View>
    </Animated.View>
  );
};

export default DriverSearch;
