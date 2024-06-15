// src/api/googlePlacesAPI.js

const GOOGLE_PLACES_API_KEY = 'AIzaSyCs5EWB5w0IQdpb7fKfBjz3BGShIPPY9r0';

export const googlePlacesConfig = {
  key: GOOGLE_PLACES_API_KEY,
  language: 'fr',
  components: 'country:tn', // Restrict results to Tunisia
};

// Add any utility functions here if needed
export const fetchPlaceDetails = async placeId => {
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${GOOGLE_PLACES_API_KEY}`,
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error fetching place details:', error);
    throw error;
  }
};
