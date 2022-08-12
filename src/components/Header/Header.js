import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h1>This is a Header</h1>
            <nav className='menu'>
                <a href="/home">home</a>
                <a href="/shop">shop</a>
                <a href="/blog">blog</a>
            </nav>
        </div>
    );
};

export default Header;