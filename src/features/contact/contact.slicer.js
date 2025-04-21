import { createSlice } from '@reduxjs/toolkit';
import { updateContact, getContact } from './contact.action';

const initialState = {
  contactData: null,
  //   update or save contact data states
  isSaveContactLoading: false,
  isSaveContactSuccess: false,
  isSaveContactFailed: false,

  //   get contact data states
  isContactLoading: false,
  isContactSuccess: false,
  isContactFailed: false,

  error: null,
  message: null,
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    resetSaveContactState: (state) => {
      state.isSaveContactLoading = false;
      state.isSaveContactSuccess = false;
      state.isSaveContactFailed = false;
      state.error = null;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getContact.pending, (state) => {
        state.isContactLoading = true;
      })
      .addCase(getContact.fulfilled, (state, action) => {
        state.isContactLoading = false;
        state.isContactSuccess = true;
        state.contactData = action.payload;
      })
      .addCase(getContact.rejected, (state, action) => {
        state.isContactLoading = false;
        state.isContactSuccess = false;
        state.isContactFailed = true;
        state.error = action.payload;
      })
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
