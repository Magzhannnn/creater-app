import { createStore } from "redux";
import { loadState, saveState } from "./local-storage";
import { rootReducer } from "./rootReducer";
import throttle from "lodash/throttle";

export const configureStore = () => {
  const persistedState = loadState();

  const store = createStore(
    rootReducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  store.subscribe(
    throttle(() => {
      saveState({
        users: store.getState().users,
        blogs: store.getState().blogs,
      });
    }, 1000)
  );

  return store;
};
