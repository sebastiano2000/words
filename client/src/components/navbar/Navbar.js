import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='mainNavbar'>
            {/* Project Name */}
            <h1 className='mainHeader'>JavaScript Developer Task</h1>
            <p className='mainText'>
                Welcome to the English Test!
            </p>
        </div>
    );
};

export default Navbar;