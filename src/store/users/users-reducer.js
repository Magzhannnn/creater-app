import { isThereSuch } from "../../helpers/AuthValid";
import { USER_REGISTRATION } from "./users-constants";

export const usersReducer = (state = [], { type, payload }) => {
  switch (type) {
    case USER_REGISTRATION: {
      localStorage.setItem("isAuth", "true");
      localStorage.setItem("user", JSON.stringify(payload));
      return [...state, payload];
    }
    default:
      return state;
  }
};
