export const CHANGE_SLIDE = "CHANGE_SLIDE";
export const GO_TO_SLIDE = "GO_TO_SLIDE";
export const INIT_ITEMS_LENGTH = "INIT_ITEMS_LENGTH";
export const INIT_SLIDES = "INIT_SLIDES";

export const initSLides = (slides) => ({
  type: INIT_SLIDES,
  payload: slides,
});

export const initItemsLength = (itemsLength) => ({
  type: INIT_ITEMS_LENGTH,
  payload: itemsLength,
});

export const changeSlide = (direction = 1, slide, itemsLength) => ({
  type: CHANGE_SLIDE,
  payload: { direction, slide, itemsLength },
});

export const goToSlide = (number) => ({
  type: GO_TO_SLIDE,
  payload: number,
});
