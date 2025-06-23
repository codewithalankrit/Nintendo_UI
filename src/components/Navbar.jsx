import React, { useState } from "react";

function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [isCartHovered, setIsCartHovered] = useState(false);

  return (
    <nav className="flex items-center justify-between bg-white shadow-md">
      {/* Left section - Red background with Nintendo logo */}
      <a
        href="https://www.nintendo.com/us/"
        className="bg-red-600 p-3 cursor-pointer"
      >
        <img
          src={`${import.meta.env.BASE_URL}logo.png`}
          alt="Nintendo"
          className="h-7"
        />
      </a>

      {/* Middle section - Navigation links */}
      <div className="flex-grow flex items-center justify-start px-6">
        <ul className="flex space-x-6">
          <li>
            <a
              href="#"
              className="flex items-center text-[#484848] hover:text-[#E60012] font-bold text-sm"
            >
              <span className="mr-1 text-[#E60012] text-lg font-bold">
                <svg
                  width="16"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="presentation"
                  alt=""
                  data-testid="CompassIcon"
                  size="24"
                  color="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M21.8794 12C21.8794 17.0881 17.7547 21.2129 12.6665 21.2129C7.57836 21.2129 3.4536 17.0881 3.4536 12C3.4536 6.91185 7.57836 2.7871 12.6665 2.7871C17.7547 2.7871 21.8794 6.91185 21.8794 12ZM24.6665 12C24.6665 18.6274 19.2939 24 12.6665 24C6.03909 24 0.666504 18.6274 0.666504 12C0.666504 5.37258 6.03909 0 12.6665 0C19.2939 0 24.6665 5.37258 24.6665 12ZM8.28551 17.4164C7.60253 17.6643 6.94067 17.0024 7.18852 16.3194L9.52478 9.88164C9.69785 9.40473 10.0735 9.02911 10.5504 8.85604L16.9881 6.51978C17.6711 6.27193 18.333 6.93379 18.0851 7.61677L15.7489 14.0545C15.5758 14.5314 15.2002 14.9071 14.7233 15.0801L8.28551 17.4164ZM13.6071 10.9977C14.143 11.5336 14.143 12.4024 13.6071 12.9383C13.0713 13.4742 12.2024 13.4742 11.6666 12.9383C11.1307 12.4024 11.1307 11.5336 11.6666 10.9977C12.2024 10.4619 13.0713 10.4619 13.6071 10.9977Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
              Explore
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center text-[#484848] hover:text-[#E60012] font-bold text-sm"
            >
              <span className="mr-1 text-[#E60012] text-lg font-bold">
                <img
                  src={`${import.meta.env.BASE_URL}8109.png`}
                  alt="shopping bag"
                  className="w-[16px]"
                />
              </span>
              Shop
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center text-[#484848] hover:text-[#E60012] font-bold text-sm"
            >
              <span className="mr-1 text-[#E60012] text-lg font-bold">
                <svg
                  width="16"
                  viewBox="0 0 22 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="presentation"
                  alt=""
                  data-testid="SupportShieldIcon"
                  size="24"
                  color="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.833008 5.81122L11.2908 0L21.8231 5.81122C21.8975 11.2613 21.8231 17.762 11.2908 24C1.88356 18.4765 1.43645 12.7231 1.08966 8.26043C1.02212 7.39132 0.958383 6.57117 0.833008 5.81122ZM9.43606 13.572C9.43606 14.064 9.68806 14.31 10.1921 14.31H10.9121C11.1281 14.31 11.2901 14.274 11.3981 14.202C11.5061 14.118 11.5841 13.98 11.6321 13.788L11.6681 13.482C11.7041 13.182 11.8061 12.912 11.9741 12.672C12.1421 12.432 12.3401 12.204 12.5681 11.988C12.8081 11.76 13.0541 11.532 13.3061 11.304C13.5701 11.064 13.8101 10.806 14.0261 10.53C14.2541 10.254 14.4401 9.94202 14.5841 9.59402C14.7281 9.23402 14.8001 8.82002 14.8001 8.35202C14.8001 7.82402 14.6861 7.35002 14.4581 6.93002C14.2421 6.51002 13.9481 6.15602 13.5761 5.86802C13.2161 5.58002 12.7961 5.35802 12.3161 5.20202C11.8481 5.04602 11.3621 4.96802 10.8581 4.96802C10.2101 4.96802 9.65206 5.06402 9.18406 5.25602C8.71606 5.43602 8.34406 5.61602 8.06806 5.79602C7.86406 5.92802 7.75606 6.07802 7.74406 6.24602C7.73206 6.41402 7.79806 6.60002 7.94206 6.80402L8.24806 7.25402C8.38006 7.45802 8.54206 7.56602 8.73406 7.57802C8.92606 7.59002 9.12406 7.54202 9.32806 7.43402C9.49606 7.35002 9.68806 7.27202 9.90406 7.20002C10.1321 7.11602 10.3841 7.07402 10.6601 7.07402C11.1521 7.07402 11.5661 7.21802 11.9021 7.50602C12.2381 7.79402 12.4061 8.14802 12.4061 8.56802C12.4061 8.88002 12.3341 9.16202 12.1901 9.41402C12.0461 9.65402 11.8601 9.88802 11.6321 10.116C11.4161 10.332 11.1761 10.548 10.9121 10.764C10.6601 10.98 10.4201 11.214 10.1921 11.466C9.97606 11.706 9.79606 11.976 9.65206 12.276C9.50806 12.564 9.43606 12.9 9.43606 13.284V13.572ZM10.1921 15.858C9.68806 15.858 9.43606 16.11 9.43606 16.614V17.244C9.43606 17.748 9.68806 18 10.1921 18H10.9121C11.4041 18 11.6501 17.748 11.6501 17.244V16.614C11.6501 16.11 11.4041 15.858 10.9121 15.858H10.1921Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
              Support
            </a>
          </li>
        </ul>
      </div>

      {/* Right section - Icons and buttons */}
      <div className="flex items-center space-x-4 pr-4 ">
        <button
          className="py-1 pr-4 pl-2 rounded-full bg-[#f8f8f8] text-[#484848] hover:text-[#E60012] font-bold flex items-center justify-center text-sm cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={
              isHovered
                ? `${import.meta.env.BASE_URL}red magnifying glass.png`
                : `${import.meta.env.BASE_URL}magnifying glass.png`
            }
            alt="search"
            className="w-[22px] h-[22px] inline-block mr-2"
          />
          Search
        </button>
        <button className="p-3 rounded-full bg-[#f8f8f8] text-[#484848] hover:text-[#E60012] transition-colors duration-300 cursor-pointer">
          <svg
            fill="currentColor"
            width="16px"
            height="16px"
            viewBox="0 0 122.88 107.41"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M60.83,17.19C68.84,8.84,74.45,1.62,86.79,0.21c23.17-2.66,44.48,21.06,32.78,44.41
              c-3.33,6.65-10.11,14.56-17.61,22.32c-8.23,8.52-17.34,16.87-23.72,23.2l-17.4,17.26L46.46,93.56C29.16,76.9,0.95,55.93,0.02,29.95
              C-0.63,11.75,13.73,0.09,30.25,0.3C45.01,0.5,51.22,7.84,60.83,17.19L60.83,17.19L60.83,17.19z"
            />
          </svg>
        </button>
        <button
          className="p-3 rounded-full bg-[#f8f8f8] transition-colors duration-300 cursor-pointer"
          onMouseEnter={() => setIsCartHovered(true)}
          onMouseLeave={() => setIsCartHovered(false)}
        >
          <div className="relative w-[18px] h-[18px]">
            <img
              src={`${import.meta.env.BASE_URL}cart-black.png`}
              alt="shopping cart black"
              className={`absolute top-0 left-0 w-[18px] h-[18px] transition-opacity duration-300 ease-in-out ${
                isCartHovered ? "opacity-0" : "opacity-100"
              }`}
            />
            <img
              src={`${import.meta.env.BASE_URL}cart-red.png`}
              alt="shopping cart red"
              className={`absolute top-0 left-0 w-[18px] h-[18px] transition-opacity duration-300 ease-in-out ${
                isCartHovered ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        </button>
        <button className="flex items-center bg-white text-[#E60012] px-4 py-1 rounded-full font-bold border border-[#E60012] cursor-pointer text-sm">
          <span className="mr-2">
            <img
              src={`${import.meta.env.BASE_URL}user.png`}
              alt="user icon"
              className="w-[18px] h-[18px]"
            />
          </span>
          Log in / Sign up
        </button>
        <a href="https://www.nintendo.com/us/region-selector/">
          <img
            src={`${import.meta.env.BASE_URL}united-states-flag-icon.svg`}
            alt="USA"
            className="h-6 w-6"
          />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
