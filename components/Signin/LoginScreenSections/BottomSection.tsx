import React from 'react';
import {View} from 'react-native';
import LegalDisclaimer from '../LegalDisclaimer';
import styles from '../../../styles/SigninStyles/LoginScreenStyles';

const BottomSection: React.FC = () => {
  return (
    <View style={styles.bottomSection}>
      <LegalDisclaimer />
    </View>
  );
};

export default BottomSection;
