// this is where we make our fetch call to POST a booking in our reservation table
// what we need to send to our database is the userId and venueId
// we can get the venueId for the reservation table by grabing the params when we are on the venueIdPage
// we can do this same logic for the searchIdPage
// we can get the userId with the useSelector to get the userId from state.session

import { csrfFetch } from './csrf';

const SET_RESERVATION = 'booking/setReservation';
const GET_RESERVATION = 'booking/getReservation';

const setReservation = (newRes) => ({
    type: SET_RESERVATION,
    newRes
});

const getRes = (reservations) => ({
    type: GET_RESERVATION,
    reservations
})

export const bookReservation = (reserverId, venueId, date) => async (dispatch) => {
    const response = await csrfFetch(`/api/reservations`, {
        method: 'POST',
        body: JSON.stringify({
            venueId,
            reserverId,
            date
        })
    })
    if (response.ok) {
        const data = await response.json();
        return dispatch(setReservation(data))
    } else {
        return alert('You must pick a date');
    }

}

export const getReservation = (userId) => async (dispatch) => {
    const response = await csrfFetch(`/api/reservations/${userId}`);
    if (response.ok) {
        const data = await response.json();;
        return dispatch(getRes(data));
    }
}

// need reducer here

const reservationReducer = (state = {}, action) => {
    let newState = {};
    switch (action.type) {
        case SET_RESERVATION:
            newState = {...state}
            const key = Object.values(state).length + 1;
            newState[key] = action.newRes
            return newState;
        case GET_RESERVATION:
            const array = action.reservations;
            for (let i = 0; i < array.length; i++) {
                // let key = array[i].id;
                newState[i + 1] = array[i]
            }
            return newState;

        default:
            return state;
    }
}

export default reservationReducer;

// newState = Object.assign({}, state);
// for (let i = 0; i < action.payload.length; i++) {
//     const key = action.payload[i].id;
//     newState[key] = action.payload[i];
// }
// return newState;
