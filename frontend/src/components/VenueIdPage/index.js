import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { bookReservation } from '../../store/reservation';
import { useParams, useHistory } from 'react-router-dom';
import { getVenues } from '../../store/venue';
import { getReviews} from '../../store/review';
import Reviews from '../Reviews';
import './venueId.css';

function VenueIdPage() {
    const { id } = useParams();
    const [ date, setDate ] = useState('');
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() => {
        dispatch(getVenues());
        dispatch(getReviews(id));
    }, [dispatch, id])

    const venue = useSelector(state => {
        return state.venue[id];
    })


    const userId = useSelector(state => {
        return state.session.user?.id
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (date) {
            dispatch(bookReservation(userId, id, date))
            history.push('/');
        } else {
            window.alert('You must enter a date');
        }

    }

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <div id='booking-venue'>
                <input type='date' name='date' onChange={(e) => setDate(e.target.value) } value={date}></input>
                <button className='booking-button' onClick={(e) => handleSubmit(e)}>Book Venue</button>
            </div>
        );
    }

    if (!venue) return null;

    return (
        <>
            <div className='venue-id'>
                <h2>{venue.title}</h2>
                <ul className='venueList'>
                    <li className='li-item'>- {venue.description}</li>
                    <li className='li-item'><strong>Max Guests: </strong>{venue.maxGuests}</li>
                    <li className='li-item'><strong>$ </strong>{venue.dailyCost}</li>
                    <li className='li-item'><strong>Address: </strong>{venue.address}</li>
                    <li className='li-item'><strong>City: </strong>{venue.city}</li>
                    <li className='li-item'><strong>State: </strong>{venue.state}</li>
                </ul>
                <img className='venue-image' src={venue.bookingImgUrl} alt='Venue'/>
                <Reviews />
                {sessionLinks}
            </div>
        </>

    )

}

export default VenueIdPage;
