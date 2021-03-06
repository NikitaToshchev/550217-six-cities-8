import { Offer } from '../../types/offer';
import NearPlaceCard from '../near-place-card/near-place-card';

type NearPlacesProprs = {
  nearOffers: Offer[],
}

function NearPlaces({ nearOffers }: NearPlacesProprs): JSX.Element {

  const nearPlaces = nearOffers.map((nearOffer) => (
    <NearPlaceCard
      key={nearOffer.id}
      nearOffer={nearOffer}
    />
  ));

  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          {nearPlaces}
        </div>
      </section>
    </div>
  );
}

export default NearPlaces;
