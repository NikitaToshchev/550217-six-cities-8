import HeaderComponet from '../header/header';
import SortingComponent from '../sorting/sorting';
import PlaceCardListComponent from '../place-card-list/place-card-list';
import MenuCitiesComponent from '../menu-cities/menu-cities';
import { Offer } from '../../types/offer';
import Map from '../map/map';
import { useState } from 'react';

type MainScreenProps = {
  offers: Offer[],
  cities: string[],
}

function MainScreen({ cities, offers }: MainScreenProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<Offer | null>(null);
  const [{ city: { name } }] = offers;

  const handleActiveCard = (offer: Offer | null): void => {
    setActiveCard(offer);
  };

  return (
    <div className="page page--gray page--main">
      <HeaderComponet />
      <main className="page__main page__main--index">
        <MenuCitiesComponent cities={cities} />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {name}</b>
              <SortingComponent />
              <PlaceCardListComponent
                offers={offers}
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
