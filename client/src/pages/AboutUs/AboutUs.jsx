import React from 'react';
import aboutUsImage from '../../assets/images/aboutUs-image.png';
import Footer from '../../components/Footer';

const About = () => {
  return (
    <div className="about-section bg-black text-white">
      <p>
        At our nail salon, we embrace a holistic approach to enhance your health and beauty. Our dedicated team collaborates closely with clients, focusing on a personal level to bring their vision of a radiant image to life. Our commitment revolves around achieving perfection not only in the quality of our nail services but also in the exceptional customer experience we deliver.
      </p>
      <img src={aboutUsImage} alt="Red Rose Red Manicure picture" />
    </div>
  );
};

export default About;
