/* eslint-disable prettier/prettier */
export const getStorageItem = () => {
  return process.env.NEXT_PUBLIC_TOKEN;
  // return localStorage.getItem('token');
};
