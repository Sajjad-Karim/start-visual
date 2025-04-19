import { createSlice } from "@reduxjs/toolkit";
import { getAbout, saveAbout } from "./about.action";

const initialState = {
  aboutData: null,
  //   update or save about data states
  isSaveAboutLoading: false,
  isSaveAboutSuccess: false,
  isSaveAboutFailed: false,

  //   get about data states
  isAboutLoading: false,
  isAboutSuccess: false,
  isAboutFailed: false,

  error: null,
  message: null,
};

const aboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {
    resetSaveAboutState: (state) => {
      state.isSaveAboutLoading = null;
      state.isSaveAboutSuccess = false;
      state.isSaveAboutFailed = false;
      state.error = null;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAbout.pending, (state) => {
        state.isAboutLoading = true;
      })
      .addCase(getAbout.fulfilled, (state, action) => {
        state.isAboutLoading = false;
        state.isAboutSuccess = true;
        state.aboutData = action.payload;
        state.message = action.payload?.message;
      })
      .addCase(getAbout.rejected, (state, action) => {
        state.isAboutLoading = false;
        state.isAboutSuccess = false;
        state.isAboutFailed = true;
        state.error = action.payload;
      })
      .addCase(saveAbout.pending, (state) => {
        state.isSaveAboutLoading = true;
      })
      .addCase(saveAbout.fulfilled, (state, action) => {
        state.isSaveAboutLoading = false;
        state.isSaveAboutSuccess = true;
        state.message = action.payload?.message;
      })
      .addCase(saveAbout.rejected, (state, action) => {
        state.isSaveAboutFailed = true;
        state.isSaveAboutLoading = false;
        state.isSaveAboutSuccess = false;
        state.error = action.payload;
      });
  },
});

export default aboutSlice.reducer;
// ✅ Export reset actions
export const { resetSaveAboutState } = aboutSlice.actions;
