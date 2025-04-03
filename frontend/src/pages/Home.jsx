import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Project from "../components/Project";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Education from "../components/Education";
import { useDispatch } from "react-redux";
import { userBioDataAsync, userEducationAsync, userExperienceAsync, userProjectsAsync, userSkillsAsync } from "../redux/userSlice";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userBioDataAsync());
    dispatch(userProjectsAsync());
    dispatch(userExperienceAsync())
    dispatch(userEducationAsync())
    dispatch(userSkillsAsync())
  }, [dispatch]);
  return (
    <div className="container mx-auto">
      <Hero />
      <Project />
      <Experience />
      <Skills />
      <Education />
    </div>
  );
};

export default Home;
