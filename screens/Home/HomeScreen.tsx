import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  TouchableOpacity,
  useWindowDimensions,
  Text,
  Image,
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
import fetchRoute from '../../utils/fetchRoute'; // Import the fetchRoute function
import axios from 'axios'; // Import axios
import customMapStyle from '../../components/Maps/customMapStyle';
import DriverSearch from '../../components/Home/DriverSearch';
import LottieView from 'lottie-react-native';

interface Coordinates {
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
  const startLocation = require('../../assets/animations/Start.json');
  const [currentPosition, setCurrentPosition] = useState<Coordinates | null>(
    null,
  );
  const [geocodeResult, setGeocodeResult] = useState<any | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<Coordinates | null>(
    null,
  );
  const [route, setRoute] = useState<Coordinates[]>([]);

  const apiKey = 'AIzaSyCs5EWB5w0IQdpb7fKfBjz3BGShIPPY9r0';
  const mapRef = useRef<MapView | null>(null); // Reference to MapView

  useEffect(() => {
    Geolocation.getCurrentPosition(
      async position => {
        const {latitude, longitude} = position.coords;
        setCurrentPosition({latitude, longitude});
        const result = await getGeocodeResult({latitude, longitude}, apiKey);
        setGeocodeResult(result);
      },
      error => {
        console.error(error);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  }, []);

  useEffect(() => {
    if (geocodeResult) {
      console.log('Geocode Result:', geocodeResult);
    }
  }, [geocodeResult]);

  const handlePlaceSelected = async (data: any) => {
    if (data.place_id) {
      try {
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${data.place_id}&key=${apiKey}`,
        );

        const details = response.data.result;
        if (details.geometry && details.geometry.location) {
          const {lat, lng} = details.geometry.location;
          const destination = {
            latitude: lat,
            longitude: lng,
          };
          setSelectedLocation(destination);
          if (currentPosition) {
            const route = await fetchRoute(
              currentPosition,
              destination,
              apiKey,
            );
            setRoute(route);

            // Adjust the map view to fit both current position and selected location
            setTimeout(() => {
              mapRef.current?.animateToRegion(
                {
                  latitude:
                    (currentPosition.latitude + destination.latitude) / 2,
                  longitude:
                    (currentPosition.longitude + destination.longitude) / 2,
                  latitudeDelta:
                    Math.abs(currentPosition.latitude - destination.latitude) *
                    2,
                  longitudeDelta:
                    Math.abs(
                      currentPosition.longitude - destination.longitude,
                    ) * 2,
                },
                2000, // Duration in milliseconds
              );
            }, 500); // Delay to ensure smooth transition
          }
        } else {
          console.error('Invalid location details:', details);
        }
      } catch (error) {
        console.error('Error fetching place details:', error);
      }
    } else {
      console.error('Invalid location details:', data);
    }
  };

  return (
    <View style={styles.container}>
      {currentPosition ? (
        <MapView
          ref={mapRef} // Attach the ref to MapView
          customMapStyle={customMapStyle}
          style={styles.map}
          initialRegion={{
            latitude: currentPosition.latitude,
            longitude: currentPosition.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker coordinate={currentPosition} title="You are here">
            <LottieView
              source={startLocation}
              autoPlay
              loop
              style={localStyles.iconStart}
            />
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
              strokeWidth={6}
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
        onPlaceSelected={handlePlaceSelected} // Pass the handlePlaceSelected function to TopSection
      />
      <BottomSection
        animatedHeight={animatedHeight}
        animatedOpacity={animatedOpacity}
        panHandlers={isPanResponderEnabled ? panResponder.panHandlers : {}}
        handlePress={handlePress}
        visitedPlaces={visitedPlaces}
      />
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
  iconStart: {
    width: 50,
    height: 50, // Adjusted for Lottie animation
  },
  iconEnd: {width: 50, height: 50},
});

export default HomeScreen;