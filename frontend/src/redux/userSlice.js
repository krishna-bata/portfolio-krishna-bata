import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchUserBioData,
  fetchUserEducation,
  fetchUserExperience,
  fetchUserProjects,
  fetchUserSkills,
  sendMessage,
} from "../app/api.js";

const initialState = {
  bio: {},
  projects: [],
  experiences: [],
  skills: [],
  education: [],
  status: "idle",
  error: "",
  contact: {},
};

const userBioDataAction = createAction("user/getBioData");
const userProjectsAction = createAction("user/getUserProjects");
const userExperienceAction = createAction("user/getUserExperience");
const userEducationAction = createAction("user/getUserEducation");
const userSkillsAction = createAction("user/getUserSkills");
const userSendMessageAction = createAction("user/sendUserMessage");

const userBioDataAsync = createAsyncThunk(userBioDataAction, async () => {
  const bioData = await fetchUserBioData();
  return bioData;
});

const userProjectsAsync = createAsyncThunk(userProjectsAction, async () => {
  const projects = await fetchUserProjects();
  return projects;
});

const userExperienceAsync = createAsyncThunk(userExperienceAction, async () => {
  const experience = await fetchUserExperience();
  return experience;
});

const userEducationAsync = createAsyncThunk(userEducationAction, async () => {
  const education = await fetchUserEducation();
  return education;
});

const userSkillsAsync = createAsyncThunk(userSkillsAction, async () => {
  const skills = await fetchUserSkills();
  return skills;
});

const userSendMessageAsync = createAsyncThunk(
  userSendMessageAction,
  async (data) => {
    const message = await sendMessage(data);
    return message;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userBioDataAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(userBioDataAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.bio = action.payload;
      })
      .addCase(userBioDataAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.payload;
      })
      .addCase(userProjectsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(userProjectsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.projects = action.payload;
      })
      .addCase(userProjectsAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.payload;
      })
      .addCase(userExperienceAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(userExperienceAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.experiences = action.payload;
      })
      .addCase(userExperienceAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.payload;
      })
      .addCase(userEducationAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(userEducationAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.education = action.payload;
      })
      .addCase(userEducationAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.payload;
      })
      .addCase(userSkillsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(userSkillsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.skills = action.payload;
      })
      .addCase(userSkillsAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.payload;
      })
      .addCase(userSendMessageAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(userSendMessageAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.contact = action.payload;
      })
      .addCase(userSendMessageAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.payload;
      });
  },
});

export const selectBioData = (state) => state.user.bio;
export const selectProjects = (state) => state.user.projects;
export const selectExperience = (state) => state.user.experiences;
export const selectEducation = (state) => state.user.education;
export const selectSkills = (state) => state.user.skills;
export const selectMessage = (state) => state.user.message;
export {
  userBioDataAsync,
  userProjectsAsync,
  userExperienceAsync,
  userEducationAsync,
  userSkillsAsync,
  userSendMessageAsync,
};

export default userSlice.reducer;
