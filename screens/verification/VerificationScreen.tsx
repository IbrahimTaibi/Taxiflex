import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Platform,
  Dimensions,
} from 'react-native';
import {
  useRoute,
  RouteProp,
  useNavigation,
  NavigationProp,
} from '@react-navigation/native';
import {RootStackParamList} from '../../navigations/AppNavigator';
type VerificationScreenRouteParams = {
  phoneNumber: string;
};

type VerificationScreenProps = RouteProp<
  {params: VerificationScreenRouteParams},
  'params'
>;

const VerificationScreen: React.FC = () => {
  const route = useRoute<VerificationScreenProps>();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const {phoneNumber} = route.params;
  const [code, setCode] = useState(['', '', '', '']);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const [countdown, setCountdown] = useState(30); // Set initial countdown value to 30 seconds
  const inputsRef = useRef<(TextInput | null)[]>([]);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown(prevCountdown => prevCountdown - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [countdown]);

  useEffect(() => {
    // Focus the first input field when the component mounts
    inputsRef.current[0]?.focus();
  }, []);

  useEffect(() => {
    // Check if all fields are filled
    if (code.every(digit => digit !== '')) {
      // Navigate to the home page
      navigation.navigate('Home');
    }
  }, [code, navigation]);

  const handleChange = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < code.length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleResendCode = () => {
    // Logic to resend the code
    setCountdown(30); // Reset the countdown when the code is resent
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter the code</Text>
      <Text style={styles.subtitle}>
        A code was sent to <Text style={styles.phoneNumber}>{phoneNumber}</Text>
      </Text>
      <View style={styles.otpContainer}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            ref={ref => (inputsRef.current[index] = ref)}
            style={[
              styles.otpInput,
              focusedIndex === index
                ? styles.focusedOtpInput
                : styles.defaultOtpInput,
            ]}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={text => handleChange(text, index)}
            onFocus={() => setFocusedIndex(index)}
            onBlur={() => setFocusedIndex(null)}
          />
        ))}
      </View>
      <View style={styles.resendContainer}>
        {countdown > 0 ? (
          <Text style={styles.resendCode}>
            Resend Code in{' '}
            <Text style={styles.counter}>
              {countdown} {countdown === 1 ? 'Second' : 'Seconds'}
            </Text>
          </Text>
        ) : (
          <Text style={styles.resendCode} onPress={handleResendCode}>
            Resend Code
          </Text>
        )}
      </View>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 113 : 113,
    backgroundColor: '#fff',
    paddingHorizontal: windowWidth * 0.05, // Adjust padding to 5% of the screen width
  },
  title: {
    fontSize: 32,
    fontFamily: 'Poppins-SemiBold',
    color: 'black',
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    marginBottom: 20,
  },
  phoneNumber: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 25,
    width: '100%',
  },
  otpInput: {
    width: windowWidth * 0.2, // Adjust width to 20% of the screen width
    height: windowWidth * 0.22, // Adjust height to 22% of the screen width
    borderColor: '#ccc',
    borderWidth: 2,
    borderRadius: 12,
    textAlign: 'center',
    fontSize: windowWidth * 0.08, // Adjust font size to 8% of the screen width
    fontFamily: 'Poppins-Medium',
  },
  defaultOtpInput: {
    backgroundColor: '#f0f0f0',
  },
  focusedOtpInput: {
    backgroundColor: '#ffffff',
    borderColor: '#006d77',
  },
  resendContainer: {
    paddingTop: 20,
  },
  resendCode: {
    fontFamily: 'Poppins-Regular',
  },
  counter: {
    color: '#006d77',
    fontFamily: 'Poppins-SemiBold',
  },
});

export default VerificationScreen;
