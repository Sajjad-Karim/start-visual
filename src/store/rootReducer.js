import { combineReducers } from "@reduxjs/toolkit";
import heroMediaSlicer from "../features/hero/hero.slicer";
const rootReducer = combineReducers({
  hero: heroMediaSlicer,
});

export default rootReducer;
