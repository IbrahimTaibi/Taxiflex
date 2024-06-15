import React from 'react';
import sideBarStyles from '../../styles/HomeScreenStyles/SideBarStyles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useUser} from '../../contexts/userContext';
import {View, Text} from 'react-native';
import {faStar} from '@fortawesome/free-solid-svg-icons';
function Rating() {
  const {user} = useUser();
  return (
    <View style={sideBarStyles.ratingContainer}>
      <FontAwesomeIcon
        icon={faStar}
        size={22}
        style={sideBarStyles.ratingIcon}
      />
      <Text style={sideBarStyles.ratingText}>
        {user.rating}
        <Text style={sideBarStyles.ratingTextLight}>Rating</Text>
      </Text>
    </View>
  );
}

export default Rating;
