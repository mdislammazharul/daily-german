import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import logo from '../../images/logo.PNG'

const Navbar = () => {
    return (
        <div>
            <div className="navbar-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                            <img className="logo-img" src={logo} alt="" />
                        </div>
                        <div className="col-md-10">
                            <div>
                                <ul className="d-flex align-items-end justify-content-end">
                                    <Link to="/home" className="items">
                                        <li>Home</li>
                                    </Link>
                                    <Link to="/services" className="items">
                                        <li>Services</li>
                                    </Link>
                                    <Link to="/about" className="items">
                                        <li>About Us</li>
                                    </Link>
                                    <Link to="/contact" className="items">
                                        <li>Contact</li>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;