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
    height: 5,
    backgroundColor: '#aaa',
    borderRadius: 2.5,
    alignSelf: 'center',
    marginTop: 10,
  },
  button: {
    height: 50,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: '4%',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
    backgroundColor: '#e9ecef',
  },
  iconCircleSearch: {
    width: 40,
    height: 40,
    borderRadius: 23,
    backgroundColor: '#ced4da',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '2%',
  },
  buttonText: {
    fontSize: 18,
    color: '#000',
    fontFamily: 'Poppins-SemiBold',
  },
  placesContainer: {
    padding: 5,
  },
  placeText: {
    fontSize: 16,
    margin: 5,
    fontFamily: 'Lato-Regular',
  },
  placeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  iconBottomBar: {
    width: 30,
    height: 30,
    marginRight: '3%',
  },

  placeTextContainer: {
    flex: 1,
  },
  cityText: {
    marginLeft: 5,
    fontSize: 14,
    color: '#666',
    fontFamily: 'Lato-Light',
  },
  separator: {
    height: 1,
    backgroundColor: '#e9ecef',
    marginVertical: '1%',
  },
});

export default styles;
