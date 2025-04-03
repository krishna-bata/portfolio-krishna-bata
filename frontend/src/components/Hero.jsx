import React from "react";
import { useNavigate } from "react-router-dom";
import { bio } from "../assets/data.js";

const Hero = () => {
  const navigate = useNavigate()
  return (
    <div className="w-full lg:h-[80vh] flex flex-col lg:flex-row gap-12 justify-between text-start items-center px-8 lg:px-0">
      {/* left side */}
      <div className="flex flex-col gap-8">
        <p className="text-2xl text-gray-700">
          Hey, I'am{" "}
          <span className="font-bold">{bio.name.split(" ")[0]} 👋🏻</span>
        </p>
        <p className="text-6xl lg:text-8xl font-bold w-1/2">
          <span className="text-primary-color">
            {bio.roles[0].split(" ")[0]}
          </span>{" "}
          {bio.roles[0].split(" ")[1]}
        </p>
        <p className="text-xl text-gray-700 w-2/3">{bio.description}</p>
        <div className="flex gap-8">
          <button
            className="text-base font-semibold bg-primary-color text-white w-fit px-6 py-3 rounded-xl hover:-translate-y-2 transition-transform duration-300"
            onClick={() => navigate("/contact")}
          >
            Get In Touch
          </button>
          <button className="text-base font-semibold bg-white border border-gray-500 text-black w-fit px-6 py-3 rounded-xl hover:-translate-y-2 transition-transform duration-300">
            <a href={bio.resume} target="_blank">
              View Resume
            </a>
          </button>
        </div>
        <div className="flex gap-4 sm:gap-8">
          <a
            href={bio.insta}
            target="_blank"
            className="text-3xl font-bold hover:text-primary-color"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href={bio.github}
            target="_blank"
            className="text-3xl font-bold hover:text-primary-color"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href={bio.linkedin}
            target="_blank"
            className="text-3xl font-bold hover:text-primary-color"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
      {/* right side  */}
      <div className="h-[380px] w-[380px] lg:h-[440px] lg:w-[440px] rounded-full border border-gray-500 p-12">
        <div className="h-[280px] w-[280px] lg:h-[340px] lg:w-[340px] rounded-full overflow-hidden">
          <img className="w-full h-full object-cover" src={bio.image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
