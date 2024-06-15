import React, {useState, useEffect, memo} from 'react';
import {
  View,
  TouchableOpacity,
  Animated,
  Text,
  Image,
  Modal,
  TextInput,
  Pressable,
} from 'react-native';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import sideBarStyles from '../../styles/HomeScreenStyles/SideBarStyles';
import styles from '../../styles/HomeScreenStyles/HomeScreenStyles';
import {RootStackParamList} from '../../navigations/AppNavigator'; // Adjust the path to where your types file is located
import {useUser} from '../../contexts/userContext'; // Adjust the path as needed
import Rating from '../Profile/Rating';
const paymentIcon = require('../../assets/icons/pay.png');
const historyIcon = require('../../assets/icons/history.png');
const promotionIcon = require('../../assets/icons/promotion.png');
const faqIcon = require('../../assets/icons/faq.png');
const aboutIcon = require('../../assets/icons/about.png');

type SideMenuItem = {
  title: string;
  icon: any; // Adjust this type based on your actual image import resolution
};

const sideMenu: SideMenuItem[] = [
  {title: 'Payment', icon: paymentIcon},
  {title: 'History', icon: historyIcon},
  {title: 'Promotion', icon: promotionIcon},
  {title: 'FAQ', icon: faqIcon},
  {title: 'About', icon: aboutIcon},
];

interface SidebarProps {
  animatedSidebar: Animated.Value;
  sidebarVisible: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  animatedSidebar,
  sidebarVisible,
  toggleSidebar,
}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const {user} = useUser();

  const [isPromotionModalVisible, setPromotionModalVisible] = useState(false);
  const [promotionCode, setPromotionCode] = useState('');

  const scaleValue = useState(new Animated.Value(0))[0];

  const handleProfilePress = () => {
    navigation.navigate('Profile');
  };

  const handlePromotionPress = () => {
    setPromotionModalVisible(true);
    Animated.spring(scaleValue, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  const handlePromotionSubmit = () => {
    // Handle the promotion code submission logic here
    console.log('Promotion Code:', promotionCode);
    setPromotionModalVisible(false);
  };

  useEffect(() => {
    if (!isPromotionModalVisible) {
      scaleValue.setValue(0);
    }
  }, [isPromotionModalVisible]);

  return (
    <>
      {sidebarVisible && (
        <TouchableOpacity
          style={styles.backdrop}
          onPress={toggleSidebar}
          activeOpacity={0.7}
          accessibilityLabel="Close sidebar"
        />
      )}
      <Animated.View
        style={[styles.sidebar, {transform: [{translateX: animatedSidebar}]}]}>
        <View style={sideBarStyles.profileSection}>
          <TouchableOpacity onPress={handleProfilePress}>
            <View style={sideBarStyles.profileContainer}>
              <Image source={user.image} style={sideBarStyles.profileImage} />
              <View style={sideBarStyles.profileTextContainer}>
                <Text style={[sideBarStyles.profileName]}>{user.name}</Text>
                <Text
                  style={[
                    sideBarStyles.profileEmail,
                    {fontFamily: 'Poppins-Regular'},
                  ]}>
                  Mon Compte
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <Rating />
        </View>
        <View style={sideBarStyles.menuSection}>
          {sideMenu.map((item, index) => (
            <React.Fragment key={index}>
              <TouchableOpacity
                style={sideBarStyles.menuItem}
                activeOpacity={0.7}
                accessibilityLabel={`Navigate to ${item.title}`}
                onPress={
                  item.title === 'Promotion' ? handlePromotionPress : undefined
                }>
                <Image source={item.icon} style={sideBarStyles.menuIcon} />
                <Text
                  style={[
                    sideBarStyles.menuText,
                    {fontFamily: 'Poppins-Regular'},
                  ]}>
                  {item.title}
                </Text>
              </TouchableOpacity>
              {index < sideMenu.length - 1 && (
                <View style={sideBarStyles.separator} />
              )}
            </React.Fragment>
          ))}
        </View>
      </Animated.View>
      <Modal
        visible={isPromotionModalVisible}
        transparent={true}
        animationType="none"
        onRequestClose={() => setPromotionModalVisible(false)}>
        <View style={styles.modalContainer}>
          <Animated.View
            style={[
              styles.modalContent,
              {
                transform: [{scale: scaleValue}],
                opacity: scaleValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1],
                }),
              },
            ]}>
            <Text style={[styles.modalTitle, {fontFamily: 'Poppins-Bold'}]}>
              Enter Promotion Code
            </Text>
            <TextInput
              style={[styles.modalInput, {fontFamily: 'Poppins-Regular'}]}
              placeholder="Promotion Code"
              value={promotionCode}
              onChangeText={setPromotionCode}
            />
            <Pressable style={styles.buttonP} onPress={handlePromotionSubmit}>
              <Text style={[styles.buttonTextP, {fontFamily: 'Poppins-Bold'}]}>
                Submit
              </Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.cancelButton]}
              onPress={() => setPromotionModalVisible(false)}>
              <Text style={[styles.buttonText, {color: '#fff'}]}>Cancel</Text>
            </Pressable>
          </Animated.View>
        </View>
      </Modal>
    </>
  );
};

export default memo(Sidebar);
