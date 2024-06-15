// components/Signin/LoginScreen/MiddleSection.tsx

import React from 'react';
import {View} from 'react-native';
import GoogleSignInButton from '../GoogleSignIn';
import FacebookSignInButton from '../FacebookSignin';
import Separator from '../Separator';
import styles from '../../../styles/SigninStyles/LoginScreenStyles';
import {TEXTS} from '../../../constants/constants';

interface MiddleSectionProps {
  handleGoogleSignIn: () => void;
  handleFacebookSignIn: () => void;
}

const MiddleSection: React.FC<MiddleSectionProps> = ({
  handleGoogleSignIn,
  handleFacebookSignIn,
}) => {
  return (
    <View style={styles.middleSection}>
      <Separator text={TEXTS.separatorText} />
      <GoogleSignInButton onPress={handleGoogleSignIn} />
      <FacebookSignInButton onPress={handleFacebookSignIn} />
    </View>
  );
};

export default MiddleSection;
