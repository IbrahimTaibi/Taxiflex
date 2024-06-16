import React, {useEffect, useRef} from 'react';
import {View, Animated, Text, StyleSheet, TouchableOpacity} from 'react-native';
import LottieView from 'lottie-react-native';
import styles from '../../styles/HomeScreenStyles/DriverSearchStyles';

// Replace this with the path to your Lottie JSON file
const taxiAnimation = require('../../assets/animations/SearchingAnimation.json');

type BottomSectionProps = {
  animatedOpacity: Animated.Value;
  panHandlers: any;

  visitedPlaces: {adresse: string; City: string}[];
  setDriverSearchVisible: (visible: boolean) => void;
};

const DriverSearch: React.FC<BottomSectionProps> = ({
  animatedOpacity,
  panHandlers,
  setDriverSearchVisible,
}) => {
  const searchLinePosition = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animateLine = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(searchLinePosition, {
            toValue: 300,
            duration: 1000,
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

  const handleCancel = () => {
    setDriverSearchVisible(false); // Hide the DriverSearch component
  };

  return (
    <Animated.View style={[styles.bottomSection]} {...panHandlers}>
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
          <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
            <Text style={styles.cancelButtonText}>Cancel Ride</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </Animated.View>
  );
};
export default DriverSearch;
