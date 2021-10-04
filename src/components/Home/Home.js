import React, { useEffect, useState } from 'react';
import './Home.css'
import img from '../../images/home-image (2).png'
import instructor from '../../images/instructor.png'
import HappyLearners from '../HappyLearners/HappyLearners';
import HomeServices from '../HomeServices/HomeServices';

// Home page has two components inside it. 1. HappyLerners & 2. Homeservices

const Home = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch('./users.JSON')
            .then(res => res.json())
            .then(data => setStudents(data))
    }, [])

    return (
        <div>
            <div className="home-container row mb-5">
                <div className="col-md-6 d-flex align-items-center">
                    <div className="d-flex flex-column">
                        <div>
                            <img className="w-50" src={instructor} alt="" />
                        </div>
                        <div className="mx-5 mb-5">
                            <h1>Guten Tag! <br /> Welcome to My Daily German!</h1>
                            <p>My name is Frédéric, and my team and I developed this website to help German-learners to have fun and enjoy learning German every day. I hope that you will use and enjoy the free gift. Please also check out the e-books. If there is anything I can do to help, just click the button below to send me a message. I’ll be happy to help!</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <img src={img} alt="" />
                </div>
            </div>
            <h1 className="pt-5 m-5 home-heading">Our Instructors</h1>
            <div className="row">
                {
                    students.map(student => <HappyLearners key={student.key} student={student}></HappyLearners>)
                }
            </div>
            <HomeServices></HomeServices>
        </div >
    );
};

export default Home;