import { csrfFetch } from './csrf';


const LOAD = 'venue/LOAD';


const load = (list) => ({
    type: LOAD,
    list
});

const initialState = {
    list: []
};

export const getVenues = () => async (dispatch) => {
    const response = await csrfFetch('/api/venues');

    if (response.ok) {
        const list = await response.json();
        dispatch(load(list));
    }
};

const venueReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD: {
            const allVenues = {};
            action.list.forEach((venue) => {
                allVenues[venue.id] = venue;
            });
            return {
                ...allVenues,
                ...state,
                list: action.list
            }
        }
        default:
            return state;
    }
}

export default venueReducer;
