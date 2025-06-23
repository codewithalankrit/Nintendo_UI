import React from "react";

const AnnouncementBar = () => {
  return (
    <div className="bg-[#f8f8f8] flex justify-center items-center py-3 text-base text-[#484848]">
      <div className="flex items-center space-x-2">
        {/* Truck Icon */}
        <svg
          data-name="Layer 2 copy"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="28"
          role="presentation"
          alt=""
          data-testid="ShippingTruckArrowIcon"
          color="currentColor"
          size="24"
          className="text-[#e60012] pr-1"
        >
          <path
            d="M6.57 27.352a3.373 3.373 0 1 1 3.372-3.372 3.376 3.376 0 0 1-3.373 3.372zm17.288 0a3.373 3.373 0 1 1 3.372-3.372 3.376 3.376 0 0 1-3.372 3.372z"
            fill="currentColor"
          ></path>
          <path
            d="M31.519 14.29l-3.889-3.888a1.643 1.643 0 0 0-1.161-.481h-4.4V4.648H3.436A3.327 3.327 0 0 0 0 7.831V23.98h2.196a4.373 4.373 0 0 1 8.746 0h8.535a4.373 4.373 0 0 1 8.746 0h2.134A1.643 1.643 0 0 0 32 22.336v-6.884a1.643 1.643 0 0 0-.481-1.162zM15.87 12.94l-3.946 3.946a.44.44 0 0 1-.311.13.445.445 0 0 1-.169-.034.44.44 0 0 1-.271-.407v-1.918H7.412a.44.44 0 0 1-.44-.44V11.04a.44.44 0 0 1 .44-.44h3.762V8.683a.44.44 0 0 1 .751-.311l3.946 3.946a.44.44 0 0 1 0 .622zm12.422 2.26a.66.66 0 0 1-.66.66h-4.718a.66.66 0 0 1-.66-.66v-2.834a.66.66 0 0 1 .66-.66h3.156a.66.66 0 0 1 .467.193l1.561 1.562a.66.66 0 0 1 .194.466z"
            fill="currentColor"
          ></path>
        </svg>
        <span className="font-bold">Free shipping</span>
        <span>
          {" "}
          on orders $50 or more.{" "}
          <a
            href="https://en-americas-support.nintendo.com/app/answers/detail/a_id/15575?_gl=1*1wlqpw1*_gcl_au*OTg1NTIyODYuMTc0OTk4NjM3Nw..*_ga*MTEzODQzOTM0Ni4xNzQ5OTg2Mzc4*_ga_F6ERC4HMNZ*czE3NTAwMDM4MDEkbzMkZzEkdDE3NTAwMDM4NjUkajU2JGwwJGgxMzUwOTA1NjAx"
            className="underline font-bold hover:text-[#e60012] transition-colors duration-300"
          >
            Restrictions apply.
          </a>
        </span>
      </div>
      <div className="h-6 border-l-1 border-[#484848] mx-4"></div>{" "}
      {/* Vertical Separator */}
      <div className="flex items-center space-x-2">
        {/* Coin Icon */}
        <svg
          data-name="My Nintendo points"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="24"
          role="presentation"
          alt=""
          data-testid="MyNintendoPointsIcon"
          color="currentColor"
          size="24"
          className="text-[#e60012]"
        >
          <path
            fill="currentColor"
            d="M31.7 13.474a11.843 11.843 0 0 0-.734-2.336 12.781 12.781 0 0 0-1.135-2.102 13.331 13.331 0 0 0-1.501-1.835 11.276 11.276 0 0 0-1.836-1.502 12.78 12.78 0 0 0-2.102-1.134 13.589 13.589 0 0 0-2.336-.734 12.638 12.638 0 0 0-5.005 0 1 1 0 0 0-.334.133A12.652 12.652 0 0 0 0 15.977 12.703 12.703 0 0 0 12.68 28.69a12.851 12.851 0 0 0 4.07-.668 1 1 0 0 0 .334.134 12.493 12.493 0 0 0 2.503.267 12.758 12.758 0 0 0 2.503-.267 11.843 11.843 0 0 0 2.335-.734 12.78 12.78 0 0 0 2.103-1.135 13.332 13.332 0 0 0 1.835-1.501 11.275 11.275 0 0 0 1.501-1.836A12.78 12.78 0 0 0 31 20.849a13.589 13.589 0 0 0 .734-2.335A12.493 12.493 0 0 0 32 16.01a15.954 15.954 0 0 0-.3-2.536zM12.68 26.287a10.088 10.088 0 0 1-7.274-3.036 10.27 10.27 0 0 1-3.003-7.308A10.088 10.088 0 0 1 5.438 8.67 10.323 10.323 0 0 1 20.02 23.285a10.405 10.405 0 0 1-7.341 3.003zm16.717-8.275a12.07 12.07 0 0 1-.567 1.869 10.503 10.503 0 0 1-.934 1.701 8.722 8.722 0 0 1-1.235 1.469 12.52 12.52 0 0 1-1.468 1.234 10.504 10.504 0 0 1-1.702.935 7.539 7.539 0 0 1-1.869.567c-.333.067-.7.133-1.034.167.4-.3.768-.634 1.135-.968A12.8 12.8 0 0 0 21.689 7a10.593 10.593 0 0 0-1.134-1 9.569 9.569 0 0 1 1.034.166 12.07 12.07 0 0 1 1.869.568 10.503 10.503 0 0 1 1.702.934 8.723 8.723 0 0 1 1.468 1.235 12.52 12.52 0 0 1 1.234 1.468 10.504 10.504 0 0 1 .935 1.702 7.539 7.539 0 0 1 .567 1.868 10.27 10.27 0 0 1 .2 2.036 8.392 8.392 0 0 1-.167 2.035z"
          ></path>
          <path
            fill="currentColor"
            d="M15.082 14.141a6.515 6.515 0 0 0-.767-.066c-.067-.2-.2-.434-.3-.701-.468-1.035-.768-1.502-1.335-1.502s-.868.467-1.335 1.502c-.1.233-.233.5-.3.7-.2.034-.467.034-.734.067-1.135.134-1.669.267-1.836.768a.735.735 0 0 0-.033.267c0 .4.234.734 1.068 1.468a6.793 6.793 0 0 0 .567.5c-.067.2-.1.468-.167.735a7.634 7.634 0 0 0-.167 1.2.949.949 0 0 0 .334.802.797.797 0 0 0 .467.166 3.271 3.271 0 0 0 1.502-.6c.233-.134.467-.267.667-.4.2.1.4.266.668.4.967.567 1.501.734 1.935.467a.922.922 0 0 0 .4-.834 8.175 8.175 0 0 0-.166-1.201c-.067-.267-.134-.534-.167-.768a6.795 6.795 0 0 0 .567-.5c.8-.735 1.068-1.068 1.068-1.469a.735.735 0 0 0-.034-.267c-.233-.433-.767-.6-1.902-.734z"
          ></path>
          <path
            fill="currentColor"
            d="M12.713 8.035a7.928 7.928 0 0 0-5.606 13.547 1.18 1.18 0 1 0 1.669-1.668 5.612 5.612 0 0 1-1.635-3.937 5.473 5.473 0 0 1 1.635-3.938 5.553 5.553 0 0 1 3.937-1.635 5.473 5.473 0 0 1 3.938 1.635 1.18 1.18 0 1 0 1.668-1.668 7.906 7.906 0 0 0-5.606-2.336z"
          ></path>
        </svg>
        <span>
          Redeem your{" "}
          <span className="font-bold">My Nintendo Platinum Points</span> for{" "}
          <span className="font-bold">
            <a
              href="https://www.nintendo.com/us/store/exclusives/rewards/"
              className="underline hover:text-[#e60012] transition-colors duration-300"
            >
              fun rewards
            </a>
          </span>
        </span>
      </div>
    </div>
  );
};

export default AnnouncementBar;
