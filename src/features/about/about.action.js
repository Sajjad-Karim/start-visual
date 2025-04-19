import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAboutApi, saveAboutApi } from "./api";

// GET content
export const getAbout = createAsyncThunk(
  "about/get",
  async (_, { rejectWithValue }) => {
    try {
      const res = await getAboutApi();
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

// SAVE content
export const saveAbout = createAsyncThunk(
  "about/save",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await saveAboutApi(payload);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);
