import { createSlice } from "@reduxjs/toolkit";
import { uploadHero, getHero, deleteHero } from "./hero.actions";

const initialState = {
  heroMedia: {},
  //upload media states
  isUploadHeroLoading: false,
  isUploadHeroSuccess: false,
  isUploadHeroFailed: false,

  //get media states
  isGetHeroLoading: false,
  isGetHeroSuccess: false,
  isGetHeroFailed: false,

  //delete media states
  isDeleteHeroLoading: false,
  isDeleteHeroSuccess: false,
  isDeleteHeroFailed: false,
  error: {},
};
const heroMediaSlicer = createSlice({
  name: "hero",
  initialState,
  reducer: {
    resetUploadHeroState: (state) => {
      state.isUploadHeroLoading = false;
      state.isUploadHeroSuccess = false;
      state.isUploadHeroFailed = false;
      state.error = {};
    },
    resetGetHeroState: (state) => {
      state.isGetHeroLoading = false;
      state.isGetHeroSuccess = false;
      state.isGetHeroFailed = false;
      state.error = {};
    },
    resetDeleteHeroState: (state) => {
      state.isDeleteHeroLoading = false;
      state.isDeleteHeroSuccess = false;
      state.isDeleteHeroFailed = false;
      state.error = {};
    },
  },
  extraReducers: (builder) => {
    //upload hero cases
    builder.addCase(uploadHero.pending, (state, action) => {
      state.isUploadHeroLoading = true;
    });
    builder.addCase(uploadHero.fulfilled, (state, action) => {
      state.isUploadHeroLoading = false;
      state.isUploadHeroSuccess = true;
    });
    builder.addCase(uploadHero.rejected, (state, action) => {
      state.isUploadHeroLoading = false;
      state.isUploadHeroSuccess = false;
      state.isUploadHeroFailed = true;
      state.error = action.payload.error;
    });
    //get hero cases
    builder.addCase(getHero.pending, (state, action) => {
      state.isGetHeroLoading = true;
    });
    builder.addCase(getHero.fulfilled, (state, action) => {
      state.isGetHeroLoading = false;
      state.isGetHeroSuccess = true;
      state.heroMedia = action.payload;
    });
    builder.addCase(getHero.rejected, (state, action) => {
      state.isGetHeroLoading = false;
      state.isGetHeroSuccess = false;
      state.isGetHeroFailed = true;
      state.error = action.payload.error;
    });

    //delete hero cases
    builder.addCase(deleteHero.pending, (state, action) => {
      state.isDeleteHeroLoading = true;
    });
    builder.addCase(deleteHero.fulfilled, (state, action) => {
      state.isDeleteHeroLoading = false;
      state.isDeleteHeroSuccess = true;
    });
    builder.addCase(deleteHero.rejected, (state, action) => {
      state.isDeleteHeroLoading = false;
      state.isDeleteHeroSuccess = false;
      state.isDeleteHeroFailed = true;
      state.error = action.payload.error;
    });
  },
});

export default heroMediaSlicer.reducer;
export const { resetUploadHeroState, resetGetHeroState, resetDeleteHeroState } =
  heroMediaSlicer.actions;
