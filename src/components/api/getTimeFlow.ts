import { axiosInstance } from 'utils/axios';

export const getTimeFlow = () => axiosInstance.get('/').then((response) => response.data);
