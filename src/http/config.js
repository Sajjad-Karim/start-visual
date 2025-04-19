import axios from "axios";

export const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const STAR_VISUAL_API = axios.create({
  baseURL: backendUrl,
});
