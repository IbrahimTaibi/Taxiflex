import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const sideBarStyles = StyleSheet.create({
  profileSection: {
    height: '22%',
    width: '100%',
    backgroundColor: '#fff',
    borderBottomStartRadius: 30,
    borderBottomEndRadius: 30,
    padding: 16, // Use fixed value for consistency
    paddingTop: 40, // Use fixed value for consistency
    paddingLeft: 40, // Use fixed value for consistency
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20, // Use fixed value for consistency
    marginTop: 20, // Use fixed value for consistency
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 10, // Use fixed value for consistency
  },
  profileTextContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  profileName: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 5, // Use fixed value for consistency
    color: '#000',
  },
  profileEmail: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: colors.primary,
  },
  ratingContainer: {
    marginBottom: 20, // Use fixed value for consistency
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: colors.text,
    marginLeft: 8, // Use fixed value for consistency
  },
  ratingTextLight: {
    fontSize: 18,
    fontFamily: 'Poppins-Light',
    color: colors.text,
  },
  ratingIcon: {
    color: colors.primary,
    marginBottom: 8, // Use fixed value for consistency
  },
  menuSection: {
    height: '78%',
    width: '100%',
    marginTop: 4, // Use fixed value for consistency
    backgroundColor: '#fff',
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    padding: 16, // Use fixed value for consistency
    paddingTop: 40, // Use fixed value for consistency
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8, // Use fixed value for consistency
    marginBottom: 8, // Use fixed value for consistency
  },
  menuIcon: {
    width: 35,
    height: 35,
    marginRight: 25, // Use fixed value for consistency
    marginLeft: 15, // Use fixed value for consistency
  },
  menuText: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    color: '#495057',
  },
  separator: {
    height: 0.3,
    width: '80%',
    marginVertical: 2, // Use fixed value for consistency
  },
});

export default sideBarStyles;
