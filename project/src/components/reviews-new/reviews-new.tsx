import { FormEvent, useState, ChangeEvent } from 'react';
import { INITIAL_RATING, ratingStars } from '../../const';
import RatingInputComponent from '../rating-input/rating-input';

function ReviewNewComponent(): JSX.Element {
  const [rating, setRating] = useState(INITIAL_RATING);
  const [review, setReview] = useState('');

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
  };

  const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>): void => {
    setRating((evt.target.value));
  };

  const handleTextAreaChange = (evt: ChangeEvent<HTMLTextAreaElement>): void => {
    evt.preventDefault();
    setReview(() => evt.target.value);
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleFormSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Object.keys(ratingStars).map((number) => (
          <RatingInputComponent
            number={number}
            key={number}
            title={ratingStars[number]}
            value={rating}
            onChange={handleRatingChange}
          />))}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"
        value={review}
        onChange={handleTextAreaChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}

export default ReviewNewComponent;
