import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../constants/colors';

const {width, height} = Dimensions.get('window');

const sideBarStyles = StyleSheet.create({
  profileSection: {
    width: '100%',
    backgroundColor: '#fff',
    borderBottomStartRadius: 30,
    borderBottomEndRadius: 30,
    padding: width * 0.04,
    paddingTop: width * 0.1,
    paddingLeft: width * 0.1,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: width * 0.04,
    marginTop: width * 0.04,
  },
  profileImage: {
    width: width * 0.2,
    height: width * 0.2,
    borderRadius: width * 0.1,
    marginRight: width * 0.025,
  },
  profileTextContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  profileName: {
    fontSize: width * 0.04,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: width * 0.0125,
    color: '#000',
  },
  profileEmail: {
    fontSize: width * 0.035,
    fontFamily: 'Poppins-Regular',
    color: colors.primary,
  },
  ratingContainer: {
    marginBottom: width * 0.05,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: width * 0.04,
    fontFamily: 'Poppins-SemiBold',
    color: colors.text,
    marginLeft: width * 0.02,
  },
  ratingTextLight: {
    fontSize: width * 0.04,
    fontFamily: 'Poppins-Light',
    color: colors.text,
  },
  ratingIcon: {
    color: colors.primary,
    marginBottom: width * 0.02,
  },
  menuSection: {
    height: height * 0.78,
    width: '100%',
    marginTop: height * 0.01,
    backgroundColor: '#fff',
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    padding: width * 0.03,
    paddingTop: width * 0.05,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: height * 0.005,
    marginBottom: height * 0.005,
  },
  menuIcon: {
    width: width * 0.08,
    height: width * 0.08,
    marginRight: width * 0.0625,
    marginLeft: width * 0.0375,
  },
  menuText: {
    fontSize: width * 0.04,
    fontFamily: 'Poppins-Regular',
    color: '#495057',
  },
  separator: {
    height: 0.3,
    width: '80%',
    marginVertical: height * 0.005,
  },
});

export default sideBarStyles;
