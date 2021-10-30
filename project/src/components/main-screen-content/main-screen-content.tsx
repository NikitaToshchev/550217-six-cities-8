import { Offer } from '../../types/offer';
import PlaceCardListComponent from '../place-card-list/place-card-list';
import SortingComponent from '../sorting/sorting';
import Map from '../map/map';

type MainScreenContentProps = {
  cityName: string,
  offers: Offer[],
  sortType: string,
  sortedOffers: Offer[],
  activeCard: Offer | null,
  handleChangeSortType: (type: string) => void;
  handleActiveCard: (offer: Offer | null) => void;
}

function MainScreenContent({ cityName, offers, sortType, sortedOffers, activeCard, handleActiveCard, handleChangeSortType }: MainScreenContentProps): JSX.Element {

  return (
    <>
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offers.length} places to stay in {cityName}</b>
        <SortingComponent
          handleChangeSortType={handleChangeSortType}
          sortType={sortType}
        />
        <PlaceCardListComponent
          offers={sortedOffers}
          handleActiveCard={handleActiveCard}
        />
      </section>
      <div className="cities__right-section">
        <section className="cities__map map">
          <Map
            offers={offers}
            activeCard={activeCard}
          />
        </section>
      </div>
    </>
  );
}

export default MainScreenContent;
