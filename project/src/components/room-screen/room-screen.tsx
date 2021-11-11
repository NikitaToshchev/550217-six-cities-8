import { Offer } from '../../types/offer';
import HeaderComponet from '../header/header';
import RoomGalleryComponent from '../room-gallary/room-gallary';
import RoomGoodsComponent from '../room-goods/room-goods';
import ReviewsComponent from '../reviews/reviews';
import NearPlacesComponent from '../near-places/near-places';
import { useParams } from 'react-router-dom';
import Map from '../map/map';
import { useEffect, useState } from 'react';
import { getRating } from '../../utils/utils';
import { State } from '../../types/state';
import { connect, ConnectedProps } from 'react-redux';
import { MAX_IMAGES } from '../../const';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import { ThunkAppDispatch } from '../../types/actions';
import { fetchCommentsAction, fetchNearOffersAction, fetchOfferByIdAction } from '../../store/api-actions';

const mapStateToProps = ({ offers, offerById, nearOffers }: State) => ({
  offers,
  offerById,
  nearOffers,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onload(id: string) {
    dispatch(fetchNearOffersAction(id));
    dispatch(fetchOfferByIdAction(id));
    dispatch(fetchCommentsAction(id));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

function RoomScreen({ offerById, nearOffers, onload }: PropsFromRedux): JSX.Element {

  const { id } = useParams() as { id: string };
  const [activeCard, setActiveCard] = useState<Offer | null>(null);
  const handleActiveCard = (card: Offer | null): void => {
    setActiveCard(card);
  };

  useEffect(() => {
    onload(id);
  }, [id, onload]);

  if (!offerById) {
    return <NotFoundScreen />;
  }
  const { images, isFavorite, title, isPremium, host, price, rating, bedrooms, maxAdults, type, goods, description } = offerById;
  const { name, avatarUrl, isPro } = host;

  const offerRating = getRating(offerById.rating);

  const bookmarkButtonClass = isFavorite ? 'property__bookmark-button property__bookmark-button--active button'
    : 'property__bookmark-button button';
  const propertyWrapperClass = isPro
    ? 'property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper'
    : 'property__avatar-wrapper user__avatar-wrapper';

  return (
    <div className="page">
      <HeaderComponet />
      <main className="page__main page__main--property">
        <section className="property">
          {images.length > 0 && <RoomGalleryComponent images={images.slice(0, MAX_IMAGES)} />}
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium ? <div className="property__mark"><span>Premium</span></div> : ''}
              <div className="property__name-wrapper">
                <h1 className="property__name">{title}</h1>
                <button className={bookmarkButtonClass} type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">{`${isFavorite ? 'In' : 'To'} bookmarks`}</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: offerRating }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              {goods.length > 0 && <RoomGoodsComponent goods={goods} />}
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={propertyWrapperClass}>
                    <img className="property__avatar user__avatar" src={avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {name}
                  </span>
                  {isPro &&
                    <span className="property__user-status">
                      Pro
                    </span>}
                </div>
                <div className="property__description">
                  <p className="property__text">{description}</p>
                </div>
              </div>
              <ReviewsComponent />
            </div>
          </div>
          <section className="property__map map">
            <Map
              offers={nearOffers}
              activeCard={activeCard}
            />
          </section>
        </section>
        <NearPlacesComponent
          nearOffers={nearOffers}
          handleActiveCard={handleActiveCard}
        />
      </main>
    </div>
  );
}

export { RoomScreen };
export default connector(RoomScreen);
