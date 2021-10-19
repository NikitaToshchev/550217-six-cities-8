import HeaderComponet from '../header/header';
import SortingComponent from '../sorting/sorting';
import PlaceCardListComponent from '../place-card-list/place-card-list';
import MenuCitiesComponent from '../menu-cities/menu-cities';
import { Offer } from '../../types/offer';
import Map from '../map/map';

type MainScreenProps = {
  offers: Offer[];
}

function MainScreen({ offers }: MainScreenProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <HeaderComponet />
      <main className="page__main page__main--index">
        <MenuCitiesComponent />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in Amsterdam</b>
              <SortingComponent />
              <PlaceCardListComponent offers={offers} />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map offers={offers} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
