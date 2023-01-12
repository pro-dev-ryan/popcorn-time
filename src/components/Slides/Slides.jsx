import React from "react";
import Slide from "./Slides.module.css";
import { CiPlay1 } from "react-icons/ci";
const Slides = ({ image }) => {
  return (
    <div className={Slide.container}>
      <div className={`${Slide.img}`}>
        <img src={image.url} className="w-full" alt="image" />
      </div>
      <div className={`${Slide.imageContent} flex flex-col gap-5 text-white`}>
        <h3 className="text-5xl font-textHead text-white font-black">
          {image.caption}
        </h3>
        <p className="font-thin font-text">{image?.description}</p>
        <div className="flex gap-10">
          <button className="px-2 py-1 rounded-md font-button text-lg secondary-button">
            See Details
          </button>
          <button
            className={` flex items-center py-1 rounded-md font-button text-lg primaryButton`}
          >
            <CiPlay1 className="playIcon flex gap-5" />
            Play Trailer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slides;
