import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../redux-toolkit/action/movieActions';
import { NavLink } from 'react-router-dom';
import { formatCurrency } from '../helper/helper';

function Home() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const totalResults = useSelector((state) => state.movies.totalResults);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchMovies({ searchTerm: 'Avengers', page: currentPage }));
  }, [dispatch, currentPage]);

  const totalPages = Math.ceil(totalResults / 10);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };



  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
         List Movie
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {movies.map((movie) => (
            <div key={movie.imdbID} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />

               
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <NavLink to={`Detail/${movie.imdbID}`}>

                      <span aria-hidden="true" className="absolute inset-0" />
                      {movie.Title}
                    </NavLink>
                    
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{movie.Type}</p>
                  <p className="mt-1 text-sm text-gray-500">{movie.Year}</p>
                 
                  <p className="mt-1 text-sm text-gray-500">{movie.Genre}</p>
                </div>
               
             
                <p className="text-sm font-medium text-gray-900">
                {formatCurrency(movie.price)}
                  
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* ... Bagian untuk pagination */}
      <div className="mt-4 flex justify-center">
        <button
          className="mx-2 px-4 py-2 border bg-blue-500 rounded-md"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="mx-2">{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          className="mx-2 px-4 py-2 border bg-blue-500 rounded-md"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Home;
