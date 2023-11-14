import { createSlice } from '@reduxjs/toolkit';
import { fetchMovies, fetchMovieDetail } from '../action/movieActions';

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    status: 'idle',
    error: null,
    totalResults: 0,
    selectedMovie: {},
    cart: []
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((movie) => movie.imdbID !== action.payload);
    },
    checkout: (state) => {
      state.cart = []; 
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movies = action.payload.movies;
        state.totalResults = action.payload.totalResults;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchMovieDetail.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovieDetail.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.selectedMovie = action.payload; 
      })
      .addCase(fetchMovieDetail.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      
  },
});




export const { addToCart, removeFromCart, checkout } = moviesSlice.actions;

export default moviesSlice.reducer;
