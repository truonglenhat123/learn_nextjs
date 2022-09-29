import React, { useState } from "react";
import { SliderData } from "./SliderData";
import Image from "next/image";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

function Slider({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <>
      <div id="mu">
        <h1>manchester</h1>
        <div>
          {SliderData.map((slide, index) => {
            // eslint-disable-next-line react/jsx-key
            return (
              // eslint-disable-next-line react/jsx-key
              <div
                key={index}
                className={
                  index === current
                    ? "opacity-[1] ease-in duration-1000"
                    : "opacity-0"
                }
              >
                <div className="relative flex justify-center p-4">
                  <FaArrowCircleLeft
                  onClick={prevSlide}
                    className="absolute top-[50%] left-[30px] text-yellow-50 cursor-pointer select-none z-[2]"
                    size={50}
                  />
                  {index === current && (
                    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
                    <img
                      className="img-slider"
                      src={slide.image}
                      width="1440"
                      height="600"
                    />
                  )}
                  <FaArrowCircleRight
                   onClick={nextSlide}
                    className="absolute top-[50%] right-[30px] text-yellow-50 cursor-pointer select-none z-[2]"
                    size={50}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Slider;
