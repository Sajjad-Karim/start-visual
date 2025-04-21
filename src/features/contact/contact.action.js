import { createAsyncThunk } from '@reduxjs/toolkit';
import { updateContactApi, getContactApi } from './api';

// // GET content
export const getContact = createAsyncThunk(
  'contact/get',
  async (_, { rejectWithValue }) => {
    try {
      const res = await getContactApi();
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

// SAVE content
export const updateContact = createAsyncThunk(
  'contact/update',
  async (payload, { rejectWithValue }) => {
    try {
      const res = await updateContactApi(payload);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);
