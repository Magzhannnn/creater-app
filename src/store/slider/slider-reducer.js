import {
  CHANGE_SLIDE,
  goToSlide,
  GO_TO_SLIDE,
  initItemsLength,
  INIT_ITEMS_LENGTH,
  INIT_SLIDES,
} from "./slider-actions";

const initialState = {
  number: 0,
  itemsLength: 0,
  slides: [],
};

export const sliderReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case INIT_SLIDES: {
      return { ...state, slides: payload };
    }
    case INIT_ITEMS_LENGTH: {
      return { ...state, itemsLength: payload };
    }
    case CHANGE_SLIDE: {
      const { direction, slide, itemsLength } = payload;

      if (slide + direction < 0) {
        return { ...state, number: itemsLength - 1 };
      } else {
        return { ...state, number: (slide + direction) % itemsLength };
      }
    }
    case GO_TO_SLIDE: {
      return { ...state, number: payload };
    }
    default:
      return state;
  }
};
