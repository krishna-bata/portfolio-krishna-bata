import axios from "axios";
const backendUrl = import.meta.env.VITE_BACKEND_URL;

const fetchUserBioData = async () => {
  const response = await axios.get(backendUrl + "/api/bio/");
  if (response.data.success) {
    return response.data.bio;
  } else {
    return response.data.message;
  }
};

const fetchUserProjects = async () => {
  const response = await axios.get(backendUrl + "/api/project/");
  if (response.data.success) {
    return response.data.projects;
  } else {
    return response.data.message;
  }
};

const fetchUserExperience = async () => {
  const response = await axios.get(backendUrl + "/api/experience/");
  if (response.data.success) {
    return response.data.experiences;
  } else {
    return response.data.message;
  }
};

const fetchUserEducation = async () => {
  const response = await axios.get(backendUrl + "/api/education/");
  if (response.data.success) {
    return response.data.education;
  } else {
    return response.data.message;
  }
};

const fetchUserSkills = async () => {
  const response = await axios.get(backendUrl + "/api/skills/");
  if (response.data.success) {
    return response.data.skills;
  } else {
    return response.data.message;
  }
};

const sendMessage = async (data) => {
  const response = await axios.post(backendUrl + "/api/contact/add",data);
  if (response.data.success) {
    return response.data.contact;
  } else {
    return response.data.message;
  }
};

export {
  fetchUserBioData,
  fetchUserProjects,
  fetchUserExperience,
  fetchUserEducation,
  fetchUserSkills,
  sendMessage,
};
