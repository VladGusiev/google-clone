import React from 'react';
import '../styles/NavBar.css'

function NavBar() {
    return(
        <nav>
            <div className="text">
                <a className="nav-links" href="#">Pictures</a>
                <a className="nav-links" href="#">Gmail</a>
            </div>

            <div className="icons">
                <a href="#" className="profile-icon-hover nav-links"><div className="profile-icon">V</div></a>
                <a href="#" className="menu nav-links">💩</a>
            </div>
        </nav>
    )
}
export default NavBar;