import { connect, ConnectedProps } from 'react-redux';
import { State } from '../../types/state';
import ReviewsListComponent from '../reviews-list/reviews-list';
import ReviewsNewComponent from '../reviews-new/reviews-new';

const mapStateToProps = ({ reviews, authorizationStatus }: State) => ({
  reviews,
  authorizationStatus,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function ReviewsComponent({ reviews, authorizationStatus }: PropsFromRedux): JSX.Element {

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ReviewsListComponent reviews={reviews} />
      {authorizationStatus === 'AUTH' ? <ReviewsNewComponent /> : ''}
    </section>
  );
}

export { ReviewsComponent };
export default connector(ReviewsComponent);
