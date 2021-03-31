import * as searchActions from '../../store/search';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './searchBar.css'

function SearchBar() {
    const [ search, setSearch ] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(searchActions.getSearch(search))
        history.push("/list")
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input
                type='search'
                value={search}
                name='search'
                placeholder='Search...'
                onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={(e) => handleSubmit(e)} type='submit'>Search</button>
        </form>
    );
}

export default SearchBar;
