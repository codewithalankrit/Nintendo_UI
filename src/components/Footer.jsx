import React from "react";

const footerLinks = [
  {
    title: "About Nintendo",
    links: [
      { name: "Careers", url: "https://careers.nintendo.com/" },
      {
        name: (
          <>
            Corporate Social <br /> Responsibility
          </>
        ),
        url: "https://www.nintendo.co.jp/csr/en-us/index.html",
      },
    ],
  },
  {
    title: "Shop",
    links: [
      { name: "Games", url: "https://www.nintendo.com/us/store/games/" },
      { name: "Hardware", url: "https://www.nintendo.com/us/store/hardware/" },
      {
        name: "Merchandise",
        url: "https://www.nintendo.com/us/store/merchandise/",
      },
      {
        name: "Sales and deals",
        url: "https://www.nintendo.com/us/store/sales-and-deals/",
      },
      {
        name: "Exclusives",
        url: "https://www.nintendo.com/us/store/exclusives/",
      },
      {
        name: "Nintendo Switch Online",
        url: "https://www.nintendo.com/us/switch/online/",
      },
      {
        name: "Nintendo Store US",
        url: "https://www.nintendo.com/us/retail-locations/",
      },
    ],
  },
  {
    title: "Orders",
    links: [
      { name: "Order details", url: "https://www.nintendo.com/us/orders/" },
      {
        name: "Shipping info",
        url: "https://support.nintendo.com/shippinginfo/",
      },
      {
        name: "Refunds and returns",
        url: "https://www.nintendo.com/us/refund-return-policy/",
      },
      { name: "FAQ", url: "https://support.nintendo.com/orders/faq/" },
    ],
  },
  {
    title: "Support",
    links: [
      {
        name: "Nintendo Switch 2",
        url: "https://support.nintendo.com/switch2/",
      },
      { name: "Nintendo Switch", url: "https://support.nintendo.com/switch/" },
      {
        name: "Nintendo Account",
        url: "https://support.nintendo.com/account/",
      },
      {
        name: "Apps and other products",
        url: "https://support.nintendo.com/apps-other-products/",
      },
      { name: "Repair", url: "https://support.nintendo.com/repair" },
      {
        name: "Nintendo product recycling",
        url: "https://support.nintendo.com/recycle",
      },
      { name: "Warranty", url: "https://support.nintendo.com/warranty" },
      {
        name: "Licensed product information",
        url: "https://www.nintendo.com/us/licensed-product-information/",
      },
    ],
  },
  {
    title: "Parents",
    links: [
      {
        name: "Info for parents",
        url: "https://play.nintendo.com/parents/crash-courses/",
      },
      {
        name: "Parental controls",
        url: "https://play.nintendo.com/parents/crash-courses/parental-controls/",
      },
    ],
  },
  {
    title: "Community guidelines",
    links: [
      {
        name: "Community guidelines",
        url: "https://www.nintendo.com/us/community-guidelines/",
      },
      {
        name: "Online safety",
        url: "https://www.nintendo.com/us/online-safety/",
      },
    ],
  },
  {
    title: "Privacy",
    links: [
      {
        name: "Privacy policy",
        url: "https://www.nintendo.com/us/privacy-policy/",
      },
      {
        name: "Cookies and interest-based ads",
        url: "https://www.nintendo.com/us/privacy-request/#cookies",
      },
    ],
  },
  {
    title: "Documents and policies",
    links: [
      {
        name: "Health and safety precautions",
        url: "https://support.nintendo.com/healthsafety/",
      },
      {
        name: "Wireless regulatory info",
        url: "https://support.nintendo.com/switch/setup/",
      },
      {
        name: "Supply chain transparency",
        url: "https://support.nintendo.com/supply-chain-transparency/",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-20">
      <a
        href="https://www.nintendo.com/us/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="bg-[#e60012] flex flex-col items-center">
          <svg
            width="260"
            viewBox="0 0 388 192"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="presentation"
            alt="Nintendo logo"
            data-testid="NintendoRacetrackLogoBoxIcon"
            size="260"
          >
            <g>
              <rect width="388" height="100" fill="#E60012"></rect>
              <path
                d="M112.15 101.892L99.1546 80.8821H89.7753L89.7713 111.016H99.0991V90.0034L112.153 111.016H121.458V80.8821H112.134L112.15 101.892ZM186.069 91.0192V88.0391H181.161V83.9821H172.092L172.1 88.0424H167.17V91.0192H172.096L172.092 111.016H181.176L181.161 91.0192L186.069 91.0192ZM126.639 111.016H135.697V90.9819L126.639 90.9739V111.016ZM126.617 87.0344H135.697V80.871H126.617V87.0344ZM285.415 89.6134C278.104 89.6134 272.169 94.645 272.169 100.857C272.169 107.073 278.104 112.104 285.415 112.104C292.729 112.104 298.653 107.073 298.653 100.857C298.653 94.645 292.729 89.6134 285.415 89.6134ZM289.044 105.074C289.044 108.269 287.158 109.584 285.343 109.584C283.529 109.584 281.636 108.269 281.636 105.074V100.755C281.636 100.755 281.64 97.7903 281.64 96.583C281.64 93.4036 283.532 92.0875 285.343 92.0875C287.15 92.0875 289.044 93.4036 289.044 96.583C289.044 97.7903 289.044 100.036 289.055 100.838C289.055 100.894 289.044 103.867 289.044 105.074ZM260.281 91.9676C258.834 91.1542 257.304 90.3672 255.156 90.1797C248.622 89.6094 243.639 95.3797 243.639 100.669C243.639 107.639 249.016 110.222 249.829 110.604C252.884 112.025 256.791 112.029 260.258 109.854C260.258 110.042 260.262 111.013 260.262 111.013H269.215V80.8821H260.281V91.9676ZM260.349 100.894V104.452C260.349 107.545 258.204 108.351 256.795 108.351C255.355 108.351 253.244 107.545 253.244 104.452V97.3138C253.244 94.2098 255.355 93.4258 256.795 93.4258C258.204 93.4258 260.345 94.2098 260.345 97.3138C260.345 98.3788 260.349 100.894 260.349 100.894ZM156.912 90.0519C153.913 90.1384 151.424 91.4244 149.685 93.074C149.674 92.5752 149.685 90.9669 149.685 90.9669L140.679 90.9739L140.694 111.005H149.685C149.685 111.005 149.674 98.7013 149.674 97.8467C149.674 96.1033 151.511 94.1613 153.974 94.1613C156.441 94.1613 158.113 96.1033 158.113 97.8467V111.005H167.125C167.125 111.005 167.114 101.517 167.125 100.107C167.17 92.1741 160.298 89.9549 156.912 90.0519ZM230.547 90.0519C227.544 90.1384 225.051 91.4244 223.316 93.074C223.305 92.5752 223.316 90.9669 223.316 90.9669L214.325 90.9739L214.321 111.005H223.316C223.316 111.005 223.305 98.7013 223.305 97.8467C223.305 96.1033 225.145 94.1613 227.612 94.1613C230.079 94.1613 231.748 96.1033 231.748 97.8467V111.005H240.752C240.752 111.005 240.741 101.517 240.752 100.107C240.797 92.1741 233.929 89.9549 230.547 90.0519ZM211.581 101.082C211.581 94.8658 205.579 89.7222 198.208 89.7222C190.846 89.7222 184.87 94.753 184.87 100.969C184.87 107.182 190.846 112.216 198.208 112.216C204.326 112.216 209.489 108.726 211.067 103.998L202.033 104.006C202.033 104.006 202.044 104.092 202.044 105.221C202.044 108.884 199.633 109.693 198.291 109.693C196.949 109.693 194.501 108.884 194.501 105.221C194.501 104.122 194.512 101.082 194.512 101.082C194.512 101.082 211.581 101.089 211.581 101.082ZM195.104 94.0263C195.817 92.7928 197.114 92.2114 198.291 92.2003C199.472 92.2114 200.769 92.7928 201.481 94.0263C202.051 95.0342 202.081 96.2081 202.066 97.9587H194.508C194.493 96.2081 194.531 95.0342 195.104 94.0263ZM302.259 84.6048C302.259 83.6192 301.532 83.1235 300.07 83.1235H298.052V88.2639H299.305V86.1608H299.916L300.898 88.2639H302.286L301.138 85.9693C301.843 85.7858 302.259 85.28 302.259 84.6048ZM299.916 85.407H299.305V83.9146H299.848C300.598 83.9146 300.97 84.1433 300.97 84.6795C300.97 85.1893 300.628 85.407 299.916 85.407ZM299.954 81.118C297.393 81.118 295.308 83.199 295.308 85.7596C295.308 88.3203 297.393 90.3974 299.954 90.3974C302.514 90.3974 304.584 88.3203 304.584 85.7596C304.584 83.199 302.514 81.118 299.954 81.118ZM299.954 89.5046C297.88 89.5046 296.201 87.8287 296.201 85.7596C296.201 83.6858 297.88 82.0068 299.954 82.0068C302.023 82.0068 303.703 83.6858 303.703 85.7596C303.703 87.8287 302.023 89.5046 299.954 89.5046ZM289.842 64.0001H97.9482C77.639 63.9517 64 78.5541 64 96.054C64 113.562 77.6096 127.992 97.9815 128H289.813C310.192 127.992 323.793 113.562 323.793 96.054C323.793 78.5541 310.154 63.9516 289.842 64.0001ZM289.756 120.149H98.0419C81.8533 120.213 72.0156 109.344 72.0156 96.0128C72.0156 82.6811 81.9097 71.907 98.0419 71.8728H289.756C305.881 71.907 315.775 82.6811 315.775 96.0128C315.775 109.344 305.941 120.213 289.756 120.149Z"
                fill="white"
              ></path>
            </g>
          </svg>
        </div>
      </a>
      <div className="max-w-7xl flex flex-col items-center px-2 sm:px-4 lg:py-10 ml-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5 pb-8 w-max mx-auto">
          {/* First 4 columns: 1 section each */}
          {footerLinks.slice(0, 4).map((col, idx) => (
            <div
              key={col.title}
              className={`h-full px-8${
                idx < 3
                  ? " mr-10 border-r border-gray-300"
                  : idx === 3
                  ? " relative"
                  : ""
              }`}
            >
              {col.title === "About Nintendo" ? (
                <a
                  href="https://www.nintendo.com/us/about/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#484848] mb-2 text-lg whitespace-nowrap inline-block border-b-2 border-transparent hover:border-[#ac000d] transition"
                >
                  {col.title}
                </a>
              ) : (
                <h4 className="font-semibold text-[#484848] mb-2 text-lg inline-block border-b-2 border-transparent hover:border-[#ac000d] transition cursor-pointer">
                  {col.title}
                </h4>
              )}
              <ul className="space-y-1">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.url}
                      className="text-base text-[#e60012] hover:text-[#ac000d] font-medium whitespace-nowrap inline-block border-b-2 border-transparent hover:border-[#ac000d] transition"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              {idx === 3 && (
                <>
                  <div className="absolute top-0 right-0 h-2/5 w-px bg-gray-300"></div>
                  <div className="absolute bottom-0 right-0 h-1/2 w-px bg-gray-300"></div>
                </>
              )}
            </div>
          ))}
          {/* 5th column: 2 sections (Parents, Privacy) */}
          <div className="h-full px-8 relative">
            {[footerLinks[4], footerLinks[5]].map((col) => (
              <div key={col.title} className="mb-20 last:mb-0">
                <h4 className="font-semibold text-[#484848] mb-2 text-lg inline-block border-b-2 border-transparent hover:border-[#ac000d] transition cursor-pointer">
                  {col.title}
                </h4>
                <ul className="space-y-1">
                  {col.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.url}
                        className="text-base text-[#e60012] hover:text-[#ac000d] font-medium whitespace-nowrap inline-block border-b-2 border-transparent hover:border-[#ac000d] transition"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="absolute top-0 right-0 h-2/5 w-px bg-gray-300"></div>
            <div className="absolute bottom-0 right-0 h-1/2 w-px bg-gray-300"></div>
          </div>
          {/* 6th column: 2 sections (Community guidelines, Documents and policies) */}
          <div className="h-full pr-8">
            {[footerLinks[6], footerLinks[7]].map((col) => (
              <div key={col.title} className="mb-20 last:mb-0">
                <h4 className="font-semibold text-[#484848] mb-2 text-lg inline-block border-b-2 border-transparent hover:border-[#ac000d] transition cursor-pointer">
                  {col.title}
                </h4>
                <ul className="space-y-1">
                  {col.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.url}
                        className="text-base text-[#e60012] hover:text-[#ac000d] font-medium whitespace-nowrap inline-block border-b-2 border-transparent hover:border-[#ac000d] transition"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center w-400 ml-100 mt-8">
          <div className="flex space-x-8">
            <a
              href="https://www.facebook.com/NintendoAmerica/"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="30"
                role="presentation"
                alt=""
                data-testid="FacebookIcon"
                size="30"
                color="currentColor"
              >
                <path
                  d="M16 0C7.2 0 0 7.2 0 16c0 8 5.9 14.6 13.5 15.8V20.6H9.4V16h4.1v-3.5c0-4 2.4-6.2 6-6.2 1.8 0 3.6.3 3.6.3v3.9h-2c-2 0-2.6 1.2-2.6 2.5v3h4.4l-.7 4.6h-3.7v11.2C26.1 30.6 32 24 32 16c0-8.8-7.2-16-16-16z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/nintendoamerica/"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                xml:space="preserve"
                width="30"
                role="presentation"
                alt=""
                data-testid="InstagramIcon"
                size="30"
                color="currentColor"
              >
                <path
                  fill="currentColor"
                  d="M24.506 5.514c-.511 0-.949.188-1.335.573-.385.376-.573.845-.573 1.397 0 .51.188.949.573 1.334.376.386.845.574 1.397.574.51 0 .949-.188 1.334-.574.376-.375.574-.823.574-1.334 0-.552-.188-1.011-.574-1.397-.375-.385-.844-.573-1.396-.573z"
                ></path>
                <path
                  fill="currentColor"
                  d="M31.687 7.213a9.443 9.443 0 0 0-.51-1.689 7.692 7.692 0 0 0-.761-1.49 11.917 11.917 0 0 0-1.084-1.366c-.47-.427-.918-.792-1.366-1.084a7.403 7.403 0 0 0-1.49-.76 21.14 21.14 0 0 0-1.689-.48c-.615-.146-1.345-.24-2.189-.281-.844 0-1.616-.01-2.314-.032C19.586.011 18.158 0 16 0s-3.586.01-4.284.031c-.698.021-1.47.052-2.314.094-.844 0-1.574.073-2.189.219-.615.156-1.178.313-1.689.48-.51.208-.99.469-1.459.76-.469.303-.928.657-1.397 1.084-.427.47-.792.928-1.084 1.397-.291.47-.552.949-.76 1.46-.178.51-.334 1.073-.48 1.688-.146.615-.219 1.345-.219 2.189-.042.844-.073 1.616-.094 2.314C.011 12.414 0 13.842 0 16s.01 3.586.031 4.284c.021.698.052 1.47.094 2.314 0 .844.073 1.574.219 2.189.146.615.313 1.178.48 1.689.208.552.469 1.042.76 1.49.303.448.657.897 1.084 1.366.47.427.928.792 1.397 1.084.459.291.949.552 1.46.76.51.167 1.073.334 1.688.48.615.146 1.345.219 2.189.219.844.042 1.616.073 2.314.094.698.02 2.126.031 4.284.031s3.586-.01 4.284-.031a78.06 78.06 0 0 1 2.314-.032c.844-.041 1.574-.135 2.189-.281a26.634 26.634 0 0 0 1.689-.48 7.692 7.692 0 0 0 1.49-.76c.448-.303.897-.657 1.366-1.084.427-.47.792-.928 1.084-1.397.291-.459.552-.949.76-1.46.22-.51.386-1.073.511-1.688s.209-1.345.25-2.189c0-.844.01-1.616.032-2.314.02-.698.031-2.126.031-4.284v-4.284c0-.698-.02-1.47-.063-2.314a14.798 14.798 0 0 0-.25-2.189zm-2.574 13.008c-.021.657-.052 1.408-.094 2.252-.042.76-.115 1.376-.219 1.845a7.77 7.77 0 0 1-.354 1.146 3.9 3.9 0 0 1-.48.98c-.187.271-.417.563-.667.855a8.21 8.21 0 0 1-.886.667c-.292.188-.615.375-.948.542-.303.084-.678.177-1.147.282-.47.104-1.084.177-1.845.218-.844.042-1.605.073-2.283.094-.677.021-2.074.032-4.19.032s-3.513-.01-4.19-.032c-.678-.02-1.439-.052-2.283-.094-.76-.041-1.376-.114-1.845-.218s-.855-.198-1.146-.282a10.26 10.26 0 0 1-.949-.542 8.21 8.21 0 0 1-.886-.667c-.25-.292-.48-.584-.667-.855a3.435 3.435 0 0 1-.48-.98 6.029 6.029 0 0 1-.354-1.146c-.104-.47-.177-1.084-.219-1.845-.042-.844-.073-1.595-.094-2.251-.02-.657-.031-2.064-.031-4.222 0-2.116.01-3.513.031-4.19.021-.678.052-1.439.094-2.283.042-.76.115-1.376.219-1.845.115-.469.23-.834.354-1.084.125-.386.292-.73.48-1.021.187-.292.417-.574.667-.824.292-.292.594-.542.886-.73.292-.198.605-.354.949-.479.302-.136.677-.25 1.146-.354s1.084-.178 1.845-.22a46.697 46.697 0 0 1 2.283-.062h8.38c.677 0 1.439.021 2.283.063.76.041 1.376.114 1.845.219.469.114.855.229 1.146.354.334.125.657.292.949.48.292.187.594.416.886.667.25.291.48.594.667.886.198.291.355.615.48.948.135.302.25.678.354 1.147s.177 1.084.219 1.845c.042.854.073 1.615.094 2.293.02.677.031 2.074.031 4.19 0 2.158-.01 3.565-.031 4.221z"
                ></path>
                <path
                  fill="currentColor"
                  d="M15.99 7.797c-2.294 0-4.232.802-5.817 2.387C8.578 11.779 7.786 13.717 7.786 16c0 2.293.792 4.221 2.387 5.816 1.595 1.595 3.523 2.387 5.817 2.387s4.231-.802 5.816-2.387c1.584-1.595 2.376-3.533 2.387-5.816 0-2.293-.803-4.232-2.387-5.816-1.595-1.595-3.523-2.387-5.816-2.387zm3.783 11.987c-1.042 1.032-2.303 1.553-3.783 1.553-1.491 0-2.742-.51-3.784-1.553-1.032-1.043-1.553-2.304-1.553-3.784 0-1.49.51-2.741 1.553-3.784 1.042-1.032 2.303-1.553 3.784-1.553s2.74.521 3.783 1.553c1.032 1.043 1.553 2.304 1.553 3.784 0 1.49-.51 2.741-1.553 3.784z"
                ></path>
              </svg>
            </a>
            <a href="https://twitter.com/NintendoAmerica" aria-label="X">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="30"
                role="presentation"
                alt=""
                data-testid="TwitterIcon"
                size="30"
                color="currentColor"
              >
                <path
                  d="M19.0443 13.5498L30.9571 0H28.1341L17.7903 11.7651L9.52875 0H0L12.4931 17.7909L0 32H2.82309L13.7464 19.5756L22.4713 32H32L19.0437 13.5498H19.0443ZM15.1777 17.9477L13.9119 16.1761L3.84029 2.07949H8.1764L16.3043 13.4559L17.5701 15.2275L28.1355 30.0151H23.7994L15.1777 17.9484V17.9477Z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
            <a href="https://www.youtube.com/nintendo" aria-label="YouTube">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="30"
                role="presentation"
                alt=""
                data-testid="YoutubeIcon"
                size="30"
                color="currentColor"
              >
                <path
                  d="M31.33 8.3a4 4 0 0 0-2.83-2.83C26 4.8 16 4.8 16 4.8s-10 0-12.5.67A4 4 0 0 0 .67 8.3 41.51 41.51 0 0 0 0 16a41.51 41.51 0 0 0 .67 7.7 4 4 0 0 0 2.83 2.83c2.5.67 12.5.67 12.5.67s10 0 12.5-.67a4 4 0 0 0 2.83-2.83A41.51 41.51 0 0 0 32 16a41.51 41.51 0 0 0-.67-7.7zM12.8 20.8v-9.6l8.31 4.8z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
          </div>
          <a href="https://www.esrb.org/EPCConfirm/891/" className="ml-auto">
            <img
              src={`${import.meta.env.BASE_URL}esrbcertified.png`}
              alt=""
              className="h-25 w-20"
            />
          </a>
        </div>
      </div>
      <div className="bg-[#252425] text-white text-xs py-8 px-60 flex items-center justify-between">
        <div>
          © Nintendo. Games are property of their respective owners. Nintendo of
          America Inc. Headquarters are in Redmond, Washington, USA.
        </div>
        <div className="flex items-center space-x-4">
          <a href="https://en-americas-support.nintendo.com/app/contact">
            Contact us
          </a>
          <a href="https://nintendoofamerica.co1.qualtrics.com/jfe/form/SV_dp1F1wielOUu20t">
            Website feedback
          </a>
          <a href="https://www.nintendo.com/us/terms-of-use/">Terms of Use</a>
          <div className="flex items-center space-x-2 ml-2 cursor-pointer">
            <img
              src={`${import.meta.env.BASE_URL}united-states-flag-icon.svg`}
              alt="US Flag"
              className="h-4"
            />

            <span className="font-semibold border-b-2 border-transparent hover:border-white transition-all duration-200">
              English (United States)
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
