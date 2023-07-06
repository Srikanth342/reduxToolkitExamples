import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchMoviesAPI,
  fetchMovieDetailsAPI,
} from "../../common/apis/movieApi";

const initialState = {
  movies: {},
  shows: {},
  selectedMovieOrShow: {},
};

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async ({ s, type }) => {
    try {
      const response = await fetchMoviesAPI(s, type);
      return response.data;
    } catch (error) {
      console.log("error", error);
    }
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async ({ s, type }) => {
    try {
      const response = await fetchMoviesAPI(s, type);
      return response.data;
    } catch (error) {
      console.log("error", error);
    }
  }
);

export const fetchAsyncMovieOrShowsDetails = createAsyncThunk(
  "movies/fetchAsyncMovieOrShowsDetails",
  async (id) => {
    try {
      const response = await fetchMovieDetailsAPI(id);
      return response.data;
    } catch (error) {
      console.log("error", error);
    }
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovieOrShow: (state, action) => {
      state.selectedMovieOrShow = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncMovies.pending, (state, action) => {
      console.log("loading..");
    });
    builder.addCase(fetchAsyncMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
    builder.addCase(fetchAsyncMovies.rejected, (state, action) => {
      console.log("testing", action.payload);
    });
    builder.addCase(fetchAsyncShows.fulfilled, (state, action) => {
      state.shows = action.payload;
    });
    builder.addCase(
      fetchAsyncMovieOrShowsDetails.fulfilled,
      (state, action) => {
        state.selectedMovieOrShow = action.payload;
      }
    );
  },
});

export default movieSlice.reducer;
export const { addMovies, removeSelectedMovieOrShow } = movieSlice.actions;
