import React from 'react';
import styles from '../../styles/SigninStyles/SeparatorStyles';
import {View, Text} from 'react-native';

interface SeparatorProps {
  text: string;
}

const Separator: React.FC<SeparatorProps> = ({text}) => {
  return (
    <View style={styles.separatorContainer}>
      <View style={styles.separator} />
      <Text style={styles.orText}>{text}</Text>
      <View style={styles.separator} />
    </View>
  );
};

export default Separator;
