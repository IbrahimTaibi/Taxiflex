import React, {RefObject} from 'react';
import {View, Text, TouchableOpacity, Animated, TextInput} from 'react-native';
import styles from '../../styles/HomeScreenStyles/TopSectionStyles';
import colors from '../../constants/colors';
import CircleIcon from '../../assets/icons/CircleIcon';
import CloseSvg from '../../assets/icons/closeSvg.svg';
import PlusSvg from '../../assets/icons/plusSvg.svg';
import GooglePlacesInput from '../../components/Maps/GooglePlacesInput';

interface TopSectionProps {
  isFocused: boolean;
  addStopVisible: boolean;
  focusedInput: string | null;
  animatedTopSection: Animated.Value;
  addStopInputRef: RefObject<TextInput>;
  searchInputRef: RefObject<TextInput>;
  setFocusedInput: (input: string | null) => void;
  handleCollapse: () => void;
  handleAddStop: () => void;
  handleRemoveStop: () => void;
  onPlaceSelected: (details: any) => void;
}

const TopSection: React.FC<TopSectionProps> = ({
  isFocused,
  addStopVisible,
  focusedInput,
  animatedTopSection,
  addStopInputRef,
  searchInputRef,
  setFocusedInput,
  handleCollapse,
  handleAddStop,
  handleRemoveStop,
  onPlaceSelected,
}) => {
  return (
    <Animated.View
      style={[
        styles.topSection,
        {transform: [{translateY: animatedTopSection}]},
      ]}>
      {isFocused && (
        <View style={styles.actionSection}>
          <TouchableOpacity
            style={styles.collapseButton}
            onPress={handleCollapse}>
            <CloseSvg width={30} height={30} />
          </TouchableOpacity>
          <Text style={styles.routeTitle}>Votre Route</Text>
          <TouchableOpacity style={styles.addButton} onPress={handleAddStop}>
            <PlusSvg width={30} height={30} />
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.locationSection}>
        <CircleIcon size={18} />
        <Text style={styles.locationText}>Votre Localisation</Text>
      </View>
      <GooglePlacesInput
        ref={searchInputRef}
        focusedInput={focusedInput}
        setFocusedInput={setFocusedInput}
        onPlaceSelected={onPlaceSelected}
        handleCollapse={handleCollapse}
      />
      {addStopVisible && (
        <View style={styles.addStopContainer}>
          <TextInput
            ref={addStopInputRef}
            style={[
              styles.addStopField,
              focusedInput === 'addStop' && {borderColor: colors.primary},
            ]}
            placeholder="Add a stop"
            onFocus={() => setFocusedInput('addStop')}
            onBlur={() => setFocusedInput(null)}
          />
          <TouchableOpacity
            style={styles.removeStopButton}
            onPress={handleRemoveStop}>
            <CloseSvg width={30} height={30} />
          </TouchableOpacity>
        </View>
      )}
    </Animated.View>
  );
};

export default TopSection;
