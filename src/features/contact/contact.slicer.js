import { createSlice } from '@reduxjs/toolkit';
import { updateContact } from './contact.action';

const initialState = {
  contactData: [],
  //   update or save about data states
  isSaveContactLoading: false,
  isSaveContactSuccess: false,
  isSaveContactFailed: false,

  //   get about data states
  isAboutLoading: false,
  isAboutSuccess: false,
  isAboutFailed: false,

  error: null,
  message: null,
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    resetSaveContactState: (state) => {
      state.isSaveContactLoading = null;
      state.isSaveContactSuccess = false;
      state.isSaveContactFailed = false;
      state.error = null;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // .addCase(getAbout.pending, (state) => {
      //   state.isAboutLoading = true;
      // })
      // .addCase(getAbout.fulfilled, (state, action) => {
      //   state.isAboutLoading = false;
      //   state.isAboutSuccess = true;
      //   state.aboutData = action.payload;
      //   state.message = action.payload?.message;
      // })
      // .addCase(getAbout.rejected, (state, action) => {
      //   state.isAboutLoading = false;
      //   state.isAboutSuccess = false;
      //   state.isAboutFailed = true;
      //   state.error = action.payload;
      // })
      .addCase(updateContact.pending, (state) => {
        state.isSaveContactLoading = true;
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        state.isSaveContactLoading = false;
        state.isSaveContactSuccess = true;
        state.message = action.payload?.message;
      })
      .addCase(updateContact.rejected, (state, action) => {
        state.isSaveContactFailed = true;
        state.isSaveContactLoading = false;
        state.isSaveContactSuccess = false;
        state.error = action.payload;
      });
  },
});

export default contactSlice.reducer;
// ✅ Export reset actions
export const { resetSaveContactState } = contactSlice.actions;
