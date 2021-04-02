import './Reviews.css';
import { useSelector } from 'react-redux';

function Reviews() {
    const reviews = useSelector(state => state.review)
    console.log(reviews)


    return (
        <>
            <h2>REVIEWS</h2>
            <ul className='reviews-list'>
                {Object.values(reviews).map(review => (
                    <>
                    <li key={review.title}>
                        {review.title}
                    </li>
                    <li key={review.body}>
                        {review.body}
                    </li>
                    <li key={review.rating}>
                        Rating: {review.rating}
                    </li>
                    </>
                ))}
            </ul>
        </>
    )
};

export default Reviews;
