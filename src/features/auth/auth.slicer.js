import { createSlice } from '@reduxjs/toolkit';
import { authAdmin } from './auth.action';

const initialState = {
  authData: null,

  //   get contact data states
  isAdminLoading: false,
  isAdminSuccess: false,
  isAdminFailed: false,

  error: null,
  message: null,
};

const authSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    resetAdminState: (state) => {
      state.isAdminLoading = false;
      state.isAdminSuccess = false;
      state.isAdminFailed = false;
      state.error = null;
      state.message = null;
      state.authData = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authAdmin.pending, (state) => {
        state.isAdminLoading = true;
      })
      .addCase(authAdmin.fulfilled, (state, action) => {
        state.isAdminLoading = false;
        state.isAdminSuccess = true;
        state.authData = action.payload;
        localStorage.setItem('authToken', action.payload?.userData?.role);
      })
      .addCase(authAdmin.rejected, (state, action) => {
        state.isAdminLoading = false;
        state.isAdminSuccess = false;
        state.isAdminFailed = true;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
// ✅ Export reset actions
export const { resetAdminState } = authSlice.actions;
