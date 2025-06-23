import React, { useState, useRef, useEffect } from "react";

const GameDetails = () => {
  const images = [
    "Gameimages/main_poster.png",
    "Gameimages/2ndthumbnail.png",
    "Gameimages/3rdthumbnail.png",
    "Gameimages/4ththumbnail.png",
    "Gameimages/5ththumbnail.png",
    "Gameimages/6ththumbnail.png",
    "Gameimages/7ththumbnail.png",
    "Gameimages/8ththumbnail.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isHeartHovered, setIsHeartHovered] = useState(false);
  const heartTimeoutRef = useRef(null);

  useEffect(() => {
    // Cleanup timeout on component unmount
    return () => {
      if (heartTimeoutRef.current) {
        clearTimeout(heartTimeoutRef.current);
      }
    };
  }, []);

  const handleHeartEnter = () => {
    if (heartTimeoutRef.current) {
      clearTimeout(heartTimeoutRef.current);
    }
    setIsHeartHovered(true);
    heartTimeoutRef.current = setTimeout(() => {
      setIsHeartHovered(false);
    }, 500);
  };

  const goToPrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(slideIndex);
  };

  const handleTransitionEnd = () => {
    setIsAnimating(false);
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div className="bg-[#d9edfd] h-165 p-8 relative z-10">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-md shadow-gray-300 p-6">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-500 mb-4">
          <span>
            <a href="https://www.nintendo.com/us/store/">Store</a>
          </span>{" "}
          &gt;{" "}
          <span>
            <a href="https://www.nintendo.com/us/store/games/">Games</a>
          </span>{" "}
          &gt; <span className="font-semibold">Stardew Valley</span>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Image Gallery (Carousel) */}
          <div className="lg:w-1/2 relative">
            <div
              className="relative pb-[56.25%] overflow-hidden rounded-[10px] group cursor-zoom-in"
              onClick={toggleZoom}
            >
              <div className="absolute inset-0 flex transition-transform duration-500 ease-in-out">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={`${import.meta.env.BASE_URL}${image}`}
                    alt={`Slide ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out ${
                      index === currentIndex
                        ? "translate-x-0"
                        : index < currentIndex
                        ? "-translate-x-full"
                        : "translate-x-full"
                    }`}
                    onTransitionEnd={handleTransitionEnd}
                  />
                ))}
              </div>
              {/* Carousel Navigation Buttons */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
                className="absolute top-1/2 left-6 transform -translate-y-1/2 text-white p-4 rounded-full opacity-0 group-hover:opacity-100 hover:opacity-100 transition-opacity duration-300 text-5xl"
              >
                &#10094;
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="absolute top-1/2 right-6 transform -translate-y-1/2 text-white p-4 rounded-full opacity-0 group-hover:opacity-100 hover:opacity-100 transition-opacity duration-300 text-5xl"
              >
                &#10095;
              </button>
            </div>

            {/* Zoom Modal */}
            {isZoomed && (
              <div
                className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center"
                onClick={toggleZoom}
              >
                <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
                  <img
                    src={`${import.meta.env.BASE_URL}${images[currentIndex]}`}
                    alt="Zoomed view"
                    className="max-w-full max-h-[90vh] object-contain"
                  />
                  <button
                    onClick={toggleZoom}
                    className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300"
                  >
                    ×
                  </button>
                </div>
              </div>
            )}

            <div className="flex justify-center gap-3 mt-2">
              {images.map((image, slideIndex) => (
                <div
                  key={slideIndex}
                  className={`w-20 h-9 overflow-hidden rounded-[10px] cursor-pointer flex items-center justify-center border-b-4 transition-all duration-200 hover:scale-110 ${
                    currentIndex === slideIndex
                      ? "border-red-600"
                      : "border-transparent hover:border-red-600"
                  }`}
                  onClick={() => goToSlide(slideIndex)}
                >
                  <img
                    src={`${import.meta.env.BASE_URL}${image}`}
                    alt={`Thumbnail ${slideIndex + 1}`}
                    className={`object-cover transition-opacity duration-200 ${
                      currentIndex === slideIndex
                        ? "opacity-100"
                        : "opacity-70 hover:opacity-100"
                    }`}
                  />
                </div>
              ))}
            </div>

            {/* ESRB Rating */}
            <div className="mt-6 flex items-center">
              <a href="https://www.esrb.org/ratings-guide/">
                <img
                  src={`${import.meta.env.BASE_URL}esrb.jpg`}
                  alt="ESRB Everyone 10+"
                  className="h-16 w-12 mr-4"
                />
              </a>
              <div>
                <a href="https://www.esrb.org/ratings-guide/">
                  <p className="text-xs text-[#484848]">
                    Fantasy Violence, Mild Blood, Mild Language, Simulated{" "}
                    <br />
                    Gambling, Use of Alcohol, Use of Tobacco
                  </p>
                </a>
                <a href="https://www.esrb.org/ratings-guide/">
                  <div className="border-b border-gray-300 my-1"></div>
                </a>
                <a href="https://www.esrb.org/ratings-guide/">
                  <p className="text-xs text-gray-600">Users Interact</p>
                </a>
              </div>
            </div>

            {/* Nintendo Switch Compatibility */}
            <div className="mt-6 p-4 bg-[#F8F9F9] rounded-xl">
              <div className="flex items-center text-sm font-bold text-gray-700">
                <svg
                  className="w-5 h-5 text-[#0067d6] mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-[#484848] text-xs">
                  Nintendo Switch 2 Compatibility Information
                </span>
              </div>
              <p className="text-xs text-gray-600 ml-7">
                Supported - Game behavior is consistent with Nintendo Switch.
              </p>
            </div>
          </div>

          {/* Right Column - Game Information */}
          <div className="lg:w-1/2">
            <h1 className="text-[22px] sm:text-[24px] md:text-[28px] lg:text-[28px] font-bold mb-2 text-[#484848]">
              Stardew Valley
            </h1>
            <div className="mb-4">
              <div className="flex items-center">
                <span className="font-bold w-16">Version</span>
                <span className="text-[#484848] bg-[#f8f8f8] py-[6px] px-[12px] sm:py-[8px] sm:px-[16px] md:py-[10px] md:px-[20px] rounded ml-4">
                  Nintendo Switch
                </span>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex items-center">
                <span className="font-bold w-16">Edition</span>
                <span className="text-[#484848] bg-[#f8f8f8] py-[6px] px-[12px] sm:py-[8px] sm:px-[16px] md:py-[10px] md:px-[20px] rounded ml-4">
                  Digital
                </span>
              </div>
            </div>
            <div className="flex items-center gap-115 mb-6">
              <p className="text-3xl font-bold text-[#484848]">$14.99</p>
              <button
                className="text-[#e60012] hover:text-[#ac000d] hover:drop-shadow-md transition-all duration-300 ease-in-out"
                onMouseEnter={handleHeartEnter}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-11 h-11"
                  fill="none"
                  viewBox="-6 -6 36 36"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M19.5 13.572 12 21l-7.5-7.428C2.5 11.5 2.5 8.5 5 6.5c2-1.5 5-1.5 7 1 2-2.5 5-2.5 7-1 2.5 2 2.5 5 0 7.072Z"
                  />
                  <g
                    className={`transition-opacity duration-500 ease-in-out ${
                      isHeartHovered ? "opacity-100" : "opacity-0"
                    }`}
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 -2v-2"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M22.5 1.5 24.5 -0.5"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M26 12h2"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M22.5 22.5 24.5 24.5"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 26v2"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M1.5 22.5 -0.5 24.5"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M-2 12H-4"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 -2v-2"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M22.5 1.5 24.5 -0.5"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M26 12h2"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M22.5 22.5 24.5 24.5"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 26v2"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M1.5 22.5 -0.5 24.5"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M-2 12H-4"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M1.5 1.5 -0.5 -0.5"
                    />
                  </g>
                </svg>
              </button>
            </div>

            <button className="bg-red-600 text-white px-8 py-4 rounded-md text-lg font-bold flex items-center justify-center space-x-2 hover:bg-red-700 transition-colors duration-300 w-full">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ffffff"
                className="w-8 h-8 mr-4"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M3 15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M12 3V16M12 16L16 11.625M12 16L8 11.625"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
              <span>Direct download</span>
            </button>
            <p className="text-xs text-gray-500 mt-5">
              This item will be sent to your system automatically after
              purchase.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
