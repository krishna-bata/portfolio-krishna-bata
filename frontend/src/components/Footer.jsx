import React from "react";
import {useNavigate} from "react-router-dom"

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto my-16 px-8 lg:px-0 flex flex-col gap-8 lg:flex-row justify-between items-center text-center">
      <div className="flex flex-col gap-4 justify-center items-center">
        <p className="text-2xl text-gray-700 font-semibold">
          Interested in working together
          <span className="text-primary-color">?</span>
        </p>
        <div className="flex gap-8">
          <button
            className="text-base font-semibold bg-primary-color text-white w-fit px-4 py-2 rounded-xl"
            onClick={() => navigate("/contact")}
          >
            Get In Touch
          </button>
          <button
            className="text-base font-semibold bg-white border border-gray-500 text-black w-fit px-4 py-2 rounded-xl"
            onClick={() => navigate("/project")}
          >
            Browse Project
          </button>
        </div>
      </div>
      <div className="flex flex-col text-base text-gray-700">
        <p>Copyright © 2025 Krishna Bata.</p>
        <p>All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
