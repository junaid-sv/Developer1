import React from 'react';
import './Navbar.scss';

const Navbar =()=>{
    return (
        <>
        <div className="navbar">
            <a href="/" className='logo'>Wecare</a>
                <nav className='nav-links'>
                    <ul>
                        <li><a href="/">Job search</a></li>
                        <li><a href="/">be on one's mind!</a></li>
                        <li><a href="/">message</a></li>
                        <li><a href="/" className='active'>My page</a></li>
                        <li><a href="/"><button className='link-button'>N</button></a></li>
                    </ul>
                    <div className="logout-content">
                        <a href="/"><button className='logout-button'>Logout</button></a>
                    </div>
                </nav>
            </div>
        </>
    );
}
export default Navbar;