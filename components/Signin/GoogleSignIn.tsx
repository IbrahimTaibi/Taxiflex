// components/Signin/GoogleSignInButton.tsx
import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Image, View} from 'react-native';
import {TEXTS} from '../../constants/constants';

// Ensure the path to the image is correct based on your project structure
const googleIcon = require('../../assets/icons/googleIcon.png');

interface GoogleSignInButtonProps {
  onPress: () => void;
}

const GoogleSignInButton: React.FC<GoogleSignInButtonProps> = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image source={googleIcon} style={styles.logo} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{TEXTS.googleButtonText}</Text>
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

export default GoogleSignInButton;
