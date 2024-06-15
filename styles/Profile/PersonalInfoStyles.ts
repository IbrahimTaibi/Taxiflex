import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9ecef',
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16,
    zIndex: 1,
  },
  personalInfoContainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    alignItems: 'center',
    paddingVertical: 24,
  },
  centerContent: {
    marginTop: 40, // Use a fixed value for consistency
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 26,
    fontFamily: 'Poppins-Bold',
    color: colors.text,
    marginTop: 16, // Use a fixed value for consistency
  },
  header: {
    marginTop: 60, // Use a fixed value for consistency
    fontSize: 22,
    fontFamily: 'Poppins-Bold',
    color: colors.text,
    marginVertical: 16,
    alignSelf: 'flex-start',
    paddingHorizontal: 16, // Use a fixed value for consistency
  },
  infoSection: {
    width: '100%',
    paddingHorizontal: 16, // Use a fixed value for consistency
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  infoIcon: {
    width: 28,
    height: 28,
  },
  infoTextContainer: {
    margin: 10,
    marginLeft: 20,
    flex: 1,
  },
  infoLabel: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: colors.text,
  },
  infoValue: {
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    color: colors.text,
  },
});

export default styles;
