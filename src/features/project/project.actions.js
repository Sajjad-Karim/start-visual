import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProjectsApi, uploadProjectApi } from './api';

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
// export const deleteHero = createAsyncThunk(
//   "hero/delete",
//   async (payload, { rejectWithValue }) => {
//     try {
//       const res = await deleteHeroApi(payload);
//       return res.data;
//     } catch (err) {
//       return rejectWithValue(err.response ? err.response.data : err.message);
//     }
//   }
// );
