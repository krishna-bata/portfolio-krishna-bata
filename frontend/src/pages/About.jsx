import React from 'react'
import Title from '../components/Title'
import Education from '../components/Education';

const About = () => {
  return (
    <div className="container mx-auto">
      <div className="my-16 w-full lg:h-[80vh] px-8 lg:px-0">
        <Title title="About Me" />
        <div className=" flex flex-col gap-4 mt-16">
          <p className="text-xl sm:text-xl leading-relaxed sm:leading-loose">
            I am a passionate software engineer with 2 years of experience in{" "}
            <span className="text-primary-color font-bold">
              MERN stack development
            </span>
            , specializing in building scalable and dynamic web applications.
          </p>
          <p className="text-xl leading-relaxed sm:leading-loose">
            I hold a Bachelor's degree in Computer Science from Sant Rawool
            Maharaj College, Kudal, with an impressive CGPA of{" "}
            <span className="text-primary-color font-bold">9.10</span>.
            Additionally, I achieved{" "}
            <span className="text-primary-color font-bold">71.54 %</span> in HSC
            and an outstanding{" "}
            <span className="text-primary-color font-bold">91.40 %</span>
            in SSC.
          </p>
          <p className="text-xl leading-relaxed sm:leading-loose">
            I have successfully developed{" "}
            <span className="text-primary-color font-bold">10+</span> projects
            like an eCommerce platform, a social media app, android
            apllications, and a movie information platform.
          </p>
          <p className="text-xl leading-relaxed sm:leading-loose">
            My expertise lies in creating intuitive user interfaces, efficient
            backend systems, and seamless state management usin g{" "}
            <span className="text-primary-color font-bold">Redux Toolkit</span>.
            solve real-world problems.
          </p>
          <p className="text-xl leading-relaxed sm:leading-loose">
            Currently, I’m exploring{" "}
            <span className="text-primary-color font-bold">
              Next.js and Typescript
            </span>{" "}
            to enhance my skill set.
          </p>
        </div>
      </div>
      <Education />
    </div>
  );
}

export default About