import colors from '../../constants/colors';
import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  map: {
    width: '100%',
    height: height * 0.7,
    position: 'absolute',
    top: 0,
  },
  cityName: {
    position: 'absolute',
    top: height * 0.01,
    left: '50%',
    transform: [{translateX: -(width * 0.5)}],
    zIndex: 1,
    backgroundColor: 'white',
    padding: width * 0.0125,
    borderRadius: 5,
  },
  hamburgerButton: {
    position: 'absolute',
    top: height * 0.05,
    left: width * 0.05,
    width: width * 0.125,
    height: width * 0.125,
    borderRadius: width * 0.0625,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#495057',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  sidebar: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: width * 0.8,
    backgroundColor: '#e9ecef',
    shadowColor: '#495057',
    shadowOffset: {width: 2, height: 0},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
    zIndex: 1000,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: width * 0.8,
    padding: width * 0.05,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: width * 0.045,
    marginBottom: height * 0.01,
    fontFamily: 'Poppins-Bold',
  },
  modalInput: {
    width: '100%',
    padding: width * 0.025,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: height * 0.0125,
    fontFamily: 'Lato-Regular',
  },
  buttonP: {
    justifyContent: 'center',
    width: '100%',
    backgroundColor: colors.primary,
    borderRadius: 10,
    alignItems: 'center',
    height: height * 0.0625,
  },
  cancelButton: {
    backgroundColor: '#e5383b',
    height: height * 0.0625,
    color: '#fff',
  },
  buttonTextP: {
    color: '#fff',
    fontSize: width * 0.04,
    fontFamily: 'Poppins-Bold',
  },
});

export default styles;
