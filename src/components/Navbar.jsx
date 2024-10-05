import React from 'react';
import { Link } from 'react-router-dom';

/* import image */
import Logo from '../assets/img/logo.jpg'

function Navbar () {
    return (
        <React.Fragment>
            <div className='navbar'>
                <div className="logo-section">
                    <img src={ Logo } className='logo' alt="Logo"/>
                    <h1 className='logo-name'>PressCraft</h1>
                </div>
                <div className="nav-links">
                    <Link to='/' className='link'>Home</Link>
                    <Link to='/services' className='link'>Services</Link>
                    <Link to='/aboutus' className='link'>About Us</Link>
                    <Link to='/contactus' className='link'>Contact Us</Link>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Navbar;
