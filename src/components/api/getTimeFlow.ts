import { httpClient } from 'utils/httpClient';

export const getTimeFlow = () => httpClient.get('/').then((response) => response.data);
