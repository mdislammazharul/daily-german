import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="text-center header">
            <h1 className="pt-2 mb-3 home-heading"><strong>Daily German</strong></h1>
            <h4 className="fs-5">Learn How to Become a German Language Expert</h4>
            <h4 className="pb-5"><small className="fs-6 fw-bold"><em>You can never understand one language until you understand at least two.</em></small></h4>
        </div>
    );
};

export default Header;