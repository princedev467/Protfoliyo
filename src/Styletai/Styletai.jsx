import React from 'react';

function Styletai(props) {
  return (
    <div>




      {/* Position */}
      <div className="relative bg-gray-500 h-16">
        <p className="absolute top-0 left-0 bg-red-600 p-1 text-red-50 font-bold">
          Position
        </p>
      </div>

      {/* Text Align */}
      <p className="text-center">center Text</p>

      {/* Line Height */}
      <p className="leading-loose">Line Height </p>

      {/* Letter Spacing */}
      <p className="tracking-wide">Letter Spacing</p>

      {/* Overflow */}
      <div className="w-32 h-10 overflow-hidden bg-gray-300">
        This is long text that will overflow
      </div>

      {/* Cursor */}
      <button className="cursor-pointer bg-blue-500 text-white px-4 py-2">
        Cursor
      </button>

      {/* Shadow */}
   
        <div className="shadow-lg bg-gray-300 p-4 m-4">
          Visible shadow
        </div>

       
      
      

      {/* Opacity */}
      <div className="opacity-50 bg-green-300 p-2">Opacity</div>

      {/* Transition */}
      <div className="transition duration-500 ease-in hover:bg-green-300 p-2 bg-green-100">
        Hover me
      </div>

      {/* Transform */}
      <div className="transform hover:scale-75 bg-green-200 p-2 inline-block">
        Transform
      </div>

      {/* Background  */}
      <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white p-4">
      Background
      </div>

    </div>
  );
}

export default Styletai;