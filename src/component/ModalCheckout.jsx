import React from 'react'
import { useDispatch } from 'react-redux';
import { checkout } from '../redux-toolkit/action/movieActions';
import { useNavigate } from "react-router-dom";


function ModalCheckout({ closeModal }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleConfirm = () => {
    dispatch(checkout());
    alert('Successfully')
    navigate('/')
    closeModal();

    
  };

  return (
    <>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n\t\t.animated {\n\t\t\t-webkit-animation-duration: 1s;\n\t\t\tanimation-duration: 1s;\n\t\t\t-webkit-animation-fill-mode: both;\n\t\t\tanimation-fill-mode: both;\n\t\t}\n\n\t\t.animated.faster {\n\t\t\t-webkit-animation-duration: 500ms;\n\t\t\tanimation-duration: 500ms;\n\t\t}\n\n\t\t.fadeIn {\n\t\t\t-webkit-animation-name: fadeIn;\n\t\t\tanimation-name: fadeIn;\n\t\t}\n\n\t\t.fadeOut {\n\t\t\t-webkit-animation-name: fadeOut;\n\t\t\tanimation-name: fadeOut;\n\t\t}\n\n\t\t@keyframes fadeIn {\n\t\t\tfrom {\n\t\t\t\topacity: 0;\n\t\t\t}\n\n\t\t\tto {\n\t\t\t\topacity: 1;\n\t\t\t}\n\t\t}\n\n\t\t@keyframes fadeOut {\n\t\t\tfrom {\n\t\t\t\topacity: 1;\n\t\t\t}\n\n\t\t\tto {\n\t\t\t\topacity: 0;\n\t\t\t}\n\t\t}\n\t"
    }}
  />
 
  <div
    className="main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster"
    style={{ background: "rgba(0,0,0,.7)" }}
  >
    <div className="border border-teal-500 shadow-lg modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
      <div className="modal-content py-4 text-left px-6">
 
        <div className="flex justify-between items-center pb-3">
          <p className="text-2xl font-bold">Header</p>
          <div className="modal-close cursor-pointer z-50">
            <svg
              className="fill-current text-black"
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={18}
              viewBox="0 0 18 18"
            >
              <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
            </svg>
          </div>
        </div>
   
        <div className="my-5">
          <p>
            Are you sure to chcekout?
          </p>
        </div>
      
        <div className="flex justify-end pt-2">
          <button
          onClick={() => {
            closeModal();
          }}
          className="focus:outline-none modal-close px-4 bg-gray-400 p-3 rounded-lg text-black hover:bg-gray-300">
            Cancel
          </button>
          <button 
           onClick={handleConfirm}
          className="focus:outline-none px-4bg-blue-500 p-3 ml-3 rounded-lg text-white bg-blue-500">
            Confirm
          </button>
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default ModalCheckout
