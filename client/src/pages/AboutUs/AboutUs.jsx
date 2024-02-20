import React from 'react';
import spa from '../../assets/images/spa.png';
import lotus from "../../assets/images/lotus.png";

const About = () => {
  const imageStyle = {
    width: '40%',
    height: 'auto',
  };

  const textImage = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "100px",
    textAlign: "center",
    color: "#F75E8A",
    fontFamily: "DM Sans, sans-serif",
    background: "#232323",
    borderRadius: "10px",
    margin: "30px",
    boxShadow: "2px 2px 15px grey"
  };

  const xsmImg = {
    maxWidth: "50px",
  };

  return (
    <>
      <div style={textImage}>
        <img src={spa} alt="Spa" style={imageStyle} />
        <div style={{fontSize: "25px"}}>
        <img src={lotus} alt="lotus" style={xsmImg} />
        <br></br>
        <br></br>
          At our nail salon, we <span style={{color: "#FDBACD"}}>EMBRACE</span> a holistic approach to enhance your health and beauty. Our <span style={{color: "white"}}>DEDICATED</span> team collaborates closely with clients, focusing on a personal level to bring their vision of a <span style={{color: "#FDBACD"}}>RADIANT</span> image to life. Our commitment revolves around achieving <span style={{color: "white"}}>PERFECTION</span>, not only in the quality of our nail services but also in the exceptional <span style={{color: "#FDBACD"}}>CUSTOMER EXPERIENCE</span> we deliver.
        </div>
      </div>
    </>
  );
};

export default About;