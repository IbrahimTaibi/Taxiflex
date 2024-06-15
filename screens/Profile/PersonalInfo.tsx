import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/native';
import {useUser} from '../../contexts/userContext';
import styles from '../../styles/Profile/PersonalInfoStyles';
import Rating from '../../components/Profile/Rating';

const icons = {
  email: require('../../assets/icons/email.png'),
  phone: require('../../assets/icons/phone.png'),
};

const PersonalInfo = () => {
  const {user} = useUser();
  const navigation = useNavigation();

  const renderInfoItem = (
    icon: ImageSourcePropType | React.ReactNode,
    label: string,
    value: string,
  ) => (
    <View style={styles.infoItem}>
      {React.isValidElement(icon) ? (
        icon
      ) : (
        <Image source={icon as ImageSourcePropType} style={styles.infoIcon} />
      )}
      <View style={styles.infoTextContainer}>
        <Text style={styles.infoLabel}>{label}</Text>
        <Text style={styles.infoValue}>{value}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <FontAwesomeIcon icon={faArrowLeft} size={24} color="#000" />
      </TouchableOpacity>
      <View style={styles.personalInfoContainer}>
        <View style={styles.centerContent}>
          <Image source={user.image} style={styles.profileImage} />
          <Text style={styles.name}>{user.name}</Text>
        </View>
        <Text style={styles.header}>Informations Personnelle :</Text>
        <View style={styles.infoSection}>
          {renderInfoItem(icons.email, 'Email :', user.email)}
          {renderInfoItem(icons.phone, 'Phone Number :', `+216 ${user.phone}`)}
        </View>
        <View style={{paddingTop: 40}}>
          <Rating />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PersonalInfo;
