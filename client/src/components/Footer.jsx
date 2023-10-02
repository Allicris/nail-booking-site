// import React from 'react';

// const Footer = () => {
//   const columnClasses = 'column w-1/2 xl:w-1/4 px-10';
//   const spanCardClasses = 'w-14 flex justify-center items-center bg-primary text-black mr-4 text-sm py-1 px-2';
//   return (
//     <div className="footer">
//       <div className="footer-top bg-black text-primary flex flex-wrap p-10 lg:px-40 lg:py-28">
//         <div className={columnClasses}>
//           <p className="text-4xl font-light text-left">Write something here </p>
//           <p className="mt-3 font-thin pr-10">
//            Beauty matters
//           </p>
//           <div className="flex mt-6">
//             <span className={`${spanCardClasses} font-bold`}>Visa</span>
//             <span className={spanCardClasses}>shopify</span>
//             <span className={spanCardClasses}>paypal</span>
//           </div>
//         </div>
//         <div className={columnClasses}>
//           <p className="text-xl font-normal">Our Salon</p>
//           <p className="font-light mt-2">About Us</p>
//           <p className="font-light mt-2">Contact Us</p>
//         </div>
//         <div className={`${columnClasses} mt-10 xl:mt-0`}>
//           <p className="text-xl font-normal">Contact Us</p>
//           <p className="font-light mt-2 flex items-center">
//             <span className="mr-3">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//               >
//                 <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011-1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
//               </svg>
//             </span>
//             Lorem Ipsum 133/2
//             <br />
//             USA
//           </p>
//           {/* <p className="font-light mt-3 flex items-center">
//             <span className="mr-3">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//               >
//                 <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5-V 3z" />
//               </svg>
//             </span> */}
          
//           {/* </p> */}

//           {/* <p className="font-light mt-3 flex items-center">
//             {/* <span className="mr-3">
//               {/* <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//               > */}
//                 {/* <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
//                 <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /> */}
//               {/* </svg> */}
//             {/* </span> */}
//             {/* email@email.com
//           </p> */}
//         </div>
//       </div>
//       <div className="footer-bottom bg-primary-dark pt-5 pb-4 flex items-center justify-center">
//         <p className="text-sm font-light text-primary-light">
//           here is copyright info blah blah
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Footer;

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for creating clickable links.

const Footer = () => {
  const columnClasses = 'column w-1/2 xl:w-1/4 px-10';
  const spanCardClasses = 'w-14 flex justify-center items-center bg-primary text-black mr-4 text-sm py-1 px-2';

  return (
    <div className="footer" style={{ backgroundColor: 'black' }}>
      <div className="footer-top bg-black text-primary flex flex-wrap p-10 lg:px-40 lg:py-28">
        <div className={columnClasses}>
          <p className="mt-3 font-thin pr-10">Beauty matters</p>
          <div className="flex mt-6">
            <span className={`${spanCardClasses} font-bold`}>Visa</span>
            <span className={spanCardClasses}>shopify</span>
            <span className={spanCardClasses}>paypal</span>
          </div>
        </div>
        <div className={columnClasses}>
          {/* Add a clickable "About Us" button */}
          <p className="text-xl font-normal">
            <Link to="/about-us" className="text-primary hover:underline">
              About Us
            </Link>
          </p>
          {/* Removed "Our Salon" */}
          <p className="font-light mt-2">Contact Us: <a href="mailto:bookings@maanailheaven.com">bookings@maanailheaven.com</a></p>
        </div>
        <div className={`${columnClasses} mt-10 xl:mt-0`}>
          <p className="text-xl font-normal">Contact Us</p>
          <p className="font-light mt-2 flex items-center">
            Lorem Ipsum 133/2
            <br />
            USA
          </p>
        </div>
      </div>
      <div className="footer-bottom bg-primary-dark pt-5 pb-4 flex items-center justify-center">
        <p className="text-sm font-light text-primary-light">
          here is copyright info blah blah
        </p>
      </div>
    </div>
    
  );
};

export default Footer;
