import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getVenue } from '../../store/venue';
import './venueId.css';

function VenueIdPage() {
    const { id } = useParams();
    // const [ currentId, setCurrentId ] = useState(id);
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     console.log(id, '------------');
    //     dispatch(getVenue(id))
    // }, [dispatch, id]);

    const venue = useSelector(state => {
        return state.venue[id];
    })

    return (
        <>
            <h1>HELLOOOOOOOOO</h1>
            <div className='venue-id'>
                {console.log(venue, 'venueIdPage')}
                <h2>{venue.title}</h2>
                <ul className='venueList'>
                    <li>{venue.description}</li>
                    <li>{venue.maxGuests}</li>
                    <li>{venue.dailyCost}</li>
                    <li>{venue.address}</li>
                    <li>{venue.city}</li>
                    <li>{venue.state}</li>
                </ul>
            </div>
        </>

    )

}

export default VenueIdPage;
