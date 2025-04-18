import { createSlice } from "@reduxjs/toolkit";
import { uploadHero, getHero, deleteHero } from "./hero.actions";

const initialState = {
  // upload media states
  isUploadHeroLoading: false,
  isUploadHeroSuccess: false,
  isUploadHeroFailed: false,

  // get media states
  isGetHeroLoading: false,
  isGetHeroSuccess: false,
  isGetHeroFailed: false,

  // delete media states
  isDeleteHeroLoading: false,
  isDeleteHeroSuccess: false,
  isDeleteHeroFailed: false,

  heroMedia: [],
  error: null,
  message: null,
};

const heroMediaSlicer = createSlice({
  name: "hero",
  initialState,
  reducers: {
    // Fixed typo from 'reducer' to 'reducers'
    resetUploadHeroState: (state) => {
      state.isUploadHeroLoading = false;
      state.isUploadHeroSuccess = false;
      state.isUploadHeroFailed = false;
      state.error = null;
      state.message = null;
    },
    resetGetHeroState: (state) => {
      state.isGetHeroLoading = false;
      state.isGetHeroSuccess = false;
      state.isGetHeroFailed = false;
      state.error = null;
    },
    resetDeleteHeroState: (state) => {
      state.isDeleteHeroLoading = false;
      state.isDeleteHeroSuccess = false;
      state.isDeleteHeroFailed = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Upload cases
      .addCase(uploadHero.pending, (state) => {
        state.isUploadHeroLoading = true;
      })
      .addCase(uploadHero.fulfilled, (state, action) => {
        state.isUploadHeroLoading = false;
        state.isUploadHeroSuccess = true;
        state.message = action.payload.message;
        // state.heroMedia = [...state.heroMedia, action.payload.data];
      })
      .addCase(uploadHero.rejected, (state, action) => {
        state.isUploadHeroLoading = false;
        state.isUploadHeroFailed = true;
        state.error = action.payload?.error || "Upload failed";
      })

      // Get cases
      .addCase(getHero.pending, (state) => {
        state.isGetHeroLoading = true;
      })
      .addCase(getHero.fulfilled, (state, action) => {
        state.isGetHeroLoading = false;
        state.isGetHeroSuccess = true;
        state.heroMedia = action.payload;
      })
      .addCase(getHero.rejected, (state, action) => {
        state.isGetHeroLoading = false;
        state.isGetHeroFailed = true;
        state.error = action.payload?.error || "Failed to load media";
      })

      // Delete cases
      .addCase(deleteHero.pending, (state) => {
        state.isDeleteHeroLoading = true;
      })
      .addCase(deleteHero.fulfilled, (state, action) => {
        state.isDeleteHeroLoading = false;
        state.isDeleteHeroSuccess = true;
        // state.heroMedia = state.heroMedia.filter(
        //   (media) => media._id !== action.payload.id
        // );
      })
      .addCase(deleteHero.rejected, (state, action) => {
        state.isDeleteHeroLoading = false;
        state.isDeleteHeroFailed = true;
        state.error = action.payload?.error || "Delete failed";
        state.message = action.payload?.message;
      });
  },
});

export default heroMediaSlicer.reducer;
export const { resetUploadHeroState, resetGetHeroState, resetDeleteHeroState } =
  heroMediaSlicer.actions;
