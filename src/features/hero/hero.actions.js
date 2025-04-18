import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteHeroApi, getHeroApi, uploadHeroApi } from "./api";

export const uploadHero = createAsyncThunk(
  "hero/upload",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await uploadHeroApi(payload);
      return res.data;
    } catch (err) {
      return rejectWithValue({
        error: err.response ? err.response.data : err.message,
      });
    }
  }
);

export const getHero = createAsyncThunk(
  "hero/get",
  async (_, { rejectWithValue }) => {
    try {
      const res = await getHeroApi();
      return res.data;
    } catch (err) {
      return rejectWithValue({
        error: err.response ? err.response.data : err.message,
      });
    }
  }
);
export const deleteHero = createAsyncThunk(
  "hero/delete",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await deleteHeroApi(payload);
      return res.data;
    } catch (err) {
      return rejectWithValue({
        error: err.response ? err.response.data : err.message,
      });
    }
  }
);
