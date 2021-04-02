import './ReservationsPage.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getReservation} from '../../store/reservation';
import { useSelector } from 'react-redux';

function ReservationsPage() {
    const dispatch = useDispatch();
    const state = useSelector(state => state.session.user.id)
    useEffect(() => {
        dispatch(getReservation(state))
    }, [dispatch, state])

    const reservations = useSelector(state => state.reservation)
    console.log(reservations);

    if (!reservations) return null;

    return (
        <div className='reservation'>
            <ul>
                <li>Reservation Component</li>
                {/* {reservations.map(item => (
                    <li key={item.id}>
                        <img src={item.bookingImgUrl} alt='booking'/>
                    </li>
                ))} */}
            </ul>
        </div>
    )
}

export default ReservationsPage;
