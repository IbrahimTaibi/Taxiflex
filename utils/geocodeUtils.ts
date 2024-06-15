import axios from 'axios';

const GOOGLE_GEOCODING_API_URL =
  'https://maps.googleapis.com/maps/api/geocode/json';

interface Coordinates {
  latitude: number;
  longitude: number;
}

interface GeocodeResult {
  address_components: any[];
  formatted_address: string;
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
    location_type: string;
    viewport: any;
  };
  place_id: string;
  types: string[];
}

export const getGeocodeResult = async (
  coords: Coordinates,
  apiKey: string,
): Promise<GeocodeResult | null> => {
  const {latitude, longitude} = coords;

  try {
    const response = await axios.get(GOOGLE_GEOCODING_API_URL, {
      params: {
        latlng: `${latitude},${longitude}`,
        key: apiKey,
      },
    });

    if (response.data.status === 'OK' && response.data.results.length > 0) {
      return response.data.results[0];
    } else {
      console.error('Geocoding API error:', response.data.status);
      return null;
    }
  } catch (error) {
    console.error('Error fetching geocode result:', error);
    return null;
  }
};
export default getGeocodeResult;
