/* eslint-disable prettier/prettier */
import { getStorageItem } from '../../utils/handler_localStorage';

export const checkIsUserAuthenticated = () => {
  const token = getStorageItem();
  
  return !!token;
};
