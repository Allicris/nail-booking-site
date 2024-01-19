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
    background: "#232323"
  };

  const xsmImg = {
    maxWidth: "50px",
  };

  return (
    <>
      <div style={textImage}>
        <img src={spa} alt="Manicure with a red rose" style={imageStyle} />
        <p style={{fontSize: "25px"}}>
        <img src={lotus} alt="lotus" style={xsmImg} />
        <br></br>
        <br></br>
          At our nail salon, we <new style={{color: "#FDBACD"}}>EMBRACE</new> a holistic approach to enhance your health and beauty. Our <new style={{color: "white"}}>DEDICATED</new> team collaborates closely with clients, focusing on a personal level to bring their vision of a <new style={{color: "#FDBACD"}}>RADIANT</new> image to life. Our commitment revolves around achieving <new style={{color: "white"}}>PERFECTION</new>, not only in the quality of our nail services but also in the exceptional <new style={{color: "#FDBACD"}}>CUSTOMER EXPERIENCE</new> we deliver.
        </p>
      </div>
    </>
  );
};

export default About;