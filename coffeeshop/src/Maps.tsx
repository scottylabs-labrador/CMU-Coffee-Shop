import arrow from "./Assets/Arrow Icon.svg";
import { useMemo, useState, useRef } from "react";
import { Map, Marker, ColorScheme } from "mapkit-react";
import "./App.css";
import Card from "./Card";
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

function Maps({
  locations,
  toGuide,
}: {
  locations: Location[] | undefined;
  toGuide: () => void;
}) {
  const [selectedLocationIndex, setSelectedLocationIndex] = useState<number>();
  const [isDrawerVisible, setDrawerVisible] = useState(false);
  const drawerRef = useRef(null);
  const selectedLocation =
    selectedLocationIndex !== undefined
      ? locations?.[selectedLocationIndex]
      : undefined;

  const initialRegion = useMemo(
    () => ({
      centerLatitude: 40.443, // example latitude
      centerLongitude: -79.943, // example longitude
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
              onSelect={() => {
                setSelectedLocationIndex(index);
                setDrawerVisible(true);
              }} //mechanism for action on select
              onDeselect={() => {
                setSelectedLocationIndex(-1);
                setDrawerVisible(false);
              }}
            />
          ))}
        </Map>
      </div>

      <div
        className={`MapDrawer ${isDrawerVisible ? "visible" : ""}`}
        ref={drawerRef}
      >
        {
          <Card
            Name={selectedLocation?.Name ?? ""}
            Occupancy={selectedLocation?.Occupancy ?? -1}
            Noise={selectedLocation?.["Noise Level"] ?? -1}
          />
        }
      </div>

      <div>
        <img src={arrow} onClick={toGuide} className="m-3 arr" alt="" />
      </div>
    </>
  );
}

export default Maps;
