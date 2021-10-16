import PlaceCard from '../place-card/place-card';
import { Offer } from '../../types/offer';
import { useState } from 'react';


type placeCardListProps = {
  offers: Offer[],
}

function PlaceCardListComponent({ offers }: placeCardListProps): JSX.Element {
  const [, setActiveCard] = useState<Offer | null>(null);
  const handleActiveCard = (offer: Offer | null): void => {
    setActiveCard(offer);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          handleActiveCard={handleActiveCard}
        />),
      )}
    </div>
  );
}

export default PlaceCardListComponent;
