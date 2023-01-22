import React from "react";
import { HeroData } from "../Data/HeroData";
const Hero = () => {
  return (
    <>
      <div className="w-screen text-[#f0ac14] mt-5 ">
        <h2 className="text-3xl capitalize text-center w-screen">
          Inspiration for your first order
        </h2>
      </div>
      <div className="mb-5">
        <div className="grid grid-cols-3 lg:grid-cols-6">
        {
          HeroData.map((item, index)=>{
            const {name, image} = item;
            return(
              <>
              <div className="mt-5" key={index}>
              <div className="text-[#f0ac14] w-24  m-auto rounded-full " >
                <img src={image} alt="" className="rounded-full" />
              </div>
              <h2 className="text-center text-[#f0ac14]">{name}</h2>
              </div>
              </>
            )
          })        
        }
        </div>
        </div>
    </>
  );
};

export default Hero;
