import { Offer } from '../../types/offer';
import { Review } from '../../types/review';
import HeaderComponet from '../header/header';
import RoomGalleryComponent from '../room-gallary/room-gallary';
import RoomGoodsComponent from '../room-goods/room-goods';
import ReviewsComponent from '../reviews/reviews';
import NearPlacesComponent from '../near-places/near-places';
import { useParams } from 'react-router-dom';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import Map from '../map/map';
import { useState } from 'react';
import { getRating } from '../../utils/utils';
// import { State } from '../../types/state';
// import { connect } from 'http2';
// import { ConnectedProps } from 'react-redux';

type RoomScreenProps = {
  reviews: Review[],
  authorizationStatus: string,
  offers: Offer[],
}

// const mapStateToProps = ({ offers }: State) => ({
//   offers,
// });

// const connector = connect(mapStateToProps);

// type PropsFromRedux = ConnectedProps<typeof connector>;
// type ConnectedComponentProps = PropsFromRedux & RoomScreenProps;

function RoomScreen({ offers, reviews, authorizationStatus }: RoomScreenProps): JSX.Element {

  const { id } = useParams() as { id: string };
  const offer = offers.find((item) => item.id === id) as Offer;

  const nearOffers = offers.slice(0, 3);

  const [activeCard, setActiveCard] = useState<Offer | null>(null);
  const handleActiveCard = (card: Offer | null): void => {
    setActiveCard(card);
  };

  if (!offer) {
    return <NotFoundScreen />; // поставить redirect
  }

  const { images, isFavorite, title, isPremium, host, price, rating, bedrooms, maxAdults, type, goods, description } = offer;
  const { name, avatarUrl, isPro } = host;
  const offerRating = getRating(offer.rating);
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
          {images.length > 0 && <RoomGalleryComponent images={images} />}
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
              <ReviewsComponent reviews={reviews} authorizationStatus={authorizationStatus} />
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

export default RoomScreen;


// export { RoomScreen };
// export default connector(RoomScreen);
