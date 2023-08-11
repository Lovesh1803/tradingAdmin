import { IS_ADMIN_LOGIN } from "./types";

export const setIsAdninLogin = (data) => ({
  type: IS_ADMIN_LOGIN,
  payload: data
})