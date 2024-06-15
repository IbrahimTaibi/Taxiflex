import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const LegalDisclaimer: React.FC = () => {
  return (
    <View style={styles.legalContainer}>
      <Text style={styles.legalText}>
        En vous inscrivant, vous acceptez nos{' '}
        <Text style={styles.linkText}>conditions d'utilisation</Text> et notre{' '}
        <Text style={styles.linkText}>politique de confidentialité</Text>.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  legalContainer: {
    width: '80%', // Less width for the disclaimer
    marginTop: 20,
    paddingHorizontal: 20,
    textAlign: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20,
  },
  legalText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
  linkText: {
    fontWeight: 'bold',
    color: '#016D77', // You can change this color to your preferred link color
    fontFamily: 'Poppins-Regular',
  },
});

export default LegalDisclaimer;
