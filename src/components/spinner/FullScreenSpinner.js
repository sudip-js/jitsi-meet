import React from "react";

const FullScreenSpinner = ({ loadingMessage }) => {
  return (
    <div
      id="loading-screen"
      className="w-full h-full fixed block top-0 left-0 bg-sidebar opacity-80 z-50"
    >
      <span className="text-white top-1/2 my-0 mx-auto block relative w-0 h-0 font-normal text-3xl">
        {loadingMessage}
      </span>
    </div>
  );
};

export default FullScreenSpinner;
