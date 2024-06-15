import React from 'react';
import {View, Text} from 'react-native';
import PhoneNumberInput from '../PhoneNumberInput';
import SignInButton from '../SignInButton';
import styles from '../../../styles/SigninStyles/LoginScreenStyles';
import {TEXTS} from '../../../constants/constants';

interface TopSectionProps {
  phoneNumber: string;
  setPhoneNumber: (number: string) => void;
  handleSignIn: () => void;
}

const TopSection: React.FC<TopSectionProps> = ({
  phoneNumber,
  setPhoneNumber,
  handleSignIn,
}) => {
  return (
    <View style={styles.topSection}>
      <Text style={styles.title}>{TEXTS.title}</Text>
      <PhoneNumberInput value={phoneNumber} onChangeText={setPhoneNumber} />
      <SignInButton title={TEXTS.signInButton} onPress={handleSignIn} />
    </View>
  );
};

export default TopSection;
