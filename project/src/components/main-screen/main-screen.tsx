import HeaderComponet from '../header/header';
import MenuCitiesComponent from '../menu-cities/menu-cities';
import { Offer } from '../../types/offer';
import { useState } from 'react';
import { getSortedOffers } from '../../utils/utils';
import MainScreenEmpty from '../main-screen-empty/main-screen-empty';
import MainScreenContent from '../main-screen-content/main-screen-content';
import { connect, ConnectedProps } from 'react-redux';
import { State } from '../../types/state';

type MainScreenProps = {
  offers: Offer[],
  cities: string[],
  currentCity: string,
}

const mapStateToProps = ({ currentSortType }: State) => ({
  currentSortType,
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & MainScreenProps;

function MainScreen({ cities, offers, currentCity, currentSortType }: ConnectedComponentProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<Offer | null>(null);

  const handleActiveCard = (offer: Offer | null): void => {
    setActiveCard(offer);
  };

  const sortedOffers = getSortedOffers(currentSortType, offers);

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
            {offers.length === 0 && <MainScreenEmpty cityName={currentCity} />}
            {offers.length > 0 &&
              <MainScreenContent
                cityName={currentCity}
                offers={offers}
                sortType={currentSortType}
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

export { MainScreen };
export default connector(MainScreen);

