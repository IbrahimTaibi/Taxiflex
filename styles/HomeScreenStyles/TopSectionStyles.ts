import colors from '../../constants/colors';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  topSection: {
    position: 'absolute',
    top: 0,
    width: '100%',
    backgroundColor: colors.background,
    zIndex: 1,
    paddingTop: '5%', // Adjust as needed
    paddingBottom: '3%', // Adjust as needed
    paddingHorizontal: '4%', // Adjust as needed
  },
  collapseButton: {
    zIndex: 2,
  },
  addButton: {
    zIndex: 2,
  },
  routeTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: '#000',
  },

  actionSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '4%',
    marginTop: '2%',
  },
  locationSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '8%', // Adjust as needed
    backgroundColor: '#e9ecef',
    height: 40,
    paddingLeft: 10,
    borderRadius: 10,
  },
  locationText: {
    marginLeft: '2%', // Adjust as needed
    fontFamily: 'Lato-Bold',
    fontSize: 16,
    color: '#6c757d',
  },
  searchBar: {
    height: 40,
    borderColor: '#495057',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: '4%', // Adjust as needed
    backgroundColor: '#fff',
    marginTop: 5, // Adjust as needed
  },
  addStopContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5, // Adjust as needed
  },
  addStopField: {
    height: 40,
    borderColor: '#495057',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: '4%', // Adjust as needed
    backgroundColor: '#fff',
    flex: 1,
  },
  removeStopButton: {
    marginLeft: '4%', // Adjust as needed
  },
});

export default styles;
