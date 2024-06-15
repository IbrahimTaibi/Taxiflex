import React from 'react';
import MapView, {
  Marker,
  Polyline,
  Region,
  MapViewProps,
} from 'react-native-maps';
import {View, Text} from 'react-native';
import customMapStyle from './customMapStyle';

interface Coordinates {
  latitude: number;
  longitude: number;
}

interface MapComponentProps extends MapViewProps {
  mapRef: React.RefObject<MapView>;
  routeCoordinates: Coordinates[];
  initialRegion: Region;
}

const MapComponent: React.FC<MapComponentProps> = ({
  mapRef,
  routeCoordinates,
  initialRegion,
  ...props
}) => {
  const [mapReady, setMapReady] = React.useState(false);

  return (
    <View style={{flex: 1}}>
      <MapView
        ref={mapRef}
        provider={'google'}
        style={{flex: 1}}
        initialRegion={initialRegion}
        customMapStyle={customMapStyle}
        onMapReady={() => {
          console.log('Map is ready');
          setMapReady(true);
        }}
        {...props}>
        <Marker
          coordinate={{latitude: 36.8065, longitude: 10.1815}}
          title={'Le Kram'}
          description={'This is a marker in Le Kram, Tunis, Tunisia'}
        />
        <Marker
          coordinate={{latitude: 36.8175, longitude: 10.3052}}
          title={'La Goulette'}
          description={'This is a marker in La Goulette, Tunis, Tunisia'}
        />
        {routeCoordinates.length > 0 && (
          <Polyline
            coordinates={routeCoordinates}
            strokeColor="#00FF00"
            strokeWidth={6}
          />
        )}
      </MapView>
      {!mapReady && <Text>Loading map...</Text>}
    </View>
  );
};

export default MapComponent;
