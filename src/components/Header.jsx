import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <ul>
            <Link style={{marginRight: "20px"}} to='/'>Home</Link>
            <Link to='/login'>Log in</Link>
            </ul>
        </div>
    );
};

export default Header;