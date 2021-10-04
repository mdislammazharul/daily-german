import React from 'react';
import './About.css'
import img from '../../images/instructor.png'

const About = () => {
    return (
        <div className="about-container">
            <h1 className="home-heading mt-5">About Us</h1>
            <div className="d-flex justify-content-center mt-5">
                <img src={img} alt="" />
                <div className="d-flex align-items-center mx-5">
                    <p>Hallo! My Daily German is a website created by a team of language enthusiasts to address common issues faced by the busy adult learner. Founded by Frederic Bibard with the help of his team of German language teachers and learners alike, My Daily German is designed to help language learners create an effective learning habit. Using comprehensive yet engaging lessons on German language and culture.</p>
                </div>
            </div>
        </div>
    );
};

export default About;