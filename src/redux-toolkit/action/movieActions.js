import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = 'fa5db092';

const getRandomPrice = () => Math.floor(Math.random() * 91) * 10000 + 100000;



const initialRandomPrice = getRandomPrice();

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async ({ searchTerm, page }) => {
  try {
    
    const response = await axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}&page=${page}&type=movie`);
    
    
    const moviesWithRandomPrice = response.data.Search.map((movie) => ({
      ...movie,
      price: initialRandomPrice,
    }));
   

    return { movies: moviesWithRandomPrice, totalResults: response.data.totalResults };
  } catch (error) {
    throw error;
  }
});

export const fetchMovieDetail = createAsyncThunk('movies/fetchMovieDetail', async (imdbId) => {
    try {
      
      const response = await axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbId}`);
  
      
    
      const movieDetailWithPrice = {
        ...response.data,
        price: initialRandomPrice,
      };

      return movieDetailWithPrice;
      
    } catch (error) {
      throw error;
    }
  });

  export const addToCart = (movie) => {
    return { type: 'movies/addToCart', payload: movie };
  };
  
  export const removeFromCart = (imdbId) => {
    return { type: 'movies/removeFromCart', payload: imdbId };
  };
  
  export const checkout = () => {
    return { type: 'movies/checkout' };
  };