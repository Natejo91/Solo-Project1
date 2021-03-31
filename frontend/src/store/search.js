import { csrfFetch } from "./csrf";

const LOAD = 'search/LOAD';

const load = list => ({
    type: LOAD,
    list
})

export const getSearch = (param) => async dispatch => {
    const response = await csrfFetch(`/api/search/${param}`);

    if (response.ok) {
        const list = await response.json();
        dispatch(load(list))
        return list;
    }
}

const searchReducer = (state = [], action) => {
    switch (action.type) {
        case LOAD:
        const newState = action.list;
        return newState;
        default:
            return state;
    }
}

export default searchReducer;
