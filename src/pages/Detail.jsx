import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { fetchMovieDetail, addToCart } from '../redux-toolkit/action/movieActions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { formatCurrency } from '../helper/helper';


function Detail() {
    const { imdbId } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);
  
    const selectedMovie = useSelector((state) => state.movies.selectedMovie);
     
    
    useEffect(() => {
      dispatch(fetchMovieDetail(imdbId));
    }, [dispatch, imdbId]);
  
    if (!selectedMovie) {
      return <div>Loading...</div>;
    }

    const handleAddToCart =  () => {
   
      const movieToAdd = { ...selectedMovie, quantity };
       dispatch(addToCart(movieToAdd));
  
      navigate('/cart');
    };

  
  return (
    <section className="py-10 font-poppins dark:bg-gray-800">
  <div className="max-w-6xl px-4 mx-auto">
    <div className="flex flex-wrap mb-24 -mx-4">
      <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
      <div className="bg-white shadow-lg border-gray-100 max-h-80	 border sm:rounded-3xl p-8 flex space-x-8">
        <div className="h-48 overflow-visible w-1/2">
          <img
            src={selectedMovie.Poster}
            alt={selectedMovie.Title}
          />
        </div>
        <div className="flex flex-col w-1/2 space-y-4">
          <div className="flex justify-between items-start">
            <h2 className="text-3xl font-bold">{selectedMovie.Title}</h2>
            <div className="bg-yellow-400 font-bold rounded-xl p-2">{selectedMovie.imdbRating}</div>
          </div>
          <div>
            <div className="text-sm text-gray-400">Movie</div>
            <div className="text-lg text-gray-800">{selectedMovie.Year}</div>
          </div>
          
          <div className="flex text-2xl font-bold text-a">{formatCurrency(selectedMovie.price)}</div>
        </div>
      </div>
      </div>
      <div className="w-full px-4 md:w-1/2">
        <div className="lg:pl-20">
        
          
          <div className="py-6 mb-6 border-t border-b border-gray-200 dark:border-gray-700">
            <span className="text-base text-gray-600 dark:text-gray-400">
            {selectedMovie.Plot}
            </span>
            <p className="mt-2 text-sm text-blue-500 dark:text-blue-200">
             {selectedMovie.Genre}
             
            </p>
          </div>
          <div className="mb-6 " />
          <div className="flex flex-wrap items-center mb-6">
            <div className="mb-4 mr-4 lg:mb-0">
              <div className="w-28">
                <div className="relative flex flex-row w-full h-10 bg-transparent rounded-lg">
                  <button className="w-20 h-full text-gray-600 bg-gray-100 border-r rounded-l outline-none cursor-pointer dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-300">
                    <span className="m-auto text-2xl font-thin">-</span>
                  </button>
                  <input
                    type="number"
                    className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-100 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black"
                    placeholder={1}
                  />
                  <button className="w-20 h-full text-gray-600 bg-gray-100 border-l rounded-r outline-none cursor-pointer dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-300">
                    <span className="m-auto text-2xl font-thin">+</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="mb-4 lg:mb-0">
              <button className="flex items-center justify-center w-full h-10 p-2 mr-4 text-gray-700 border border-gray-300 lg:w-11 hover:text-gray-50 dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 dark:hover:border-blue-500 dark:hover:text-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className=" bi bi-heart"
                  viewBox="0 0 16 16"
                >
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path>
                </svg>
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              href="#"
              className="w-full px-4 py-3 text-center text-blue-600 bg-blue-100 border border-blue-600 dark:hover:bg-gray-900 dark:text-gray-400 dark:border-gray-700 dark:bg-gray-700 hover:bg-blue-600 hover:text-gray-100 lg:w-1/2 rounded-xl"
            >
              Add to cart
            </button>
          </div>
          <div className="flex gap-4 mb-6">
            <a
              href="#"
              className="w-full px-4 py-3 text-center text-gray-100 bg-blue-600 border border-transparent dark:border-gray-700 hover:border-blue-500 hover:text-blue-700 hover:bg-blue-100 dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-900 rounded-xl"
            >
              Buy now
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  
  )
}

export default Detail