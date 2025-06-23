import React from "react";

const StickyNav = ({ isVisible }) => {
  return (
    <div
      className={`fixed top-0 left-0 right-0 bg-[#EFEEEE] shadow-md z-40 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-15">
          <h2 className="text-lg font-bold text-[#484848]">Stardew Valley</h2>
          <div className="flex items-center gap-6">
            <p className="text-[#484848] text-xs font-bold">Digital</p>
            <p className="text-base font-bold text-[#484848]">$14.99</p>
            <button className="bg-[#e60012] text-white text-md font-bold py-2 px-6 rounded-full shadow-md hover:bg-[#ac000d] transition-colors duration-300 flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414-1.414L9 10.586V4a1 1 0 112 0v5.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>
                <a href="https://ec.nintendo.com/title_purchase_confirm?title=70010000001801">
                  Direct download{" "}
                </a>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyNav;
