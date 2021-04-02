import { csrfFetch } from './csrf';

const GET_REVIEWS = 'reviews/GET_REVIEWS';
const SET_REVIEW = 'reviews/SET_REVIEW';

const setReview = (reviews) => ({
    type: SET_REVIEW,
    payload: reviews
})

const loadReviews = list => ({
    type: GET_REVIEWS,
    list
})

export const getReviews = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/${id}`);
    if (response.ok) {
        const data = await response.json();
        dispatch(loadReviews(data));
        return data;
    }
}

export const createReview = (review) => async (dispatch) => {
    const { userId, venueId, title, body, rating, reviewImgUrl } = review;
    const response = await csrfFetch('/api/reviews', {
        method: 'POST',
        body: JSON.stringify({
            userId,
            venueId,
            title,
            body,
            rating,
            reviewImgUrl
        }),
    });
    if (response.ok) {
        const data = await response.json();
        dispatch(setReview(data))
        return data;
    }
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
        case SET_REVIEW:
            const reviews = action.payload;
            const newReview = {};

            for(const review of reviews) {
                newReview[review.id] = reviews
            }
            return newReview;
        default:
            return state;
    }
}

export default reviewReducer;
