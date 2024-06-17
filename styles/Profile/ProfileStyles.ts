import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../constants/colors';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9ecef',
  },
  personalInfoContainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingBottom: height * 0.01, // Ensure there's padding at the bottom to avoid overflow
  },
  backButton: {
    position: 'absolute',
    top: height * 0.015,
    left: width * 0.03,
    zIndex: 1,
  },
  centerContent: {
    marginTop: '15%',
    alignItems: 'center',
  },
  profileImage: {
    width: width * 0.15,
    height: width * 0.15,
    borderRadius: (width * 0.15) / 2, // Use width to make it a perfect circle
  },
  name: {
    fontSize: width * 0.05,
    fontFamily: 'Poppins-Bold',
    color: colors.text,
    marginTop: height * 0.005,
  },
  ratingContainer: {
    marginTop: height * 0.01,
    alignItems: 'center',
  },
  settingSections: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: width * 0.03, // Use padding instead of percentage for better responsiveness
  },
  portalContainer: {
    width: '100%',
    padding: width * 0.02,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: height * 0.01, // Use a fixed value for better responsiveness
  },
  portalButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: height * 0.007,
    paddingHorizontal: width * 0.03,
    width: '100%',
  },
  portalText: {
    marginLeft: width * 0.03,
    fontSize: width * 0.04,
    fontFamily: 'Lato-SemiBold',
    color: colors.text,
    flex: 1,
  },
  portalIcon: {
    width: width * 0.05,
    height: width * 0.05,
  },
  menuIcon: {
    width: width * 0.08,
    height: width * 0.08,
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: '#e0e0e0',
    marginVertical: height * 0.008,
  },
  PlacesToVisitSections: {
    marginTop: height * 0.015, // Use a fixed value for better responsiveness
    marginBottom: height * 0.015, // Use a fixed value for better responsiveness
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: width * 0.03,
    paddingTop: 0, // Use padding instead of percentage for better responsiveness
  },
  portalValue: {
    fontSize: width * 0.04,
    fontFamily: 'Lato-SemiBold',
    color: colors.text,
  },
  sectionLabel: {
    fontSize: width * 0.05,
    fontFamily: 'Poppins-Bold',
    alignSelf: 'flex-start',
    paddingLeft: width * 0.03,
    color: '#000',
    marginBottom: height * 0.02,
  },
  scrollViewContent: {
    paddingBottom: height * 0.02,
  },
});

export default styles;
