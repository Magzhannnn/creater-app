import { combineReducers } from "redux";
import { blogsReducer } from "./blogs/blogs-reducer";
import { sliderReducer } from "./slider/slider-reducer";
import { usersReducer } from "./users/users-reducer";

export const rootReducer = combineReducers({
  users: usersReducer,
  slider: sliderReducer,
  blogs: blogsReducer,
});
