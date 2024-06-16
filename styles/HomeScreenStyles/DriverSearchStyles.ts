import colors from '../../constants/colors';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  bottomSection: {
    width: '100%',
    backgroundColor: colors.background,
    paddingHorizontal: '4%',
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
    marginTop: 50,
    width: 200,
    height: 200, // Adjusted for Lottie animation
  },
  searchText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 22,
    color: '#000',
  },
  searchLineContainer: {
    width: 300, // Match this with the translateX value
    height: 8,
    overflow: 'hidden',
    backgroundColor: '#E0E0E0', // Optional: background color for container
    borderRadius: 2.5,
    marginVertical: 20,
  },
  searchLine: {
    width: 100, // Width of the scanning line
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: 2.5,
  },
});

export default styles;
