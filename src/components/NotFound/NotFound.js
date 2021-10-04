import React from 'react';
import './NotFound.css'
import img from '../../images/404.jpg'

const NotFound = () => {
    return (
        <div>
            <h1 className="home-heading mt-5">Sorry!</h1>
            <h1>This Page Cannot Be Found!</h1>
            <img src={img} alt="" />
        </div>
    );
};

export default NotFound;