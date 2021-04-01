import { csrfFetch } from './csrf';


const LOAD = 'venue/LOAD';
const GET_ONE = 'venue/GET';


const load = (list) => ({
    type: LOAD,
    list
});

const getOneVenue = (venue) => ({
    type: GET_ONE,
    venue,
})


export const getVenue = (id) => async (dispatch) => {
    // console.log('for getVenue thunk')
    const response = await csrfFetch(`/api/venues/${id}`);
    if (response.ok) {
        const venue = await response.json();
        dispatch(getOneVenue(venue));
    }
}

export const getVenues = () => async (dispatch) => {
    const response = await csrfFetch('/api/venues');
    if (response.ok) {
        const list = await response.json();
        dispatch(load(list));
    }
};

const venueReducer = (state = null, action) => {
    switch (action.type) {
        case LOAD: {
            const allVenues = {};
            action.list.forEach((venue) => {
                allVenues[venue.id] = venue;
            });
            // return {
            //     ...allVenues,
            //     ...state,
            // }
            return allVenues;
        }
        default:
            return state;
        case GET_ONE: {
            return {
                ...state,
                [action.venue.id]: action.venue,
            }
        }
    }
}

export default venueReducer;
