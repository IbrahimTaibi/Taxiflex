import React from 'react';
import {
  View,
  TouchableOpacity,
  Animated,
  Text,
  ScrollView,
  Image,
} from 'react-native';

import styles from '../../styles/HomeScreenStyles/BottomSectionStyles';

const airplaneIcon = require('../../assets/icons/Airplane.png'); // Import the custom icon
const mallIcon = require('../../assets/icons/mall.png');
const recent = require('../../assets/icons/recent.png');
const search = require('../../assets/icons/search.png'); // Import the search icon

type BottomSectionProps = {
  animatedHeight: Animated.Value;
  animatedOpacity: Animated.Value;
  panHandlers: any;
  handlePress: () => void;
  visitedPlaces: {adresse: string; City: string}[];
};

const BottomSection: React.FC<BottomSectionProps> = ({
  animatedHeight,
  animatedOpacity,
  panHandlers,
  handlePress,
  visitedPlaces,
}) => {
  return (
    <Animated.View
      style={[styles.bottomSection, {height: animatedHeight}]}
      {...panHandlers}>
      <View style={styles.swipeLine} />
      <Animated.View style={{opacity: animatedOpacity}}>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <View style={styles.iconCircleSearch}>
            <Image source={search} style={{width: 25, height: 25}} />
          </View>
          <Text style={styles.buttonText}>Where to?</Text>
        </TouchableOpacity>
      </Animated.View>
      <ScrollView contentContainerStyle={styles.placesContainer}>
        {visitedPlaces.map((place, index) => (
          <View key={index}>
            <View style={styles.placeContainer}>
              {index === 1 ? (
                <Image source={airplaneIcon} style={styles.iconBottomBar} />
              ) : index === 2 ? (
                <Image source={mallIcon} style={styles.iconBottomBar} />
              ) : (
                <Image source={recent} style={styles.iconBottomBar} />
              )}

              <View style={styles.placeTextContainer}>
                <Text style={styles.placeText}>{place.adresse}</Text>
                <Text style={styles.cityText}>{place.City}</Text>
              </View>
            </View>
            {index < visitedPlaces.length - 1 && (
              <View style={styles.separator} />
            )}
          </View>
        ))}
      </ScrollView>
    </Animated.View>
  );
};

export default BottomSection;
