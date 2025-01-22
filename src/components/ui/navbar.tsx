import React from "react";
import Button from "./button";

const Navbar = () => {
  return (
    <>
      <nav className="h-20 shadow-xl absolute z-20 w-full backdrop-blur-lg">
        <div className="text-white flex justify-between px-20 items-center h-20">
          <div className="text-3xl font-bold">
            Scale<span className="font-normal text-purple-500">.io</span>
          </div>
          <div className="text-gray-100">
            <ul className="flex gap-20">
              <li className="hover:font-bold text-md duration-150">
                <a href="#">Home</a>
              </li>
              <li className="hover:font-bold text-md duration-150">
                <a href="#">About</a>
              </li>
              <li className="hover:font-bold text-md duration-150">
                <a href="#">Services</a>
              </li>
              <li className="hover:font-bold text-md duration-150">
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>

          <div>
            <Button
              bgColor="white"
              hoverBg="transparent"
              textColor="black"
              buttonText="Login"
              hoverText="white"
            ></Button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
