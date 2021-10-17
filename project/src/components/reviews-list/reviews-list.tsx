import { Review } from '../../types/review';
import ReviewsItemComponent from '../reviews-item/reviews-item';
type ReviewsListProps = {
  reviews: Review[],
}

function ReviewsListComponent({ reviews }: ReviewsListProps): JSX.Element {
  const reviewsItems = reviews.map((review) => (
    <ReviewsItemComponent
      key={review.id}
      review={review}
    />
  ));

  return (
    <ul className="reviews__list">
      {reviewsItems}
    </ul>
  );
}

export default ReviewsListComponent;
