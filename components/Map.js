import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { useState } from "react";
import getCenter from "geolib/es/getCenter";
import Image from "next/image";

function Map({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({});
  const coordinates = searchResults.map(result => ({
    key: result.long,
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  console.log(selectedLocation);

  return (
    <ReactMapGL
      mapStyle='mapbox://styles/omarouhra99/cks9z5tcia09r17q6kfnvvzer'
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={nextViewport => setViewport(nextViewport)}>
      {searchResults.map(result => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}>
            <div className='relative flex items-center justify-center w-[40px] h-[40px] hover:scale-150 transition duration-200 ease-out'>
              <Image
                className='rounded-xl'
                src={result.img}
                layout='fill'
                objectFit='cover'
              />
            </div>
          </Marker>
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
