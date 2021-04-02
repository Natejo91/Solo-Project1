import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { bookReservation } from '../../store/reservation';
import { useParams, useHistory } from 'react-router-dom';
import { getVenue } from '../../store/venue';
import { getReviews} from '../../store/review';
import Reviews from '../Reviews';
import './venueId.css';

function VenueIdPage() {
    const { id } = useParams();
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() => {
        dispatch(getVenue(id));
        dispatch(getReviews(id))
    }, [dispatch, id])

    const venue = useSelector(state => {
        return state.venue[id];
    })


    const userId = useSelector(state => {
        return state.session.user?.id
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(bookReservation(userId, id))
        history.push('/');
    }

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <>
                <button className='booking-button' onClick={(e) => handleSubmit(e)}>Book Venue</button>
            </>
        );
    }

    if (!venue) return null;

    return (
        <>
            <div className='venue-id'>
                {console.log(venue, 'venueIdPage')}
                <h2>{venue.title}</h2>
                <ul className='venueList'>
                    <li>{venue.description}</li>
                    <li>{venue.maxGuests}</li>
                    <li>{venue.dailyCost}</li>
                    <li>{venue.address}</li>
                    <li>{venue.concertDate}</li>
                    <li>{venue.city}</li>
                    <li>{venue.state}</li>
                </ul>
                <img className='venue-image' src={venue.bookingImgUrl} alt='Venue'/>
                <Reviews />
                {sessionLinks}
            </div>
        </>

    )

}

export default VenueIdPage;
