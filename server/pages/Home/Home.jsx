import React from 'react';
import '../Home/HomePage.css';
import About from '../Home/About'
import Service from '../Home/Service'




const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <Service />
            <Pricing />
            <Gallary />
            <Blogs />
            <Location />
        </div>
    );
};

export default Home;