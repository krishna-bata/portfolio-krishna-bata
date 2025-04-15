import React from "react";
import Title from "./Title";
import { useSelector } from "react-redux";
import { selectSkills } from "../redux/userSlice.js";

const Skills = () => {
  const skills = useSelector(selectSkills)
  return (
    <div className="my-16 px-8 lg:px-0">
      <Title title="Skills" />
      <div className="mt-16">
        <div className="flex flex-wrap justify-center gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center border border-gray-200 w-35 sm:w-40 hover:shadow-lg transition-shadow"
            >
              <div className="mb-2 sm:mb-4 w-20 h-20">
                <img src={skill.image} alt={skill.name} />
              </div>
              <p className="text-lg font-semibold text-gray-700">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
