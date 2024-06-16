import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  TouchableOpacity,
  useWindowDimensions,
  Text,
  StyleSheet,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import Geolocation from '@react-native-community/geolocation';
import styles from '../../styles/HomeScreenStyles/HomeScreenStyles';
import useHomeScreenHooks from '../../hooks/useHomeScreenHooks';
import BottomSection from '../../components/Home/BottomSection';
import TopSection from '../../components/Home/TopSection';
import Sidebar from '../../components/Home/SideBar';
import MapView, {Marker, Polyline} from 'react-native-maps';
import {getGeocodeResult} from '../../utils/geocodeUtils';
import handlePlaceSelected from '../../utils/handlePlaceSelected'; // Import the function
import customMapStyle from '../../components/Maps/customMapStyle';
import DriverSearch from '../../components/Home/DriverSearch';
import LottieView from 'lottie-react-native';
import colors from '../../constants/colors';

export interface Coordinates {
  latitude: number;
  longitude: number;
}

const HomeScreen = () => {
  const initialHeight = useWindowDimensions().height * 0.35;
  const stopFieldHeight = 50;
  const locationSectionHeight = 50;

  const {
    isFocused,
    addStopVisible,
    focusedInput,
    sidebarVisible,
    animatedHeight,
    animatedOpacity,
    animatedTopSection,
    animatedSidebar,
    addStopInputRef,
    searchInputRef,
    panResponder,
    isPanResponderEnabled,
    setFocusedInput,
    handlePress,
    handleCollapse,
    handleAddStop,
    handleRemoveStop,
    toggleSidebar,
  } = useHomeScreenHooks(initialHeight, stopFieldHeight, locationSectionHeight);

  const visitedPlaces = [
    {adresse: '139 Avenue Habib Bourguiba', City: 'La Goulette'},
    {adresse: 'Tunis Carthage Airport (TUN)', City: 'Tunis'},
    {adresse: 'TUNISIA MALL', City: 'Tunis'},
  ];
  const destination = require('../../assets/animations/Destination.json');
  const [currentPosition, setCurrentPosition] = useState<Coordinates | null>(
    null,
  );
  const [geocodeResult, setGeocodeResult] = useState<any | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<Coordinates | null>(
    null,
  );
  const [route, setRoute] = useState<Coordinates[]>([]);
  const [watchId, setWatchId] = useState<number | null>(null);
  const [isDriverSearchVisible, setDriverSearchVisible] =
    useState<boolean>(false);

  const apiKey = 'AIzaSyCs5EWB5w0IQdpb7fKfBjz3BGShIPPY9r0';
  const mapRef = useRef<MapView | null>(null);

  useEffect(() => {
    const id = Geolocation.watchPosition(
      async position => {
        const {latitude, longitude} = position.coords;
        setCurrentPosition({latitude, longitude});
        const result = await getGeocodeResult({latitude, longitude}, apiKey);
        setGeocodeResult(result);

        mapRef.current?.animateToRegion(
          {
            latitude,
            longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          },
          1000,
        );
      },
      error => {
        console.error(error);
      },
      {enableHighAccuracy: true, distanceFilter: 10, interval: 10000},
    );
    setWatchId(id);

    return () => {
      if (watchId !== null) {
        Geolocation.clearWatch(watchId);
      }
    };
  }, []);

  useEffect(() => {
    if (geocodeResult) {
      console.log('Geocode Result:', geocodeResult);
    }
  }, [geocodeResult]);

  return (
    <View style={styles.container}>
      {currentPosition ? (
        <MapView
          ref={mapRef}
          customMapStyle={customMapStyle}
          style={styles.map}
          initialRegion={{
            latitude: currentPosition.latitude,
            longitude: currentPosition.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker coordinate={currentPosition} title="You are here">
            <View style={localStyles.circle} />
          </Marker>
          {selectedLocation && (
            <Marker coordinate={selectedLocation} title="Selected Location">
              <LottieView
                source={destination}
                autoPlay
                loop
                style={localStyles.iconEnd}
              />
            </Marker>
          )}
          {route.length > 0 && (
            <Polyline
              coordinates={route}
              strokeColor="#00796b"
              strokeWidth={5}
            />
          )}
        </MapView>
      ) : (
        <Text>Loading current position...</Text>
      )}
      {geocodeResult && (
        <Text style={styles.cityName}>
          Current City: {geocodeResult.formatted_address}
        </Text>
      )}
      <TopSection
        isFocused={isFocused}
        addStopVisible={addStopVisible}
        focusedInput={focusedInput}
        animatedTopSection={animatedTopSection}
        addStopInputRef={addStopInputRef}
        searchInputRef={searchInputRef}
        setFocusedInput={setFocusedInput}
        handleCollapse={handleCollapse}
        handleAddStop={handleAddStop}
        handleRemoveStop={handleRemoveStop}
        onPlaceSelected={(data: any) =>
          handlePlaceSelected(
            data,
            apiKey,
            setSelectedLocation,
            setRoute,
            setDriverSearchVisible,
            currentPosition,
            mapRef,
          )
        }
      />
      {isDriverSearchVisible ? (
        <DriverSearch
          animatedOpacity={animatedOpacity}
          panHandlers={isPanResponderEnabled ? panResponder.panHandlers : {}}
          visitedPlaces={visitedPlaces}
          setDriverSearchVisible={setDriverSearchVisible}
        />
      ) : (
        <BottomSection
          animatedHeight={animatedHeight}
          animatedOpacity={animatedOpacity}
          panHandlers={isPanResponderEnabled ? panResponder.panHandlers : {}}
          handlePress={handlePress}
          visitedPlaces={visitedPlaces}
        />
      )}
      <TouchableOpacity style={styles.hamburgerButton} onPress={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} size={18} color="#000" />
      </TouchableOpacity>
      <Sidebar
        animatedSidebar={animatedSidebar}
        sidebarVisible={sidebarVisible}
        toggleSidebar={toggleSidebar}
      />
    </View>
  );
};

const localStyles = StyleSheet.create({
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: colors.primary,
    borderColor: 'white',
    borderWidth: 2,
  },
  iconEnd: {width: 50, height: 50},
});

export default HomeScreen;
