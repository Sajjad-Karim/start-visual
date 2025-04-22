import { combineReducers } from '@reduxjs/toolkit';
import heroMediaSlicer from '../features/hero/hero.slicer';
import aboutSlicer from '../features/about/about.slicer';
import projectSlicer from '../features/project/project.slicer';
import contactSlicer from '../features/contact/contact.slicer';
import authSlicer from '../features/auth/auth.slicer';
const rootReducer = combineReducers({
  hero: heroMediaSlicer,
  about: aboutSlicer,
  project: projectSlicer,
  contact: contactSlicer,
  auth: authSlicer,
});

export default rootReducer;
