import colors from '../../constants/colors';
import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  bottomSection: {
    width: '100%',
    backgroundColor: colors.background,
    paddingHorizontal: width * 0.04,
    position: 'absolute',
    bottom: 0,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
  swipeLine: {
    width: '15%',
    height: height * 0.005,
    backgroundColor: '#aaa',
    borderRadius: 2.5,
    alignSelf: 'center',
    marginTop: height * 0.01,
  },
  button: {
    height: height * 0.06,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: height * 0.04,
    paddingHorizontal: width * 0.025,
    paddingVertical: height * 0.005,
    borderRadius: 10,
    backgroundColor: '#e9ecef',
  },
  iconCircleSearch: {
    width: width * 0.1,
    height: width * 0.1,
    borderRadius: width * 0.115,
    backgroundColor: '#ced4da',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: width * 0.02,
  },
  buttonText: {
    fontSize: width * 0.045,
    color: '#000',
    fontFamily: 'Poppins-SemiBold',
  },
  placesContainer: {
    padding: width * 0.0125,
  },
  placeText: {
    fontSize: width * 0.04,
    margin: width * 0.0125,
    fontFamily: 'Lato-Regular',
  },
  placeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: height * 0.0125,
  },
  iconBottomBar: {
    width: width * 0.075,
    height: width * 0.075,
    marginRight: width * 0.03,
  },
  placeTextContainer: {
    flex: 1,
  },
  cityText: {
    marginLeft: width * 0.0125,
    fontSize: width * 0.035,
    color: '#666',
    fontFamily: 'Lato-Light',
  },
  separator: {
    height: 1,
    backgroundColor: '#e9ecef',
    marginVertical: height * 0.01,
  },
});

export default styles;
