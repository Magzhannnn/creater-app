import { ADD_BLOG } from "./blogs-actions";

export const blogsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_BLOG:
      return [...state, payload];
    default:
      return state;
  }
};
