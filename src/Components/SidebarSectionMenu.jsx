import React from "react";

const SidebarSectionMenu = () => {
  return (
    <>
      <div className="w-full h-24 mt-2 mb-2  bg-white">
        
          <div className="text-end border-2 border-black">
          <select name="Price" id="">
          <option value="₹">Price:₹</option>
          <option value="₹₹">Price:₹₹</option>
          <option value="₹₹₹">Price:₹₹₹</option>
          <option value="₹₹₹₹">Price:₹₹₹₹</option>
          <option value="₹₹₹₹₹">Price:₹₹₹₹₹</option>
          </select>
          </div>
          <div className="text-end mt-5 border-2">
          <select name="Category" id="">
          <option value="₹">Category: Burger</option>
          <option value="₹₹"></option>
          <option value="₹₹₹"></option>
          <option value="₹₹₹₹"></option>
          <option value="₹₹₹₹₹"></option>
          </select>
          </div>

          
        
      </div>
    </>
  );
};

export default SidebarSectionMenu;
