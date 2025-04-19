import { combineReducers } from "@reduxjs/toolkit";
import heroMediaSlicer from "../features/hero/hero.slicer";
import aboutSlicer from "../features/about/about.slicer";
const rootReducer = combineReducers({
  hero: heroMediaSlicer,
  about: aboutSlicer,
});

export default rootReducer;
