import React from "react";
import { BsChevronCompactLeft } from "react-icons/bs";
import { BsChevronCompactRight } from "react-icons/bs";
import { Autoplay, EffectFlip } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Slider from "./hero.module.css";
import "swiper/css/effect-flip";
import "swiper/css";
import { images } from "../Images";
import Slides from "../Slides/Slides";
const Hero = () => {
  // SwiperCore.use([Autoplay, EffectFlip]);
  return (
    <>
      <div className="hero">
        <div className={Slider.main}>
          <Swiper
            modules={[Autoplay, EffectFlip]}
            grabCursor={true}
            spaceBetween={0}
            effect="flip"
            slidesPerView={1}
            // autoplay={{ delay: 7000 }}
          >
            {images.map((image, i) => (
              <SwiperSlide key={i} image={image}>
                <Slides image={image} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="navigation">
          <div>
            <button>
              <BsChevronCompactLeft
                className="absolute left-5 hover:left-3 transition-all duration-200"
                color="white"
                size={25}
              />
            </button>
          </div>
          <div>
            <button>
              <BsChevronCompactRight
                className="absolute right-5 hover:right-3 transition-all duration-200"
                color="white"
                size={25}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
