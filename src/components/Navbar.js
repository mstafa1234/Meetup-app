import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => (

    <div>
        <nav className="blue darken-3">
            <div className="nav-wrapper">

                <a href="#" className="brand-logo center">MeetUps</a>
                <a href="#" data-target="main-menu" className="sidenav-trigger show-on-large">
                    <i className="fa fa-bars"></i>
                </a>
                <ul id="nav-mobile" className="right hide-on-small-only">
                    <li><Link to="/"><i className="fa fa-users left"></i>MeetUps</Link></li>
                </ul>
            </div>

        </nav>
        <ul className="sidenav" id="main-menu">
            <li><Link to="/"><i className="fa fa-users"></i>MeetUps</Link></li>
            <li><Link to="/meetups/add"><i className="fa fa-plus"></i>Add MeetUps</Link></li>
        </ul>
    </div>


);


export default Navbar;
