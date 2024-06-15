import {StyleSheet, Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexGrow: 1,
    justifyContent: 'space-between',
    padding: 12,
    paddingTop: height * 0.25, // Use a fraction of the height for consistent spacing
  },
  topSection: {
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 16, // Ensure some padding for wider screens
  },
  middleSection: {
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 16, // Ensure some padding for wider screens
  },
  bottomSection: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20, // Fixed value for consistent padding
    paddingVertical: 10, // Fixed value for consistent padding
    marginTop: height * 0.1, // Use a fraction of the height for consistent spacing
  },
  title: {
    fontSize: 25,
    color: 'black',
    fontFamily: 'Poppins-Bold',
    marginBottom: 15, // Fixed value for consistent spacing
  },
});

export default styles;
