import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="text-center header">
            <h1 className="display-2"><strong>Learn The German Language</strong></h1>
            <h4 className="fs-5 text-light">Learn How to Become a Self Researcher</h4>
            <h4><small className="fs-6 fw-light text-light"><em>If we knew what we were doing, it would not be called research, would it? - Albert Einstein</em></small></h4>
        </div>
    );
};

export default Header;