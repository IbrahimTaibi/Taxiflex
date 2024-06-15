import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
  ScrollView,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../navigations/AppNavigator'; // Adjust the path to where your types file is located
import {useUser} from '../../contexts/userContext';
import Rating from '../../components/Profile/Rating';
import styles from '../../styles/Profile/ProfileStyles';

const icons = {
  portal: require('../../assets/icons/portal.png'),
  home: require('../../assets/icons/home.png'),
  work: require('../../assets/icons/work.png'),
  security: require('../../assets/icons/security.png'),
  user: require('../../assets/icons/user.png'),
  address: require('../../assets/icons/adress.png'),
  logout: require('../../assets/icons/logout.png'),
  delete: require('../../assets/icons/deleteaccount.png'),
};

const sections = [
  {icon: icons.user, text: 'Personal info', screen: 'PersonalInfo'},
  {icon: icons.security, text: 'Login & Security'},
];

const addresses = [
  {icon: icons.home, text: "Ajouter l'adresse de maison"},
  {icon: icons.work, text: "Ajouter l'adresse du travail"},
  {icon: icons.address, text: 'Ajouter une adresse'},
];

const settings = [
  {icon: icons.logout, text: 'Se deconnécter'},
  {icon: icons.delete, text: 'Supprimer le compte'},
];

const Profile: React.FC = () => {
  const {user} = useUser();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const renderPortalButton = (
    icon: ImageSourcePropType | React.ReactNode,
    text: string,
    screen?: string,
  ) => (
    <TouchableOpacity
      style={styles.portalButton}
      onPress={() => {
        if (screen) {
          navigation.navigate('PersonalInfo');
        }
      }}>
      {React.isValidElement(icon) ? (
        icon
      ) : (
        <Image source={icon as ImageSourcePropType} style={styles.menuIcon} />
      )}
      <Text style={styles.portalText}>{text}</Text>
      <Image source={icons.portal} style={styles.portalIcon} />
    </TouchableOpacity>
  );

  const renderSection = (
    data: {
      icon: ImageSourcePropType | React.ReactNode;
      text: string;
      screen?: string;
    }[],
    label?: string,
  ) => (
    <View style={styles.portalContainer}>
      {label && <Text style={styles.sectionLabel}>{label}</Text>}
      {data.map((item, index) => (
        <React.Fragment key={index}>
          {renderPortalButton(item.icon, item.text, item.screen)}
          {index < data.length - 1 && <View style={styles.divider} />}
        </React.Fragment>
      ))}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <FontAwesomeIcon icon={faArrowLeft} size={24} color="#000" />
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.personalInfoContainer}>
          <View style={styles.centerContent}>
            <Image source={user.image} style={styles.profileImage} />
            <Text style={styles.name}>{user.name}</Text>
            <View style={styles.ratingContainer}>
              <Rating />
            </View>
          </View>
          {renderSection(sections)}
        </View>
        <View style={styles.PlacesToVisitSections}>
          {renderSection(addresses, 'Ajouter une adresse')}
        </View>
        <View style={styles.settingSections}>{renderSection(settings)}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
