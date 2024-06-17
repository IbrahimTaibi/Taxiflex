import React from 'react';
import {
  View,
  Image,
  Animated,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Chat from '../../assets/icons/chat.svg';
import colors from '../../constants/colors';

// Replace this with the path to your image file
const TaxiDriver = require('../../assets/images/Taxi-driver.jpg');

type BottomSectionProps = {
  animatedHeight: Animated.Value;
};

const Taxifound: React.FC<BottomSectionProps> = ({animatedHeight}) => {
  return (
    <Animated.View
      style={[localStyles.bottomSection, {height: animatedHeight}]}>
      <View style={localStyles.container}>
        <Text style={localStyles.arrivalText}>Arriving in 4 minutes</Text>
        <View style={localStyles.vehicleContainer}>
          <Text style={localStyles.vehicleText}>Peugeot 301</Text>
          <Text style={localStyles.vehicleNumber}>213TU5342</Text>
        </View>
        <View style={localStyles.separator} />
        <View style={localStyles.driverContainer}>
          <View style={localStyles.action}>
            <View style={localStyles.imageContainer}>
              <Image style={localStyles.img} source={TaxiDriver} />
              <Text style={localStyles.nameText}>Ahmed S</Text>
            </View>
            <View style={localStyles.chatContainer}>
              <View style={localStyles.chatImg}>
                <Chat width={50} height={50} />
              </View>
              <Text style={localStyles.chatText}>Chat</Text>
            </View>
          </View>
        </View>
      </View>
    </Animated.View>
  );
};
const {width, height} = Dimensions.get('window');

const localStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  arrivalText: {
    fontSize: height * 0.025,
    fontFamily: 'Poppins-Bold',
    color: '#000',
    marginBottom: height * 0.01,
  },
  vehicleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: height * 0.03,
  },
  vehicleText: {
    fontSize: height * 0.017,
    fontFamily: 'Poppins-Regular',
    marginHorizontal: width * 0.01,
    color: colors.text,
  },
  action: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: height * 0.015,
  },
  vehicleNumber: {
    fontSize: height * 0.017,
    fontFamily: 'Poppins-SemiBold',
    color: '#000',
    marginHorizontal: width * 0.01,
    paddingHorizontal: height * 0.01,
    backgroundColor: '#e3e3e3',
    borderRadius: 5,
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#000',
  },
  driverContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingTop: height * 0.01,
  },
  imageContainer: {
    alignItems: 'center',
  },
  chatContainer: {
    alignItems: 'center',
  },
  nameText: {
    fontSize: width * 0.04,
    fontFamily: 'Poppins-Bold',
    marginTop: height * 0.01,
    color: colors.text,
  },
  chatText: {
    fontSize: width * 0.04,
    fontFamily: 'Poppins-Bold',
    marginTop: height * 0.01,
    color: colors.text, // assuming you have a primary color defined in colors
  },
  img: {
    height: height * 0.1,
    width: height * 0.1,
    borderRadius: (height * 0.1) / 2,
    marginHorizontal: height * 0.1,
  },
  chatImg: {
    height: height * 0.1,
    width: height * 0.1,
    borderRadius: (height * 0.1) / 2,
    marginHorizontal: height * 0.1,
    backgroundColor: '#e3e3e3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomSection: {
    width: '100%',
    backgroundColor: colors.background,
    paddingHorizontal: width * 0.1,
    position: 'absolute',
    bottom: 0,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    alignItems: 'center',
    paddingVertical: height * 0.02,
  },
});

export default Taxifound;
