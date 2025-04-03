import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="container mx-auto py-8 px-8 lg:px-0">
      <div className="flex justify-between items-center">
        <NavLink to="/" className="text-3xl font-bold text-primary-color">
          KRISHNA.<span className="text-black">B</span>
        </NavLink>
        <div className="hidden gap-8 md:flex">
          <NavLink
            className="text-xl font-semibold hover:text-primary-color"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="text-xl font-semibold hover:text-primary-color"
            to="/project"
          >
            Projects
          </NavLink>
          <NavLink
            className="text-xl font-semibold hover:text-primary-color"
            to="/about"
          >
            About
          </NavLink>
        </div>
        <NavLink
          className="hidden text-xl font-semibold hover:text-primary-color md:block"
          to="/contact"
        >
          <i className="fa-solid fa-headset"></i>
        </NavLink>
        <button
          className="block text-xl font-semibold md:hidden"
          onClick={() => (visible ? setVisible(false) : setVisible(true))}
        >
          <i className={`fa-solid fa-${visible ? "xmark" : "bars"}`}></i>
        </button>
      </div>
      {/* Mobile Menu */}
      {visible ? (
        <div className="mt-8 w-full">
          <div className="flex flex-col gap-4">
            <NavLink
              className="text-xl font-semibold hover:text-primary-color"
              to="/"
              onClick={()=>setVisible(false)}
            >
              Home
            </NavLink>
            <NavLink
              className="text-xl font-semibold hover:text-primary-color"
              to="/project"
              onClick={()=>setVisible(false)}
            >
              Projects
            </NavLink>
            <NavLink
              className="text-xl font-semibold hover:text-primary-color"
              to="/about"
              onClick={()=>setVisible(false)}
            >
              About
            </NavLink>
            <NavLink
              className="text-xl font-semibold hover:text-primary-color"
              to="/contact"
              onClick={()=>setVisible(false)}
            >
              Get In Touch
            </NavLink>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
