import React, { useState } from "react";
import { BsChevronCompactLeft,BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const CarouselCard = () => {
  const slides = [
    {
      url: "https://img.freepik.com/premium-photo/different-fruits-vegetables-healthy_3236-1554.jpg?w=2000",
    },
    {
      url: "https://themes.muffingroup.com/be/vegetables/wp-content/uploads/2017/09/home_vegetables_slider_bg.jpg",
    },
    {
      url: "https://thumbs.dreamstime.com/z/liver-detox-diet-food-concept-fruits-vegetables-nuts-olive-oil-garlic-cleansing-body-healthy-eating-top-view-flat-lay-liver-166983115.jpg",
    },
    {
      url: "https://img.freepik.com/premium-photo/green-red-healthy-food-round-dish-with-vegetables-green-vegetables-leafy-food-background-generative-ai-copy-space-wide-banner_256259-4156.jpg",
    },
    {
      url: "https://thumbs.dreamstime.com/z/fruit-vegetables-7134858.jpg",
    },
  ];

    const [currentIndex,setCurrentIndex] = useState(0);

    const prevSlide = () =>{
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const nextSlide = () =>{
        const isLastSlide = currentIndex === slides.length-1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const goToSLide = (slideIndex) =>{
        setCurrentIndex(slideIndex)
    }

  return (
    <>
      {/* relative h-56 overflow-hidden rounded-lg md:h-96 */}
      <div className="md:max-w-[1400px] md:h-[500px] max-w-[500px] h-[380px] w-full m-auto py-10 px-4 relative group">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-300"
        >
          {/* left arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer ">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          {/* right arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer ">
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
        </div>
        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => {
            return (
              <div
                className="text-2xl cursor-pointer"
                key={slideIndex}
                onClick={() => goToSLide(slideIndex)}
              >
                <RxDotFilled />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CarouselCard;
