import HeaderComponet from '../header/header';
import SortingComponent from '../sorting/sorting';
import PlaceCardListComponent from '../place-card-list/place-card-list';
import MenuCitiesComponent from '../menu-cities/menu-cities';
import { Offer } from '../../types/offer';
import Map from '../map/map';
import { useState } from 'react';
import { getSortedOffers } from '../../utils/utils';
import { DEFAULT_SORT_TYPE } from '../../const';

type MainScreenProps = {
  offers: Offer[],
  cities: string[],
}

function MainScreen({ cities, offers }: MainScreenProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<Offer | null>(null);
  const [sortType, setSortType] = useState(DEFAULT_SORT_TYPE);

  const [{ city: { name } }] = offers;

  const handleActiveCard = (offer: Offer | null): void => {
    setActiveCard(offer);
  };

  const handleChangeSortType = (type: string) => {
    setSortType(type);
  };

  const sortedOffers = getSortedOffers(sortType, offers);

  const mainclass = offers.length > 0 ? 'page__main page__main--index'
    : 'page__main page__main--index page__main--index-empty';

  const containerClass = offers.length > 0
    ? 'cities__places-container container'
    : 'cities__places-container cities__places-container--empty container';

  return (
    <div className="page page--gray page--main">
      <HeaderComponet />
      <main className={mainclass}>
        <MenuCitiesComponent cities={cities} />
        <div className="cities">
          <div className={containerClass}>
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {name}</b>
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
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
