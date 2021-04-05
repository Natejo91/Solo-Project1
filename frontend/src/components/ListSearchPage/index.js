import { useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import './ListSearchPage.css';



function ListSearchPage() {
    const venueSearch = useSelector(state => state.search);

    if (!venueSearch) return null;
    return (
        <div id='venue-search-container'>
            <ul>
                {Object.values(venueSearch).map((venue, i) =>(

                    <li key={`li-${i}`}>
                        <NavLink to={`/venues/${venue.id}`} key={venue.id}>
                        <span className='venue-title' key={`span-${i}`}>{venue.title}</span>
                            <img id='venue-image' src={venue.bookingImgUrl} alt='venue'/>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListSearchPage;
