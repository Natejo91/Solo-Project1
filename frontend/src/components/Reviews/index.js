import './Reviews.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function Reviews() {
    const state = useSelector(state => state.list)
    console.log(state)


    return (
        <>
            <h2>REVIEWS</h2>
        </>
    )
};

export default Reviews;
