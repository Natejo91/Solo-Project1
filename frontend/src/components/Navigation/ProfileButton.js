import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import './Navigation.css';


function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const [ showMenu, setShowMenu ] = useState(false);
    // const history = useHistory();

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener('click', closeMenu);
    }, [ showMenu ]);

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
        // history.push('/');

    }

    return (
        <div className='profileButton'>
            <button id='button' onClick={openMenu}>
                <i className="fas fa-user-circle" />
            </button>
            {showMenu && (
                <ul className="profile-dropdown">
                    <li id='profileUsername'>{user.username}</li>
                    <li id='profileEmail'>{user.email}</li>
                    <li id ='logoutButton'>
                        <button onClick={logout}>Log Out</button>
                    </li>
                </ul>
            )}
        </div>
    );
}

export default ProfileButton;
