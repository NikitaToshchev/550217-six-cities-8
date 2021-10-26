import { State } from '../../types/state';
import { connect, ConnectedProps } from 'react-redux';
import { Actions } from '../../types/actions';
import { Dispatch } from 'redux';
import { changeCity } from '../../store/action';

type MenuCitiesProps = {
  cities: string[],
}

const mapStateToProps = ({ currentCity, offers }: State) => ({ currentCity, offers });

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onChangeCity(city: string) {
    dispatch(changeCity(city));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & MenuCitiesProps;

function MenuCitiesComponent({ cities, onChangeCity, currentCity }: ConnectedComponentProps): JSX.Element {

  const getClassNameActive = (city: string) => city === currentCity ? 'tabs__item--active' : '';

  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {cities.map((city) => (
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


