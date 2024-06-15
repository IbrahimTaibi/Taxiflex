import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Image, View} from 'react-native';
import {TEXTS} from '../../constants/constants';

const facebookIcon = require('../../assets/icons/facebookIcon.png');

interface FacebookSignInButtonProps {
  onPress: () => void;
}

const FacebookSignInButton: React.FC<FacebookSignInButtonProps> = ({
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image source={facebookIcon} style={styles.logo} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{TEXTS.facebookButtonText}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    height: 50,
    borderRadius: 25,
    width: '90%',
    justifyContent: 'flex-start',
    marginVertical: 10,
    position: 'relative',
    borderColor: '#000',
    borderWidth: 1,
  },
  logo: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
});

export default FacebookSignInButton;
