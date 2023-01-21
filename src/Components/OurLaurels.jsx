import React from "react";
import { AiOutlineAlignRight, AiOutlineAlignLeft } from "react-icons/ai";
import laurel from '../Assests/laurel.png'

const OurLaurels = () => {
  return (
    <div className="mb-5 lg:flex lg:items-center justify-evenly">
      <div className="mt-5 text-[#f0ac14]">
        <h5 className="text-center text-xl text-[gray] underline underline-offset-8">
          Awards & Recognition
        </h5>
        <h2 className="text-center text-4xl mt-4">Our Laurels</h2>
        <h6 className="text-2xl mt-3 flex items-center text-white justify-center">
          <span>
            <AiOutlineAlignRight />
          </span>
          Bib Gourmond
          <span>
            <AiOutlineAlignLeft />
          </span>
        </h6>
        <h6 className="text-2xl mt-3 flex items-center text-white justify-center">
          <span>
            <AiOutlineAlignRight />
          </span>
          Rising Star
          <span>
            <AiOutlineAlignLeft />
          </span>
        </h6>
        <h6 className="text-2xl mt-3 flex items-center text-white justify-center">
          <span>
            <AiOutlineAlignRight />
          </span>
          AA Hospilaty
          <span>
            <AiOutlineAlignLeft />
          </span>
        </h6>
        <h6 className="text-2xl mt-3 flex items-center text-white justify-center">
          <span>
            <AiOutlineAlignRight />
          </span>
          Outstanding Chef's
          <span>
            <AiOutlineAlignLeft />
          </span>
        </h6>
      </div>
      <div className="hidden lg:flex">
        <img src={laurel} alt="" />
      </div>
    </div>
  );
};

export default OurLaurels;
