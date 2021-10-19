import 'leaflet/dist/leaflet.css';
import leaflet from 'leaflet';
import { useEffect, useRef } from 'react';
import { Offer } from '../../types/offer';
import useMap from '../../hooks/useMap/useMap';

const URL_MARKER_DEFAULT = 'img/pin.svg';
// const URL_MARKER_CURRENT = 'img/pin.svg';

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [30, 40],
  iconAnchor: [15, 40],
});

// const currentCustomIcon = leaflet.icon({
//   iconUrl: URL_MARKER_CURRENT,
//   iconSize: [30, 40],
//   iconAnchor: [15, 40],
// });

type MapProps = {
  offers: Offer[];
}

function Map({ offers }: MapProps): JSX.Element {
  const { city } = offers[0];

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {
            icon: defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, offers]);

  return (
    <div
      style={{ minHeight: '100%' }}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;
