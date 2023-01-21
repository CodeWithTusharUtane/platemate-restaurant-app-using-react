import React from "react";
import {BsInstagram, BsFacebook, BsLinkedin, BsTwitter, BsGithub} from 'react-icons/bs'
const Footer = () => {
  return (
    <>
      <div className="bg-gray-900 lg:flex lg:justify-evenly lg:pt-10">
    {/* Section */}
        <div className=" ">
          {/* heading */}
          <div className="text-3xl text-center text-[#f0ac14]">We are Available in</div>
          {/* items in it */}
            <div className="text-center mt-4 mb-4 text-2xl">
              <ul>
                <li className="mt-3">New Delhi- Capital of India</li>
                <li className="mt-3">Pune- Educational Capital of India</li>
                <li className="mt-3">Jaipur- The Pink City</li>
                <li className="mt-3">Mumbai- The City of Dreams</li>
                <li className="mt-3">Kolkata- City of Joy</li>
                <li className="mt-3">Chennai- Cultural Capital of India</li>
                <li className="mt-3">Hydrabad- City of Pearls</li>
                <li className="mt-3">Goa-  God's own Abode</li>
                <li className="mt-3">Agra- City of Taj</li>
                <li className="mt-3">Nagpur- Tiger Capital of India</li>
              </ul>
            </div>
        </div>
        {/* Section */}
        <div className=" ">
          {/* heading */}
          <div className="text-3xl text-center text-[#f0ac14]">Top Cuisines</div>
          {/* items in it */}
          <div className="text-center mt-4 mb-4 text-2xl">
            <ul>
              <li className="mt-3">American</li>
              <li className="mt-3">Chinese</li>
              <li className="mt-3">Italian</li>
              <li className="mt-3">Indian</li>
              <li className="mt-3">Fast Food</li>
              <li className="mt-3">South Indian</li>
              <li className="mt-3">North Indian</li>
            </ul>
          </div>
        </div>
        {/* Section */}
        <div className=" ">
          {/* heading */}
          <div className="text-3xl text-center text-[#f0ac14]">Top Facilities</div>
          {/* items in it */}
          <div className="text-center mt-4 mb-4 text-2xl">
            <ul>
              <li className="mt-3">Rooftop</li>
              <li className="mt-3">Veg Friendly</li>
              <li className="mt-3">Non-Veg Friendly</li>
              <li className="mt-3">OutDoor Seating</li>
              <li className="mt-3">Private Dining</li>
            </ul>
          </div>
        </div>
        {/* Section */}
        <div className=" ">
          {/* heading */}
          <div className="text-3xl text-center text-[#f0ac14]">About Us</div>
          {/* items in it */}
          <div className="text-center mt-4 mb-4 text-2xl">
              <ul>
                <li className="mt-3">Contact Us</li>
                <li className="mt-3">Blog</li>
                <li className="mt-3">Privacy Policy</li>
                <li className="mt-3">Terms & Condition</li>
              </ul>
          </div>
        </div>
        {/* Section */}
        <div className="">
          {/* heading */}
          <div className="text-3xl text-center text-[#f0ac14]">PlateMate</div>
          {/* items in it */}
          <div className="text-center mt-4 mb-4 text-2xl">
            Find the Best Deals, Discounts and Offers 
            {/* Socials */}
            <div className="">
              {/* logos and links init */}
              <div className="mt-5 flex items-center justify-center gap-2 ">
                <span className=""><BsInstagram/></span>
                Instagram
              </div>

              <div className="mt-5 flex items-center justify-center gap-2 ">
                <span className=""><BsTwitter/></span>
                Twitter
              </div>

              <div className="mt-5 flex items-center justify-center gap-2 ">
                <span className=""><BsLinkedin/></span>
                LinkedIn
              </div>

              <div className="mt-5  flex items-center justify-center gap-2 ">
                <span className=""><BsFacebook/></span>
                Facebook
              </div>

              <div className="mt-5 pb-5 flex items-center justify-center gap-2 ">
                <span className=""><BsGithub/></span>
                Github
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
