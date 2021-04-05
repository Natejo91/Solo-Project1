import { getVenues } from '../../store/venue';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import './Venues.css';

function VenuesPage() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getVenues())
    }, [dispatch]);

    const venues = useSelector(state => {
       return state.venue
    });

    if (!venues) return null;

        return (
            <div id='venueContainer'>
                <ul className='venue-list'>
                    {Object.values(venues).map((venue, i) => (
                        <li key={`li-${venue.id}`} id='img-navlink'>
                            <NavLink to={`/venues/${venue.id}`} key={i}>
                                <span className='venue-title' key={`span-${i}`}>{venue.title}</span>
                                <img id='venue-image' src={venue.bookingImgUrl} alt='Venue'/>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
    )
}

export default VenuesPage;
