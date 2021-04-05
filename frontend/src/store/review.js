import { csrfFetch } from './csrf';

const GET_REVIEWS = 'reviews/GET_REVIEWS';
const SET_REVIEWS = 'reviews/SET_REVIEWS';
const EDIT_REVIEWS = 'reviews/EDIT_REVIEWS';
const DELETE_REVIEWS = 'reviews/DELETE_REVIEWS';

const setReview = (reviews) => ({
    type: SET_REVIEWS,
    reviews
})

const loadReviews = list => ({
    type: GET_REVIEWS,
    list
})

const editRev = (reviewEdit) => ({
    type: EDIT_REVIEWS,
    reviewEdit
})

const deleteRev = (reviewId) => ({
    type: DELETE_REVIEWS,
    reviewId
})

export const editReview = (review) => async (dispatch) => {
    const { id, title, body, rating } = review;
    const response = await csrfFetch(`/api/reviews/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({ title, body, rating })
    });
    if (response.ok) {
        const updatedReview = await response.json();
        dispatch(editRev(updatedReview));
    }
}

export const getReviews = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/${id}`);
    if (response.ok) {
        const data = await response.json();
        dispatch(loadReviews(data));
        return data;
    }
}


export const createReview = (review) => async (dispatch) => {
    const { userId, venueId, title, body, rating } = review;
    const response = await csrfFetch(`/api/reviews`, {
        method: 'POST',
        body: JSON.stringify({
            userId,
            venueId,
            title,
            body,
            rating,
        }),
    });
    if (response.ok) {
        const data = await response.json();
        dispatch(setReview(data))
        return data;
    }
}

export const deleteReview = (reviewId) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: 'DELETE',
    })
    const data = await response.json();
    dispatch(deleteRev(reviewId))
    //maybe need to return something here
    return null;
}


const reviewReducer = (state = {}, action) => {
    switch(action.type) {
        case GET_REVIEWS: {
            const allReviews = {};
            action.list.forEach((review) => {
                allReviews[review.id] = review
            });
            return allReviews;
        }
        case SET_REVIEWS: {
            const newReview = { ...state }
            newReview[action.reviews.id] = action.reviews;
            return newReview;
        }
        case EDIT_REVIEWS: {
            const newState = { ...state };
            newState[action.review.id] = action.review;
            return newState;
        }
        case DELETE_REVIEWS: {
            const updatedState = { ...state };
            delete updatedState[action.reviewId];
            return updatedState;
        }
        default:
            return state;
        }
}

export default reviewReducer;
