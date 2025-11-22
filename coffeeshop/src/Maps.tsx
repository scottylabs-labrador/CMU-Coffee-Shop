import coffeecup from './Assets/placeholder.png';
import { useMemo, useState, useEffect } from 'react';
import { Map, Marker, ColorScheme, PointOfInterestCategory } from 'mapkit-react';
import './App.css';
const tkn = "eyJraWQiOiJUWVdLTjJYOFNVIiwidHlwIjoiSldUIiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiI0WTM5Rk1BODM4IiwiaWF0IjoxNzYzMjQyNTAyLCJleHAiOjE3NjM4ODQ3OTl9.yjiP3_D93HLY5GlqWfPQ2NUuK2ivYSqVeuuaR3N3pqTldkrD__oCr1gqFn3ddsMHb17lGSoY-AjCNK3nUwz0HA";

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
    <>
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

    <div className="MapDrawer">
    </div>

    </>
  );

}


/*
<div><img src={coffeecup} className="m-3 tlround" alt="coffeecup" /></div>
*/

export default Maps;