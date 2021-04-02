import './ReservationsPage.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getReservation} from '../../store/reservation';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

function ReservationsPage() {
    const dispatch = useDispatch();
    const state = useSelector(state => state.session.user.id)
    useEffect(() => {
        dispatch(getReservation(state))
    }, [dispatch, state])

    const reservationObjects = useSelector(state => state.reservation);

    if (!reservationObjects) return null;

    const reservations = Object.values(reservationObjects);

    return (
        <div className='reservation'>
            <ul>
                <li>Reservation</li>
                {reservations.map((item, i) => (
                    <li key={`li-${i}`}>
                        <NavLink to={`/venues/${item.venueId}`} key={i}>
                            HEY
                            {/* <img src={item.bookingImgUrl} alt='booking'/> */}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ReservationsPage;
