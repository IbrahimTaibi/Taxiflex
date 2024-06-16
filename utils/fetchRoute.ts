import axios from 'axios';

interface Coordinates {
  latitude: number;
  longitude: number;
}

interface RouteData {
  coordinates: Coordinates[];
  duration: string;
}

const fetchRoute = async (
  origin: Coordinates,
  destination: Coordinates,
  apiKey: string,
  p0: string,
): Promise<RouteData> => {
  const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin.latitude},${origin.longitude}&destination=${destination.latitude},${destination.longitude}&mode=${p0}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    const points = response.data.routes[0].overview_polyline.points;
    const duration = response.data.routes[0].legs[0].duration.text;
    return {coordinates: decodePolyline(points), duration};
  } catch (error) {
    console.error('Error fetching route:', error);
    return {coordinates: [], duration: ''};
  }
};

const decodePolyline = (t: string): Coordinates[] => {
  let points: Coordinates[] = [];
  let index = 0,
    len = t.length;
  let lat = 0,
    lng = 0;

  while (index < len) {
    let b,
      shift = 0,
      result = 0;
    do {
      b = t.charCodeAt(index++) - 63;
      result |= (b & 0x1f) << shift;
      shift += 5;
    } while (b >= 0x20);
    let dlat = result & 1 ? ~(result >> 1) : result >> 1;
    lat += dlat;

    shift = 0;
    result = 0;
    do {
      b = t.charCodeAt(index++) - 63;
      result |= (b & 0x1f) << shift;
      shift += 5;
    } while (b >= 0x20);
    let dlng = result & 1 ? ~(result >> 1) : result >> 1;
    lng += dlng;

    points.push({latitude: lat / 1e5, longitude: lng / 1e5});
  }
  return points;
};

export default fetchRoute;
