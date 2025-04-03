import React from 'react'
import Title from './Title';
import { useSelector } from 'react-redux';
import { selectExperience } from '../redux/userSlice';

const Experience = () => {
  const experience = useSelector(selectExperience)
  return (
    <div className="my-16 px-8 lg:px-0">
      <Title title="Experience" />
      <div className="mt-16 flex flex-col gap-8">
        {experience.map((exp, index) => (
          <div
            key={index}
            className="px-4 py-8 flex flex-col gap-4 shadow-lg rounded-xl hover:-translate-y-2 transition-transform duration-300 border border-gray-200"
          >
            <div className="flex flex-col justify-between lg:flex-row lg:items-center gap-4">
              <p className="flex flex-col lg:flex-row gap-2 lg:items-center text-2xl lg:text-3xl font-semibold">
                <span>{exp.role}</span>
                <span className="text-base font-semibold">{exp.company}</span>
              </p>
              <p className="text-xl font-semibold">{exp.date}</p>
            </div>
            <hr />
            <div className="flex flex-col gap-2">
              {exp.desc.map((item,ind) => (
                <p key={ind} className="text-base text-gray-700">
                  {item}
                </p>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              {exp.skills.map((skill,index)=>(
                <div key={index} className="text-sm bg-gray-700 text-white px-4 py-1 rounded-lg">{skill}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience