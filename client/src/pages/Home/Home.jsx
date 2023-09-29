import React from 'react';
// import About from '../AboutUs/AboutUs';
import Services from '../Services/Services';
import homepageImage from '../../assets/images/homepage-pic.png'

const Home = () => (
  <div>
    <div className="flex items-center justify-center p-14 xl:px-56 xl:py-20">
      <div className="flex justify-between items-center">
        <div className="content w-1/2 lg:pr-20 text-left">
          <p className="uppercase text-black text-opacity-50">what we offer</p>
          <p className="text-black capitalize font-medium text-2xl mt-2">
            Nail Services
          </p>
          <p className="font-light mt-3">
          <About />
            At our nail salon, we embrace a holistic approach to enhance your health and beauty. Our dedicated team collaborates closely with clients, focusing on a personal level to bring their vision of a radiant image to life. Our commitment revolves around achieving perfection not only in the quality of our nail services but also in the exceptional customer experience we deliver.
          </p>
          <Services />
        </div>
        <div className="image-section h-96 w-96 px-10 relative ml-10">
          <div className="rounded-full bg-primary bg-opacity-40 h-64 w-64 absolute top-0 left-0" />
          <div className="rounded-full bg-decoration bg-opacity-40 h-28 w-28 absolute -bottom-4 right-0" />

          <div className="absolute h-full object-contain object-center top-0">
            <img src={homepageImage} alt="girlImg" className="h-full m-auto" />
            <div className="border-homepageDeco border-4 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;

