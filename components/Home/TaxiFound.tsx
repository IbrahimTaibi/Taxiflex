import React from 'react';
import {View, Image, Animated, Text, StyleSheet} from 'react-native';
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

const localStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: '100%',
  },
  arrivalText: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    color: '#000',
    marginBottom: 10,
  },
  vehicleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
  vehicleText: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    marginHorizontal: 10,
    color: colors.text,
  },
  action: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 10,
  },
  vehicleNumber: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: '#000',
    marginHorizontal: 10,
    paddingHorizontal: 10,
    backgroundColor: '#e3e3e3',
    borderRadius: 10,
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
    paddingTop: 10,
  },
  imageContainer: {
    alignItems: 'center',
  },
  chatContainer: {
    alignItems: 'center',
  },
  nameText: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    marginTop: 10,
    color: colors.text,
  },
  chatText: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    marginTop: 10,
    color: colors.text, // assuming you have a primary color defined in colors
  },
  img: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginHorizontal: 10,
  },
  chatImg: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginHorizontal: 10,
    backgroundColor: '#e3e3e3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomSection: {
    width: '100%',
    backgroundColor: colors.background,
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 0,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    alignItems: 'center',
    paddingVertical: 20,
  },
});

export default Taxifound;
