import { Reviews } from '../../types/reviews';
import ReviewsListComponent from '../reviews-list/reviews-list';
import ReviewsNewComponent from '../reviews-new/reviews-new';
type ReviewsProprs = {
  reviews: Reviews,
  authorizationStatus: string,
}

function ReviewsComponent({ reviews, authorizationStatus }: ReviewsProprs): JSX.Element {

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ReviewsListComponent reviews={reviews} />
      {authorizationStatus === 'AUTH' ? <ReviewsNewComponent /> : ''}
    </section>
  );
}

export default ReviewsComponent;
