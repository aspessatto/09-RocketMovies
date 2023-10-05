import axios from 'axios';

export const api = axios.create({
  baseURL: "https://movienotes-api-upb6.onrender.com" 
});