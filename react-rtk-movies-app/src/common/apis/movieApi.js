import axios from "axios";
import { APIKey } from "./movieApiKey";

const axiosInstance = axios.create({
  baseURL: `http://www.omdbapi.com`,
});

export const fetchMoviesAPI = (s, type) => {
  return axiosInstance.get(`?apikey=${APIKey}&s=${s}&type=${type}`);
};

export const fetchMovieDetailsAPI = (id) => {
  return axiosInstance.get(`?apikey=${APIKey}&i=${id}&plot=full`);
};
