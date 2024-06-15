import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Image,
  TextInputProps,
} from 'react-native';

interface PhoneNumberInputProps extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
}

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({
  value,
  onChangeText,
  ...props
}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/icons/flagTn.jpg')} // Make sure the path is correct
        style={styles.flag}
      />
      <Text style={styles.countryCode}>+216</Text>
      <View style={styles.separator} />
      <TextInput
        style={styles.input}
        placeholder="Entrer Votre Numero"
        keyboardType="phone-pad"
        value={value}
        onChangeText={onChangeText}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 2,
    borderRadius: 25,
    marginBottom: 10,
    paddingHorizontal: 8,
    width: '90%',
    backgroundColor: '#fff',
    height: 50,
  },
  flag: {
    width: 30, // Adjust the width to make it rectangular
    height: 20, // Adjust the height to make it rectangular
    borderRadius: 5, // Adjust the borderRadius to your preference
    marginRight: 8,
    marginHorizontal: 10,
  },
  countryCode: {
    marginRight: 8,
    fontSize: 16,
  },
  separator: {
    height: '60%',
    width: 2,
    backgroundColor: '#',
    marginHorizontal: 8,
  },
  input: {
    flex: 1,
    height: '100%',
  },
});

export default PhoneNumberInput;
