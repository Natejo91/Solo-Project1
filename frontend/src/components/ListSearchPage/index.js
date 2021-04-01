import { useSelector } from 'react-redux';
import ResultsTile from '../ResultsTile';
import { NavLink } from 'react-router-dom';
import './ListSearchPage.css';



function ListSearchPage() {
    const venueSearch = useSelector(state => state.search);
    console.log(venueSearch, 'Venue City');
    // const venues = venueSearch.map(venue => {
        return (
            <div id='venue-search-container'>
                <ul>
                    {venueSearch.map(venue =>(
                        <li key={`li-${venue.id}`}>
                            <NavLink to={`/venues/${venue.id}`} key={venue.id}>
                                Title: {venue.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
            // {/* <ResultsTile venue={venue} key={venue.id} /> */}
        )
    // })

    // return (
    //     <div id='venue-search'>
    //         {venues}
    //     </div>
    // )
}

export default ListSearchPage;
