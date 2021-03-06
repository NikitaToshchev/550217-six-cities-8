import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { postFavorititeAction } from '../../store/actions/api-actions';
import { getAuthorizationStatus } from '../../store/selectors/selectors';
import { Offer } from '../../types/offer';
import { getRating } from '../../utils/utils';

type FavoriteItemCardProps = {
  offer: Offer,
}

function FavoriteItemCard({ offer }: FavoriteItemCardProps): JSX.Element {
  const { type, title, price, rating, isPremium, isFavorite, previewImage, id } = offer;
  const bookmarkButtonClass = isFavorite
    ? 'place-card__bookmark-button place-card__bookmark-button--active button'
    : 'place-card__bookmark-button button';

  const offerRating = getRating(rating);
  const authorizationStatus = useSelector(getAuthorizationStatus);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleFavoriteBthClick = (card: Offer) => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(postFavorititeAction(offer.id, !offer.isFavorite));
    } else {
      history.push(AppRoute.SignIn);
    }
  };

  return (
    <article className="favorites__card place-card">
      {isPremium ? <div className="place-card__mark"><span>Premium</span></div> : ''}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width="150" height="110" alt="" />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={bookmarkButtonClass}
            type="button"
            onClick={() => handleFavoriteBthClick(offer)}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{`${isFavorite ? 'In' : 'To'} bookmarks`}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: offerRating }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default FavoriteItemCard;
