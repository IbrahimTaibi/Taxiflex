import colors from '../../constants/colors';
import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  bottomSection: {
    width: '100%',
    backgroundColor: colors.background,
    paddingHorizontal: width * 0.05,
    position: 'absolute',
    bottom: 0,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },
  searchContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginTop: height * 0.05,
    width: width * 0.5,
    height: width * 0.5, // Adjusted for Lottie animation
  },
  searchText: {
    fontFamily: 'Poppins-Bold',
    fontSize: width * 0.055,
    color: '#000',
  },
  searchLineContainer: {
    width: width * 0.75, // Match this with the translateX value
    height: height * 0.01,
    overflow: 'hidden',
    backgroundColor: '#E0E0E0', // Optional: background color for container
    borderRadius: 2.5,
    marginVertical: height * 0.025,
  },
  searchLine: {
    width: width * 0.25, // Width of the scanning line
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: 2.5,
  },
  cancelButton: {
    paddingVertical: height * 0.0125,
    paddingHorizontal: width * 0.05,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: 'red',
    fontSize: width * 0.04,
    fontFamily: 'Lato-SemiBold',
    marginBottom: height * 0.01875,
  },
});

export default styles;
