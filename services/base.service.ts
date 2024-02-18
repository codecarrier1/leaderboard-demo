import axios from 'axios';

export const BaseService = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});
