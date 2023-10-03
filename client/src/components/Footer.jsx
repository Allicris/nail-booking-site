import React from 'react';
import { Link } from 'react-router-dom';
import visaLogo from '../assets/images/visa-logo.png';
import mastercardLogo from '../assets/images/mastercard-logo.png';
import amexLogo from '../assets/images/amex-logo.png';
import discoverLogo from '../assets/images/discover-logo.png';

const Footer = () => {
  const columnClasses = 'column w-1/2 xl:w-1/4 px-10';
  const spanCardClasses = 'w-14 flex justify-center items-center text-light-grey mr-4 text-sm py-1 px-2 inline'; // Changed text color to light grey
  const spaceBetweenCardsAndLink = 'mb-4';

  const smallImageStyle = {
    maxWidth: '40px', // Adjust the size as needed
  };

  const creditCardTypes = [
    { logo: visaLogo },
    { logo: mastercardLogo },
    { logo: amexLogo },
    { logo: discoverLogo },
  ];

  return (
    <div className="footer" style={{ backgroundColor: 'black' }}>
      <div className="footer-top bg-black text-primary flex flex-wrap p-10 lg:px-40 lg:py-28">
        <div className={columnClasses}>
          <p className="mt-3 font-thin pr-10">We accept all major credit cards</p>
          <div className="flex mt-6">
            {creditCardTypes.map((cardType, index) => (
              <div key={index} className={`${spanCardClasses}`}>
                <img
                  src={cardType.logo}
                  alt={`Credit Card ${index}`}
                  style={smallImageStyle} // Apply the smallImageStyle here
                />
              </div>
            ))}
          </div>
        </div>
        <div className={columnClasses}>
          <p className={`text-xl font-normal ${spaceBetweenCardsAndLink}`}>
            <Link to="/aboutus" className="text-light-grey hover:underline"> {/* Changed text color to light grey */}
              About Us
            </Link>
          </p>
          <p className="font-light mt-2">
            Contact Us: <a href="mailto:bookings@maanailheaven.com" className="text-light-grey"> {/* Changed text color to light grey */}
              bookings@maanailhaven.com
            </a>
          </p>
        </div>
      </div>
      <div className="footer-bottom bg-primary-dark pt-5 pb-4 flex items-center justify-center">
        <p className="text-sm font-light text-light-grey"> {/* Changed text color to light grey */}
          here is copyright info blah blah
        </p>
      </div>
    </div>
  );
};

export default Footer;
