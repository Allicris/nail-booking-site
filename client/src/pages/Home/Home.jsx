import React from 'react';
import Services from '../Services/Services';
// import SavedAppointments from './pages/savedAppointments';
import serviceImage from '../../assets/images/service-pic.png';
import creativeNailsImage from '../../assets/images/creativeNails-pic.png';
import premiumProductImage from '../../assets/images/premiumProduct-pic.png';


function Home() {
  const containerStyle = {
    backgroundColor: 'black',
    color: 'white',
    padding: '20px',
  };

  const redHeaderStyle = {
    color: '#66FCF1',
  };

  // Define a style for smaller images
  const smallImageStyle = {
    maxWidth: '300px', // Adjust the size as needed
  };

  return (
    <div style={containerStyle}>
      <header>
        <h1 style={redHeaderStyle}>Welcome to M.A.A. Nail Havent"</h1>
        <p>Your Premier Nail Services Provider</p>
      </header>
      <section>
        <h2 style={redHeaderStyle}>Our Mission</h2>
        <p>We believe that beauty begins at your fingertips. Our mission is to elevate your nail care experience to a whole new level. Whether you're looking for a relaxing manicure, a stunning pedicure, or intricate nail art, we've got you covered.</p>
      </section>
      <section>
        <h2 style={redHeaderStyle}>Why Choose Nails?</h2>
        <ul>
          <li>
            <h3 style={redHeaderStyle}>Premium Products</h3>
            {/* Apply the smallImageStyle to the image */}
            <img src={premiumProductImage} alt="French tips manicure" style={smallImageStyle} />
            <p>We use only the highest quality nail products and polishes to pamper your nails. Your safety and satisfaction are our top priorities.</p>
          </li>
        </ul>
      </section>
      <section>
        <h2 style={redHeaderStyle}>Our Services</h2>
        <>
          <Services />
          {/* Apply the smallImageStyle to the image */}
          <img src={serviceImage} alt="French tips manicure" style={smallImageStyle} />
        </>
        <div>
          <h3 style={redHeaderStyle}>Manicures</h3>
          <p>Treat your hands to a rejuvenating manicure that leaves your nails looking flawless. Choose from a variety of nail shapes, colors, and designs to express your unique style.</p>
        </div>
        <div>
          <h3 style={redHeaderStyle}>Pedicures</h3>
          <p>Pamper your feet with a relaxing pedicure that includes exfoliation, nail shaping, and the perfect polish. Feel refreshed from heel to toe.</p>
        </div>
        <div>
          <h3 style={redHeaderStyle}>Nail Art</h3>
          {/* Apply the smallImageStyle to the image */}
          <img src={creativeNailsImage} alt="Creative nail design" style={smallImageStyle} />
          <p>Elevate your nail game with our creative nail art services. From elegant and understated designs to bold and extravagant masterpieces, our artists can make your nails stand out.</p>
        </div>
      </section>
      <section>
        <h2 style={redHeaderStyle}>Book Your Nail Experience Today</h2>
       
        <p>Ready to experience the ultimate in nail care? Booking with us is simple and convenient. Just choose your preferred service, select a date and time that works for you, and we'll take care of the rest.</p>
      </section>
    </div>
  );
}

export default Home;
