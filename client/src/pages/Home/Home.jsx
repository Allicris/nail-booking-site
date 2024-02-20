import React from "react";
import manicure from "../../assets/images/manicure.png";
import nailArt from "../../assets/images/nailart.png";
import pedicure from "../../assets/images/pedicure.png";
import nailPolish from "../../assets/images/nailpolish.png";
import lotus from "../../assets/images/lotus.png";
import nailExperience from "../../assets/images/nailexperience.png";
import "../../styles/background.css";

function Home() {
  const headerText = {
    fontFamily: "'Playfair Display', serif",
    fontWeight: "550",
    color: "#FD5C7E",
    textShadow: "2px 2px 2px #3C3B3B",
    margin: "10px",
    padding: "40px",
  };

  const textImage = {
    display: "flex",
    justifyContent: "center",
  };

  const smallParagraph = {
    maxWidth: "400px",
    margin: "0 40px",
  };

  const containerStyle = {
    color: "white",
    padding: "20px",
    paddingLeft: "175px",
    paddingRight: "175px",
    textAlign: "center",
  };

  const pinkHeaderStyle = {
    fontFamily: "'Roboto', sans-serif",
    fontWeight: "100",
    color: "#FDAABD",
    fontSize: "30px",
    margin: "50px",
  };

  const border = {
    margin: "100px",
    borderStyle: "inset",
    borderRadius: "25px",
  };

  const card = {
    background: "#232323",
  };

  const xsmImg = {
    maxWidth: "50px",
  };

  const smallImageStyle = {
    maxWidth: "200px",
  };

  const medImageStyle = {
    maxWidth: "300px",
  };

  return (
    <div>
      <div className="blackbg" style={containerStyle}>
        <h2 style={headerText}>Our Mission</h2>
        <br></br>
        <p
          style={{ paddingBottom: "100px", fontFamily: "'DM Sans', sans-serif" }}
        >
          We believe that beauty begins at your fingertips. Our mission is to
          elevate your nail care experience to a whole new level. Whether you're
          looking for a relaxing manicure, a stunning pedicure, or intricate
          nail art, we've got you covered.
          <br></br>
          <br></br>
          <br></br>
          <img src={lotus} alt="lotus" style={xsmImg} />
        </p>
      </div>
      <div style={containerStyle}>
        <h2 style={headerText}>Why Choose M.A.A. Nail Haven?</h2>
        <section style={textImage}>
          <div>
            <img
              src={nailPolish}
              alt="French tips manicure"
              style={smallImageStyle}
            />
          </div>
          <div>
            <h3 style={pinkHeaderStyle}>Premium Products</h3>
            <p
              style={{
                ...smallParagraph,
                paddingBottom: "100px",
                fontFamily: "'DM Sans', serif",
              }}
            >
              We use only the highest quality nail products and polishes to
              pamper your nails. Your safety and satisfaction are our top
              priorities.
            </p>
          </div>
        </section>
      </div>
      <div style={{ ...containerStyle, ...card }}>
        <h2 style={{ ...headerText, ...border }}>Our Services</h2>
        <div style={{ ...textImage }}>
          <div style={{ padding: "20px" }}>
            <h3 style={pinkHeaderStyle}>Manicures</h3>
            <img src={lotus} alt="lotus" style={xsmImg} />
            <p style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Treat your hands to a rejuvenating manicure that leaves your nails
              looking flawless. Choose from a variety of nail shapes, colors,
              and designs to express your unique style.
            </p>
            <>
              <img
                src={manicure}
                alt="French tips manicure"
                style={{ maxWidth: "150px", paddingBottom: "30px" }}
              />
            </>
          </div>
          <div style={{ padding: "20px" }}>
            <h3 style={pinkHeaderStyle}>Pedicures</h3>
            <img src={lotus} alt="lotus" style={xsmImg} />
            <p style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Pamper your feet with a relaxing pedicure that includes
              exfoliation, nail shaping, and the perfect polish. Feel refreshed
              from heel to toe.
            </p>
            <img
              src={pedicure}
              alt="Creative nail design"
              style={medImageStyle}
            />
          </div>
          <div style={{ padding: "20px" }}>
            <h3 style={pinkHeaderStyle}>Nail Art</h3>
            <img src={lotus} alt="lotus" style={xsmImg} />
            <p style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Elevate your nail game with our creative nail art services. From
              elegant and understated designs to bold and extravagant
              masterpieces, our artists can make your nails stand out.
            </p>
            <img
              src={nailArt}
              alt="Creative nail design"
              style={medImageStyle}
            />
          </div>
        </div>
      </div>
      <section style={{ ...containerStyle, ...border }}>
        <h2 style={headerText}>Book Your Nail Experience Today</h2>
        <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Ready to experience the ultimate in nail care? Booking with us is
          simple and convenient. Just sign up or log in and choose your
          preferred service, select a date and time that works for you, and
          we'll take care of the rest.
          <br></br>
          <p style={pinkHeaderStyle}>
            See you soon! . . .{" "}
            <img
              src={nailExperience}
              alt="nail experience"
              style={{ maxWidth: "50px" }}
            />
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
