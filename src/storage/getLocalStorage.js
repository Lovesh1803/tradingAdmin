import { StorageConstant } from "../constant/StorageConstant";

export const getAuthLocalStorage = async () => {
  const response = {};
  response.isLoggedIn = await localStorage.getItem(StorageConstant.IS_LOGGED_IN);
  response.loginHeader = await localStorage.getItem(StorageConstant.LOGIN_HEADER);
  return response;
};

export const setAuthLocalStorage = (loginHeader) => {
  localStorage.setItem(StorageConstant.IS_LOGGED_IN, true);
  localStorage.setItem(StorageConstant.LOGIN_HEADER, loginHeader);
};

export const clearAuthLocalStorage = () => {
  localStorage.removeItem(StorageConstant.IS_LOGGED_IN)
  localStorage.removeItem(StorageConstant.LOGIN_HEADER)
};
