import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function SearchIdPage() {
    const { id } = useParams();


    const searchVenue = useSelector(state => {
        return state.search[id];
    })

    const handleSubmit = (e) => {
        e.preventDefault()

    }

    return (
        <>
            <div className='venue-id'>
                {console.log(searchVenue, 'venueIdPage')}
                <h2>{searchVenue.title}</h2>
                <ul className='venueList'>
                    <li>{searchVenue.description}</li>
                    <li>{searchVenue.maxGuests}</li>
                    <li>{searchVenue.dailyCost}</li>
                    <li>{searchVenue.address}</li>
                    <li>{searchVenue.city}</li>
                    <li>{searchVenue.state}</li>
                </ul>
            </div>
            <button onClick={(e) => handleSubmit(e)}></button>
        </>

    )

}

export default SearchIdPage;
