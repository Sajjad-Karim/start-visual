import { createAsyncThunk } from '@reduxjs/toolkit';
import { updateContactApi } from './api';

// // GET content
// export const getAbout = createAsyncThunk(
//   "about/get",
//   async (_, { rejectWithValue }) => {
//     try {
//       const res = await getAboutApi();
//       return res.data;
//     } catch (err) {
//       return rejectWithValue(err.response?.data || err.message);
//     }
//   }
// );

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
