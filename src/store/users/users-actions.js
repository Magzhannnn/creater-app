import { USER_LOGIN, USER_REGISTRATION } from "./users-constants";

export const userRergistration = (user) => ({
  type: USER_REGISTRATION,
  payload: user,
});
