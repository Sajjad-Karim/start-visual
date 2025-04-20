import { createSlice } from '@reduxjs/toolkit';
import {
  getProjects,
  uploadProject,
  toggleProjectStatus,
  deleteProject,
} from './project.actions';

const initialState = {
  // upload media states
  isUploadProjectLoading: false,
  isUploadProjectSuccess: false,
  isUploadProjectFailed: false,
  // toggle media states
  isToggleProjectStatusLoading: false,
  isToggleProjectStatusSuccess: false,
  isToggleProjectStatusFailed: false,

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
    resetDeleteProjectState: (state) => {
      state.isDeleteProjectLoading = false;
      state.isDeleteProjectSuccess = false;
      state.isDeleteProjectFailed = false;
      state.error = null;
      state.message = null;
    },
    resetToggleState: (state) => {
      state.isToggleProjectStatusFailed = false;
      state.isToggleProjectStatusSuccess = false;
      state.isToggleProjectStatusLoading = false;
      state.error = null;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Upload cases
      .addCase(uploadProject.pending, (state) => {
        state.isUploadProjectLoading = true;
      })
      .addCase(uploadProject.fulfilled, (state, action) => {
        state.isUploadProjectLoading = false;
        state.isUploadProjectSuccess = true;
        state.message = action.payload.message;
      })
      .addCase(uploadProject.rejected, (state, action) => {
        state.isUploadProjectLoading = false;
        state.isUploadProjectFailed = true;
        state.error = action.payload?.error || 'Upload failed';
      })

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
      })

      // toggle cases
      .addCase(toggleProjectStatus.pending, (state) => {
        state.isToggleProjectStatusLoading = true;
      })
      .addCase(toggleProjectStatus.fulfilled, (state, action) => {
        state.isToggleProjectStatusLoading = false;
        state.isToggleProjectStatusSuccess = true;
        state.message = action.payload?.message;
      })
      .addCase(toggleProjectStatus.rejected, (state, action) => {
        state.isToggleProjectStatusLoading = false;
        state.isToggleProjectStatusFailed = true;
        state.error = action.payload?.error || 'toggle failed';
        state.error = action.payload?.message;
      })
      //   // Delete cases
      .addCase(deleteProject.pending, (state) => {
        state.isDeleteProjectLoading = true;
      })
      .addCase(deleteProject.fulfilled, (state, action) => {
        state.isDeleteProjectLoading = false;
        state.isDeleteProjectSuccess = true;
        state.message = action.payload?.message;
      })
      .addCase(deleteProject.rejected, (state, action) => {
        state.isDeleteProjectLoading = false;
        state.isDeleteProjectFailed = true;
        state.error = action.payload?.error || 'Delete failed';
        state.error = action.payload?.message;
      });
  },
});

export default projectSlicer.reducer;
export const {
  resetUploadProjectState,
  resetDeleteProjectState,
  resetGetProjectsState,
  resetToggleState,
} = projectSlicer.actions;
