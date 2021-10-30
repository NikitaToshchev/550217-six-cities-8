import HeaderComponet from '../header/header';
import MenuCitiesComponent from '../menu-cities/menu-cities';
import { Offer } from '../../types/offer';
import { useState } from 'react';
import { getSortedOffers } from '../../utils/utils';
import { DEFAULT_SORT_TYPE } from '../../const';
import MainScreenEmpty from '../main-screen-empty/main-screen-empty';
import MainScreenContent from '../main-screen-content/main-screen-content';

type MainScreenProps = {
  offers: Offer[],
  cities: string[],
}

function MainScreen({ cities, offers }: MainScreenProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<Offer | null>(null);
  const [sortType, setSortType] = useState(DEFAULT_SORT_TYPE);

  // const [{ city: { name } }] = offers;
  const name = 'Amsterdam';

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
            {offers.length === 0 && <MainScreenEmpty cityName={name} />}
            {offers.length > 0 &&
              <MainScreenContent
                handleChangeSortType={handleChangeSortType}
                cityName={name}
                offers={offers}
                sortType={sortType}
                sortedOffers={sortedOffers}
                handleActiveCard={handleActiveCard}
                activeCard={activeCard}
              />}
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
