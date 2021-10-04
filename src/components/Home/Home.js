import React, { useEffect, useState } from 'react';
import './Home.css'
import img from '../../images/home-image (2).png'
import HappyLearners from '../HappyLearners/HappyLearners';
import HomeServices from '../HomeServices/HomeServices';

const Home = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch('./users.JSON')
            .then(res => res.json())
            .then(data => setStudents(data))
    }, [])

    return (
        <div className="home-container">
            <div className="row">
                <div className="col-md-6">
                    <h1>Learn German Language</h1>
                    <p>Learn basic communications in German Language</p>
                </div>
                <div className="col-md-6">
                    <img src={img} alt="" />
                </div>
            </div>
            <h1>Happy Users</h1>
            <div className="row">
                {
                    students.map(student => <HappyLearners student={student}></HappyLearners>)
                }
            </div>
            <HomeServices></HomeServices>
        </div>
    );
};

export default Home;