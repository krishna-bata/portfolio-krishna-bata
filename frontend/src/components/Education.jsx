import React from "react";
import Title from "./Title.jsx";
import { useSelector } from "react-redux";
import { selectEducation } from "../redux/userSlice.js";

const Education = () => {
  const education = useSelector(selectEducation)
  return (
    <div className="my-16 px-8 lg:px-0">
      <Title title="Education" />
      <div className="mt-16 relative">
        {/* Vertical Line */}
        <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-primary-color"></div>
        <div className="space-y-12">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`flex flex-col items-center ${
                index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              }`}
            >
              {/* Content */}
              <div className="flex flex-col gap-2 w-full lg:w-1/2 lg:px-8 text-left">
                <h3 className="text-2xl lg:text-3xl font-semibold">
                  {edu.degree}
                </h3>
                <p className="text-xl font-medium">{edu.college}</p>
                <div className="flex gap-12 lg:gap-24">
                  <span className="text-base">{edu.date}</span>
                  <span className="text-base font-semibold">{edu.grade}</span>
                </div>
                <p className="text-base text-gray-700">{edu.desc}</p>
              </div>
              {/* Circle */}
              <div className="w-6 h-6 hidden lg:block bg-primary-color rounded-full border-4 border-white z-10"></div>
              {/* Spacer */}
              <div className="hidden lg:block lg:w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
