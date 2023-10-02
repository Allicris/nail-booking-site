import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import homepageImage from '../../assets/images/homepage-pic.png';

const Home = () => (
  <>
    <AboutUs />
    <img src={homepageImage} alt="Homepage" />
  </>
);

export default Home;
