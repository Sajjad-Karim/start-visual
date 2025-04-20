import { createSlice } from '@reduxjs/toolkit';
import { getProjects } from './project.actions';

const initialState = {
  // upload media states
  isUploadProjectLoading: false,
  isUploadProjectSuccess: false,
  isUploadProjectFailed: false,

  // get media states
  isGetProjectLoading: false,
  isGetProjectSuccess: false,
  isGetProjectFailed: false,

  // delete media states
  isDeleteProjectLoading: false,
  isDeleteProjectSuccess: false,
  isDeleteProjectFailed: false,

  projectMedia: [],
  error: null,
  message: null,
};

const projectSlicer = createSlice({
  name: 'project',
  initialState,
  reducers: {
    // Fixed typo from 'reducer' to 'reducers'
    resetUploadProjectState: (state) => {
      state.isUploadProjectLoading = false;
      state.isUploadProjectSuccess = false;
      state.isUploadProjectFailed = false;
      state.error = null;
      state.message = null;
    },
    resetGetProjectsState: (state) => {
      state.isGetProjectLoading = false;
      state.isGetProjectSuccess = false;
      state.isGetProjectFailed = false;
      state.error = null;
    },
    resetDeleteHeroState: (state) => {
      state.isDeleteProjectLoading = false;
      state.isDeleteProjectSuccess = false;
      state.isDeleteProjectFailed = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Upload cases
      //   .addCase(uploadHero.pending, (state) => {
      //     state.isUploadHeroLoading = true;
      //   })
      //   .addCase(uploadHero.fulfilled, (state, action) => {
      //     state.isUploadHeroLoading = false;
      //     state.isUploadHeroSuccess = true;
      //     state.message = action.payload.message;
      //     // state.heroMedia = [...state.heroMedia, action.payload.data];
      //   })
      //   .addCase(uploadHero.rejected, (state, action) => {
      //     state.isUploadHeroLoading = false;
      //     state.isUploadHeroFailed = true;
      //     state.error = action.payload?.error || "Upload failed";
      //   })

      // Get cases
      .addCase(getProjects.pending, (state) => {
        state.isGetProjectLoading = true;
      })
      .addCase(getProjects.fulfilled, (state, action) => {
        state.isGetProjectLoading = false;
        state.isGetProjectSuccess = true;
        state.projectMedia = action.payload;
      })
      .addCase(getProjects.rejected, (state, action) => {
        state.isGetProjectLoading = false;
        state.isGetProjectFailed = true;
        state.error = action.payload?.error || 'Failed to load projects';
      });

    //   // Delete cases
    //   .addCase(deleteHero.pending, (state) => {
    //     state.isDeleteHeroLoading = true;
    //   })
    //   .addCase(deleteHero.fulfilled, (state, action) => {
    //     state.isDeleteHeroLoading = false;
    //     state.isDeleteHeroSuccess = true;
    //     // state.heroMedia = state.heroMedia.filter(
    //     //   (media) => media._id !== action.payload.id
    //     // );
    //   })
    //   .addCase(deleteHero.rejected, (state, action) => {
    //     state.isDeleteHeroLoading = false;
    //     state.isDeleteHeroFailed = true;
    //     state.error = action.payload?.error || "Delete failed";
    //     state.message = action.payload?.message;
    //   });
  },
});

export default projectSlicer.reducer;
export const {
  resetUploadProjectState,
  resetDeleteHeroState,
  resetGetProjectsState,
} = projectSlicer.actions;
