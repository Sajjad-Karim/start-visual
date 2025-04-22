import { createAsyncThunk } from '@reduxjs/toolkit';
import { authAdminApi } from './api';

// SAVE content
export const authAdmin = createAsyncThunk(
  'auth/admin',
  async (payload, { rejectWithValue }) => {
    try {
      const res = await authAdminApi(payload);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);
