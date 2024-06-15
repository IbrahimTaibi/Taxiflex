import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9ecef',
  },
  personalInfoContainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    paddingBottom: 16, // Ensure there's padding at the bottom to avoid overflow
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16,
    zIndex: 1,
  },
  centerContent: {
    marginTop: '20%',
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40, // Use 40 to make it a perfect circle
  },
  name: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    color: colors.text,
    marginTop: 8,
  },
  ratingContainer: {
    marginTop: '1%',
    alignItems: 'center',
  },
  settingSections: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 16, // Use padding instead of percentage for better responsiveness
  },
  portalContainer: {
    width: '100%',
    padding: 12,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 12, // Use a fixed value for better responsiveness
  },
  portalButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
    width: '100%',
  },
  portalText: {
    marginLeft: 16,
    fontSize: 18,
    fontFamily: 'Lato-SemiBold',
    color: colors.text,
    flex: 1,
  },
  portalIcon: {
    width: 24,
    height: 24,
  },
  menuIcon: {
    width: 35,
    height: 35,
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: '#e0e0e0',
    marginVertical: 8,
  },
  PlacesToVisitSections: {
    marginTop: 16, // Use a fixed value for better responsiveness
    marginBottom: 16, // Use a fixed value for better responsiveness
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 16,
    paddingTop: 0, // Use padding instead of percentage for better responsiveness
  },
  portalValue: {
    fontSize: 18,
    fontFamily: 'Lato-SemiBold',
    color: colors.text,
  },
  sectionLabel: {
    fontSize: 22,
    fontFamily: 'Poppins-Bold',
    alignSelf: 'flex-start',
    paddingLeft: 16,
    color: '#000',
    marginBottom: 20,
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
});

export default styles;
