import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/3">{overview}</p>
      <div className="">
        <button className="bg-gray-500 text-white text-lg p-4 px-12 bg-opacity-50 rounded-md">
          ▶ Play
        </button>
        <button className="bg-gray-500 text-white text-lg p-4 px-12 mx-2 bg-opacity-50 rounded-md">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
