import { getVenues } from '../../store/venue';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import './Venues.css';

function VenuesPage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getVenues())
    }, [dispatch]);

    const venues = useSelector(state => {
       return state.venue.list
    });

    return (
        <div id='venueContainer'>
            <h1>Venues</h1>
            <ul>
                {venues?.map(venue => (
                        <li key={venue.id}>
                            {venue.title}
                        </li>

                ))}
            </ul>
        </div>
    )
}

export default VenuesPage;
