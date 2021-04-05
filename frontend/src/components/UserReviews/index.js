import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUserReviews } from '../../store/userReviews'
import { NavLink } from 'react-router-dom';
import './UserReviews.css';

function UserReviews() {
    const dispatch = useDispatch();
    const state = useSelector(state => state.session.user.id)

    useEffect(() => {
        dispatch(getUserReviews(state));
    }, [dispatch, state])
    const userReviews = useSelector(state => state.userReview);

    if (!state) return null;
    if (!userReviews) return null;

    const reservations = Object.values(userReviews);
    return (
        <div className='reviews'>
            <h2>Your Reviews</h2>
            <ul className='reviews-list'>
                {reservations.map((item, i) => (

                    <li key={`li-${i}`}>
                        <NavLink to={`/venues/${item.venueId}`} key={i} className='navlink'>
                            {item.title}
                            {/* <img src={item.bookingImgUrl} alt='booking'/> */}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UserReviews;
