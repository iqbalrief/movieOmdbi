import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import moviesReducer from './slice/movieSlice';


export const store = configureStore({
  reducer: {
    movies: moviesReducer,

  },
  middleware: [thunk],
});

export default store;
