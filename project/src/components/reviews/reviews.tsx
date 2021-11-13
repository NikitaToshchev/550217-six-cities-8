import { connect, ConnectedProps } from 'react-redux';
import { MAX_REVIEWS } from '../../const';
import { getAuthorizationStatus, getReviews } from '../../store/selectors/selectors';
import { State } from '../../types/state';
import { sortReviewsUpDate } from '../../utils/utils';
import ReviewsItemComponent from '../reviews-item/reviews-item';
import ReviewsNewComponent from '../reviews-new/reviews-new';

const mapStateToProps = (state: State) => ({
  reviews: getReviews(state),
  authorizationStatus: getAuthorizationStatus(state),
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;

function ReviewsComponent({ reviews, authorizationStatus }: ConnectedComponentProps): JSX.Element {

  const cropedSortedReviews = reviews.slice(0, MAX_REVIEWS).sort(sortReviewsUpDate);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {cropedSortedReviews.map((review) => <ReviewsItemComponent key={review.id} review={review} />)}
      </ul>
      {authorizationStatus === 'AUTH' ? <ReviewsNewComponent /> : 'Sign in to add a comment'}
    </section>
  );
}

export { ReviewsComponent };
export default connector(ReviewsComponent);
