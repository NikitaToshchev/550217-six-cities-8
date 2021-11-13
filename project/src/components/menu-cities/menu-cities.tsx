import { State } from '../../types/state';
import { connect, ConnectedProps } from 'react-redux';
import { Actions } from '../../types/actions';
import { Dispatch } from 'redux';
import { changeCity, changeSortType } from '../../store/actions/action';
import { CITIES, DEFAULT_SORT_TYPE } from '../../const';
import { getCurrentCity, getOffers } from '../../store/selectors/selectors';

const mapStateToProps = (state: State) => ({
  currentCity: getCurrentCity(state),
  offers: getOffers(state),
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onChangeCity(city: string) {
    dispatch(changeCity(city));
    dispatch(changeSortType(DEFAULT_SORT_TYPE));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function MenuCitiesComponent({ onChangeCity, currentCity }: PropsFromRedux): JSX.Element {

  const getClassNameActive = (city: string) => city === currentCity ? 'tabs__item--active' : '';

  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {CITIES.map((city) => (
              <li className="locations__item" key={city}>
                <a href="/#"
                  className={`locations__item-link tabs__item ${getClassNameActive(city)}`}
                  onClick={() => onChangeCity(city)}
                >
                  <span>{city}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}

export { MenuCitiesComponent };
export default connector(MenuCitiesComponent);


