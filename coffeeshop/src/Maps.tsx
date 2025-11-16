import coffeecup from './Assets/placeholder.png';
import { useMemo, useState, useEffect } from 'react';
import { Map, Marker, ColorScheme, PointOfInterestCategory } from 'mapkit-react';
import './App.css';
const tkn = "token here";

interface Location {
    Name: string;
    Coordinates: {
        lat: number;
        lng: number;
    };
    Occupancy: number;
    "Noise Level": number;
}

function Maps({ locations }: { locations: Location[] | undefined }) {
    const [selectedLocationIndex, setSelectedLocationIndex] = useState<number>();

    const initialRegion = useMemo(
    () => ({
      centerLatitude: 40.443,      // example latitude
      centerLongitude: -79.943,    // example longitude
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    }),
    []
  );

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Map
        token={tkn}
        colorScheme={ColorScheme.Dark}
        initialRegion={initialRegion}
        showsUserLocationControl
        allowWheelToZoom
      >
        {(locations ?? []).map((location, index) => (
          <Marker
            key={location.Name}
            latitude={location.Coordinates.lat}
            longitude={location.Coordinates.lng}
            glyphText={location.Name.charAt(0)} // single letter for now
            onSelect={() => setSelectedLocationIndex(index)} //mechanism for action on select
            onDeselect={() => {
              if (selectedLocationIndex === index) setSelectedLocationIndex(undefined);
            }}
          />
        ))}
      </Map>
    </div>
  );

}


/*
<div><img src={coffeecup} className="m-3 tlround" alt="coffeecup" /></div>
*/

export default Maps;