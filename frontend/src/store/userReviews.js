import { csrfFetch } from './csrf';

const GET_USERREV = 'reviews/GET_USERREVIEWS';

const getUserRev = (reviews) => ({
    type: GET_USERREV,
    reviews
  })

export const getUserReviews = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/userReviews/${id}`);
    if (response.ok) {
        const data = await response.json();
        dispatch(getUserRev(data));
        return data;
    }
}

const userReviewReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_USERREV: {
            let newState = {};
            const array = action.reviews;
            for (let i = 0; i < array.length; i++) {
                // let key = array[i].id;
                newState[i + 1] = array[i]
            }
            return newState;
        }
            default:
            return state;
    }
}

export default userReviewReducer;
