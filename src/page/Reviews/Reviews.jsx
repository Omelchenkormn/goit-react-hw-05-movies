import { Header, TextReview } from './Reviews.styled';
import { useFetchRewiews } from 'hoc/useFetchReviews';

const Reviews = () => {
  const { reviews } = useFetchRewiews();
  return (
    <ul>
      {reviews &&
        reviews.map(review =>
          review.content ? (
            <li key={review.id}>
              <Header>{review.author}</Header>
              <TextReview>{review.content}</TextReview>
            </li>
          ) : (
            <p>Rewies not found</p>
          )
        )}
    </ul>
  );
};
export default Reviews;
