import * as SecureStore from 'expo-secure-store';

export const setAccessToken = async (token: string) => {
  return SecureStore.setItemAsync('accessToken', token);
};

export const setRefreshToken = async (token: string) => {
  return SecureStore.setItemAsync('refreshToken', token);
};

export const getAccessToken = async () => {
  return SecureStore.getItemAsync('accessToken');
};

export const getRefreshToken = async () => {
  return SecureStore.getItemAsync('refreshToken');
};
