import React from 'react';
import '../styles/NavBar.css'

function NavBar() {
    return(
        <nav>
            <div className="text">
                <a href="#">Pictures</a>
                <a href="#">Gmail</a>
            </div>

            <div className="icons">
                <a href="#" className="profile-icon-hover"><div className="profile-icon">V</div></a>
                <a href="#" className="menu">💩</a>
            </div>


        </nav>
    )
}
export default NavBar;