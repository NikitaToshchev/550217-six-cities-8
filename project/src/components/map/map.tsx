import 'leaflet/dist/leaflet.css';
import leaflet from 'leaflet';
import { useEffect, useRef } from 'react';
import { Offer } from '../../types/offer';
import useMap from '../../hooks/useMap/useMap';

const URL_MARKER_DEFAULT = 'img/pin.svg';
const URL_MARKER_CURRENT = 'img/pin-active.svg';

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [30, 40],
  iconAnchor: [15, 40],
});

const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [30, 40],
  iconAnchor: [15, 40],
});

type MapProps = {
  offers: Offer[];
  activeCard: Offer | null;
}

function Map({ offers, activeCard }: MapProps): JSX.Element {
  const [{ city }] = offers;

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
            icon: (offer === activeCard)
              ? currentCustomIcon
              : defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [activeCard, map, offers]);

  return (
    <div
      style={{ minHeight: '100%', width: '100%' }}
      ref={mapRef}
    >
    </div>
  );


}

export default Map;
