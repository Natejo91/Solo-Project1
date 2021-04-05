import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { createReview} from '../../store/review';
import './ReviewCreatePage.css';



function ReviewCreatePage() {
    const { id } = useParams();
    const venueId = id;
    const history = useHistory();
    const dispatch = useDispatch()
    const [ title, setTitle ] = useState('');
    const [ body, setBody ] = useState('');
    const [ rating, setRating ] = useState('');
    const [ validationErrors, setValidationErrors ] = useState([]);
    const userId = useSelector((state) => state.session.user.id);

    const handleSubmit = (e) => {
        e.preventDefault();
        // setValidationErrors([]);
        dispatch(createReview({title, body, rating, venueId, userId}))
            // .catch(async (res) => {
            //     const data = await res.json();
            //     if (data && data.errors) setValidationErrors(data.errors);
            // });
        history.push('/');
    }

    return (
        <div className='review-container'>
            <form onSubmit={handleSubmit} className='reviewForm'>
                <h2 id='createReview'>Create a Review</h2>
                <ul>
                    {validationErrors.map((error, i) => (
                        <li key={i}>
                            {error}
                        </li>
                    ))}
                </ul>
                <label>
                Title
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                </label>
                <label>
                Body
                <input
                    type="text"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    required
                />
                </label>
                <label>
                Rating
                <input
                    type="text"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    required
                />
                </label>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )


}

export default ReviewCreatePage;
