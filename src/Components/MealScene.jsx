import React from "react";
import meal from "../Assests/meal.mp4";
const MealScene = () => {
  return (
    <>
      <div className="w-full">
        <video src={meal} controls  autoPlay muted loop />
        <div className="text-center text-4xl mt-5 text-[#f0ac14] mb-5">
            A Quick view to Family Enjoy our Authentic Food.
            <div className="">

            </div>
        </div>
      </div>
    </>
  );
};

export default MealScene;
