import {useState, useEffect} from 'react';
import {Keyboard, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Geolocation from '@react-native-community/geolocation';

interface UseLoginScreenReturn {
  phoneNumber: string;
  setPhoneNumber: (phoneNumber: string) => void;
  isKeyboardVisible: boolean;
  handleSignIn: () => void;
  handleGoogleSignIn: (userInfo: any) => void;
  handleFacebookSignIn: () => void;
  getLocation: () => void;
}

const useLoginScreen = (): UseLoginScreenReturn => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [isKeyboardVisible, setKeyboardVisible] = useState<boolean>(false);
  const navigation = useNavigation();

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const handleSignIn = () => {
    console.log('Phone Number:', phoneNumber);
    navigation.navigate('Verification', {phoneNumber}); // Passing phoneNumber as a parameter
  };

  const handleGoogleSignIn = (userInfo: any) => {
    console.log('Google Sign-In Pressed', userInfo);
  };

  const handleFacebookSignIn = () => {
    console.log('Facebook Sign-In Pressed');
  };

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        console.log('User location:', position);
        Alert.alert(
          'Location',
          `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`,
        );
      },
      error => {
        console.error('Error getting location', error);
        Alert.alert(
          'Error',
          'Could not get location. Make sure location services are enabled.',
        );
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  return {
    phoneNumber,
    setPhoneNumber,
    isKeyboardVisible,
    handleSignIn,
    handleGoogleSignIn,
    handleFacebookSignIn,
    getLocation,
  };
};

export default useLoginScreen;
