import React, {forwardRef, RefObject} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import styles from '../../styles/HomeScreenStyles/TopSectionStyles';
import colors from '../../constants/colors';
import {googlePlacesConfig} from '../../services/googlePlacesAPI';

interface GooglePlacesInputProps {
  focusedInput: string | null;
  setFocusedInput: (input: string | null) => void;
  onPlaceSelected: (details: any) => void;
  handleCollapse: () => void;
}

const GooglePlacesInput = forwardRef<TextInput, GooglePlacesInputProps>(
  ({focusedInput, setFocusedInput, onPlaceSelected, handleCollapse}, ref) => {
    const renderCustomRow = (data: any) => {
      return (
        <TouchableOpacity
          style={customStyles.resultRow}
          onPress={() => {
            if (data) {
              onPlaceSelected(data);
              handleCollapse();
            }
          }}>
          <Image
            source={require('../../assets/icons/recent.png')}
            style={customStyles.pinIcon}
          />
          <Text style={customStyles.resultText}>{data.description}</Text>
        </TouchableOpacity>
      );
    };

    return (
      <GooglePlacesAutocomplete
        placeholder="Search"
        fetchDetails={true}
        onPress={(data, details = null) => {
          if (details) {
            onPlaceSelected(details);
          } else {
            console.error('Details are null');
          }
          handleCollapse();
        }}
        query={googlePlacesConfig}
        styles={{
          textInput: [
            styles.searchBar,
            focusedInput === 'search' && {borderColor: colors.primary},
          ],
          listView: customStyles.listView,
          row: customStyles.row,
          separator: customStyles.separator,
          poweredContainer: customStyles.hidden, // Hide the "Powered by Google" label
        }}
        textInputProps={{
          ref: ref as RefObject<any>,
          onFocus: () => setFocusedInput('search'),
          onBlur: () => setFocusedInput(null),
        }}
        renderRow={renderCustomRow}
      />
    );
  },
);

const customStyles = StyleSheet.create({
  listView: {
    backgroundColor: 'white',
    borderRadius: 5,
    marginHorizontal: 10,
    marginTop: 10,
    elevation: 5, // for Android
    shadowColor: '#000', // for iOS
    shadowOffset: {width: 0, height: 2}, // for iOS
    shadowOpacity: 0.8, // for iOS
    shadowRadius: 2, // for iOS
  },
  resultRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  resultText: {
    fontSize: 16,
    color: colors.text,
    marginLeft: 10,
  },
  row: {
    backgroundColor: 'white',
  },
  separator: {
    height: 0.5,
    backgroundColor: '#c8c7cc',
  },
  pinIcon: {
    width: 20,
    height: 20,
  },
  hidden: {
    display: 'none',
  },
});

export default GooglePlacesInput;
