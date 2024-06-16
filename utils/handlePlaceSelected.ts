// utils/handlePlaceSelected.ts

import axios from 'axios';
import fetchRoute from './fetchRoute'; // Adjust the path as necessary
import {Coordinates} from '../screens/Home/HomeScreen'; // Adjust the path as necessary
import MapView from 'react-native-maps';

const handlePlaceSelected = async (
  data: any,
  apiKey: string,
  setSelectedLocation: (location: Coordinates | null) => void,
  setRoute: (route: Coordinates[]) => void,
  setDriverSearchVisible: (visible: boolean) => void,
  currentPosition: Coordinates | null,
  mapRef: React.RefObject<MapView>,
) => {
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
          const walkingRoute = await fetchRoute(
            currentPosition,
            {
              latitude: destination.latitude,
              longitude: destination.longitude,
            },
            apiKey,
            'walking',
          );

          const drivingRoute = await fetchRoute(
            {
              latitude: destination.latitude,
              longitude: destination.longitude,
            },
            destination,
            apiKey,
          );

          const combinedRoute = [...walkingRoute, ...drivingRoute];
          setRoute(combinedRoute);

          setTimeout(() => {
            mapRef.current?.animateToRegion(
              {
                latitude: (currentPosition.latitude + destination.latitude) / 2,
                longitude:
                  (currentPosition.longitude + destination.longitude) / 2,
                latitudeDelta:
                  Math.abs(currentPosition.latitude - destination.latitude) * 2,
                longitudeDelta:
                  Math.abs(currentPosition.longitude - destination.longitude) *
                  2,
              },
              2000,
            );
          }, 500);
        }

        setDriverSearchVisible(true);
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

export default handlePlaceSelected;
