import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <h1>Players Club</h1>
            <div className='manu'>
                <a href="/pricing">Pricing</a>
                <a href="/rank">Rank</a>
                <a href="/login">Login</a>
                <a href="/Sign Up">Sing Up</a>
            </div>
        </div>
    );
};

export default Header;