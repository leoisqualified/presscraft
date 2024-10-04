import React from 'react';

function Navbar () {
    return (
        <React.Fragment>
            <div className='navbar'>
                <div className="logo-section">
                    <img src='#' className='logo' alt="Logo"/>
                    <h1 className='logo-name'>PressCraft</h1>
                </div>
                <div className="nav-links">
                    <a href='#' className='link'>Home</a>
                    <a href='#' className='link'>Services</a>
                    <a href='#' className='link'>About Us</a>
                    <a href='#' className='link'>Contact Us</a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Navbar;
