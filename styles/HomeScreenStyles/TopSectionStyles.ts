import colors from '../../constants/colors';
import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  topSection: {
    position: 'absolute',
    top: 0,
    width: '100%',
    backgroundColor: colors.background,
    zIndex: 1,
    paddingTop: height * 0.01, // Adjust as needed
    paddingBottom: height * 0.01, // Adjust as needed
    paddingHorizontal: width * 0.04, // Adjust as needed
  },
  collapseButton: {
    zIndex: 2,
  },
  addButton: {
    zIndex: 2,
  },
  routeTitle: {
    fontSize: width * 0.045, // Adjust as needed
    fontFamily: 'Poppins-Bold',
    color: '#000',
  },
  actionSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: width * 0.01, // Adjust as needed
    marginTop: height * 0.02, // Adjust as needed
  },
  locationSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height * 0.01, // Adjust as needed
    backgroundColor: '#e9ecef',
    height: height * 0.05, // Adjust as needed
    paddingLeft: width * 0.025, // Adjust as needed
    borderRadius: 10,
  },
  locationText: {
    marginLeft: width * 0.02, // Adjust as needed
    fontFamily: 'Lato-Bold',
    fontSize: width * 0.04, // Adjust as needed
    color: '#6c757d',
  },
  searchBar: {
    height: height * 0.05, // Adjust as needed
    borderColor: '#495057',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: width * 0.04, // Adjust as needed
    backgroundColor: '#fff',
    marginTop: height * 0.005, // Adjust as needed
  },
  addStopContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height * 0.005, // Adjust as needed
  },
  addStopField: {
    height: height * 0.05, // Adjust as needed
    borderColor: '#495057',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: width * 0.04, // Adjust as needed
    backgroundColor: '#fff',
    flex: 1,
  },
  removeStopButton: {
    marginLeft: width * 0.04, // Adjust as needed
  },
});

export default styles;
