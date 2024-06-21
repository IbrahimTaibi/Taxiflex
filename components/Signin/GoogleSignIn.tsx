import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Image, View} from 'react-native';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {TEXTS} from '../../constants/constants';

// Ensure the path to the image is correct based on your project structure
const googleIcon = require('../../assets/icons/googleIcon.png');

interface GoogleSignInButtonProps {
  onPress: (userInfo: any) => void; // Update the type as necessary
}

const GoogleSignInButton: React.FC<GoogleSignInButtonProps> = ({onPress}) => {
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });
      GoogleSignin.configure();

      const userInfo = await GoogleSignin.signIn();
      const userToken = await GoogleSignin.getTokens();
      console.log(userToken);
      onPress(userInfo);
    } catch (error: unknown) {
      if (error instanceof Error) {
        if (error.message === statusCodes.SIGN_IN_CANCELLED) {
          // user cancelled the login flow
        } else if (error.message === statusCodes.IN_PROGRESS) {
          // operation (e.g. sign in) is in progress already
        } else if (error.message === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          console.log('PLAY_SERVICES_NOT_AVAILABLE');
        } else {
          // some other error happened
          console.error(error.message);
        }
      } else {
        console.error('Unknown error', error);
      }
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={signIn}>
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
