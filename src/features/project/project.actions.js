import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  deleteProjectApi,
  getProjectsApi,
  toggleProjectStatusApi,
  updateProjectApi,
  uploadProjectApi,
} from './api';

export const uploadProject = createAsyncThunk(
  'projects/add',
  async (payload, { rejectWithValue }) => {
    try {
      const res = await uploadProjectApi(payload);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response ? err.response.data : err.message);
    }
  }
);
export const updateProject = createAsyncThunk(
  'projects/update',
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      const res = await updateProjectApi(id, formData);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response ? err.response.data : err.message);
    }
  }
);

export const getProjects = createAsyncThunk(
  'projects/get',
  async (_, { rejectWithValue }) => {
    try {
      const res = await getProjectsApi();
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response ? err.response.data : err.message);
    }
  }
);
export const toggleProjectStatus = createAsyncThunk(
  'projects/toggle-status',
  async (payload, { rejectWithValue }) => {
    try {
      const res = await toggleProjectStatusApi(payload);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response ? err.response.data : err.message);
    }
  }
);
export const deleteProject = createAsyncThunk(
  'projects/delete',
  async (payload, { rejectWithValue }) => {
    try {
      const res = await deleteProjectApi(payload);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response ? err.response.data : err.message);
    }
  }
);
