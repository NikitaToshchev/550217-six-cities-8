import { Link } from 'react-router-dom';
import { Offer } from '../../types/offer';

type placeCardProps = {
  offer: Offer,
  handleActiveCard: (offer: Offer | null) => void,
}

function PlaceCard({ offer, handleActiveCard }: placeCardProps): JSX.Element {
  const { type, title, price, rating, isPremium, isFavorite, previewImage, id } = offer;
  const bookmarkButtonClass = isFavorite ? 'place-card__bookmark-button--active place-card__bookmark-button button'
    : 'place-card__bookmark-button button';
  const getPremiumMark = isPremium ? <div className="place-card__mark"><span>Premium</span></div> : '';

  return (
    <article className="cities__place-card place-card"
      onMouseEnter={() => handleActiveCard(offer)}
      onMouseLeave={() => handleActiveCard(null)}
    >
      {getPremiumMark}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={bookmarkButtonClass} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{`${isFavorite ? 'In' : 'To'} bookmarks`}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${(Math.round(rating) / 5 * 100)}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article >
  );
}

export default PlaceCard;
