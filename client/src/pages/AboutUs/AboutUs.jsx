import React from 'react';


// import aboutimg from 'path to image here '

const About = () => {
    return (
        <div className='about-section'>
            <div className='container'>
                <div className='about__wrapper'>
                    
                    <div className='about__content'>
                        <div className='about__heading'>
                            <div
                               headingLeft="About Us"
                               headingRight=" Story "
                               subheading="Welcome"

                            />
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua et dolore magna aliqua. </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et </p>
                        <div />
                    </div>

                    <div className='about__images'>
                        <div
                            // cardimg={aboutimg}
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;