import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import useLoginScreen from '../../hooks/useLoginScreen';
import TopSection from '../../components/Signin/LoginScreenSections/TopSection';
import MiddleSection from '../../components/Signin/LoginScreenSections/MiddleSection';
import BottomSection from '../../components/Signin/LoginScreenSections/BottomSection';
import styles from '../../styles/SigninStyles/LoginScreenStyles';

const LoginScreen: React.FC = () => {
  const {
    phoneNumber,
    setPhoneNumber,
    isKeyboardVisible,
    handleSignIn,
    handleGoogleSignIn,
    handleFacebookSignIn,
  } = useLoginScreen();

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      enableOnAndroid={true}
      extraScrollHeight={20}
      keyboardShouldPersistTaps="handled">
      <TopSection
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
        handleSignIn={handleSignIn}
      />
      <MiddleSection
        handleGoogleSignIn={handleGoogleSignIn}
        handleFacebookSignIn={handleFacebookSignIn}
      />
      {!isKeyboardVisible && <BottomSection />}
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;
