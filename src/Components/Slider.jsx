import React, { useState } from "react";
import { slider } from "../Data/SliderData";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
const Slider = () => {
  const [current, setCurrent] = useState(0);
  const length = slider.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const previousSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <>
      <div className="text-[#f0ac14]">
        <div className="">
          {slider.map((slide, index) => {
            return (
              <div
                className={index === current ? "slide-active" : "slide"}
                key={index}
              >
                {index === current && (
                  <>
                    <div className=" m-auto flex ">
                    <FaArrowAltCircleLeft
                      className="left-arrow w-24 mt-[100px] md:mt-[130px] lg:mt-[70px] "
                      onClick={previousSlide}
                      size={30}
                    />
                      <div className=" w-[600px] text-center md:w-[900px] lg:w-[800px] lg:flex lg:m-auto">
                        <div className="">
                      <h2 className="text-xl mt-5">{slide.title}</h2>
                      <h4 className="mt-3 text-white hidden md:flex lg:flex">{slide.descripton}</h4>
                        </div>

                      <img src={slide.image} alt="" className="h-40 m-auto"/>
                      </div>
                      <FaArrowAltCircleRight
                      className="right-arrow w-24 mt-[100px] md:mt-[130px] lg:mt-[70px] "
                      onClick={nextSlide}
                      size={30}
                    />
                    </div>
                   
                    
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Slider;
