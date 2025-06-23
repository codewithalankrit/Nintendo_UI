import React, { useState, useRef } from "react";

const GameDescription = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const carouselRef = useRef(null);
  const [dragStartX, setDragStartX] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [dragDelta, setDragDelta] = useState(0);
  const [heartHoveredIndex, setHeartHoveredIndex] = useState(null);
  const heartTimeoutRefs = useRef([]);

  // Responsive visible count
  const getVisibleCount = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 1; // mobile
      if (window.innerWidth < 1024) return 3; // tablet
    }
    return 5; // desktop
  };
  const [visibleCount, setVisibleCount] = useState(getVisibleCount());

  React.useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Card width responsive
  const CARD_WIDTH = visibleCount === 1 ? 320 : 256; // px
  const CARD_GAP = 24; // px

  const tags = [
    {
      name: "Simulation",
      url: "https://www.nintendo.com/us/search/#cat=gme&f=gameGenreLabels&gameGenreLabels=Simulation",
    },
    {
      name: "Choose your own path",
      url: "https://www.nintendo.com/us/search/#cat=gme&f=gameFeatureLabels&gameFeatureLabels=Choose%20your%20own%20path",
    },
    {
      name: "Pixel art",
      url: "https://www.nintendo.com/us/search/#cat=gme&f=gameFeatureLabels&gameFeatureLabels=Pixel%20art",
    },
    {
      name: "Romance",
      url: "https://www.nintendo.com/us/search/#cat=gme&f=gameFeatureLabels&gameFeatureLabels=Romance",
    },
    {
      name: "Online co-op",
      url: "https://www.nintendo.com/us/search/#cat=gme&f=waysToPlayLabels&waysToPlayLabels=Online%20co-op",
    },
    {
      name: "Play together on multiple consoles",
      url: "https://www.nintendo.com/us/search/#cat=gme&f=waysToPlayLabels&waysToPlayLabels=Play%20together%20on%20multiple%20consoles",
    },
  ];

  const moreLikeThisGames = [
    {
      title: "My Time at Portia",
      date: "4/16/19",
      price: "$29.99",
      imageUrl: "/MoreGames/MyTimeAtPortia.jpg",
      link: "https://www.nintendo.com/us/store/products/my-time-at-portia-switch/",
    },
    {
      title: "Potion Permit",
      date: "9/22/22",
      price: "$19.99",
      imageUrl: "/MoreGames/PotionPermit.jpg",
      link: "https://www.nintendo.com/us/store/products/potion-permit-switch/",
    },
    {
      title: "Ooblets",
      date: "9/1/22",
      price: "$29.99",
      imageUrl: "/MoreGames/Ooblets.jpg",
      link: "https://www.nintendo.com/us/store/products/ooblets-switch/",
    },
    {
      title: "Bear and Breakfast",
      date: "9/15/22",
      price: "$19.99",
      imageUrl: "/MoreGames/BearAndBreakfast.jpg",
      link: "https://www.nintendo.com/us/store/products/bear-and-breakfast-switch/",
    },
    {
      title: "Wytchwood",
      date: "12/9/21",
      price: "$19.99",
      imageUrl: "/MoreGames/Wythwood.jpg",
      link: "https://www.nintendo.com/us/store/products/wytchwood-switch/",
    },
    {
      title: "Fae Farm",
      date: "9/8/23",
      price: "$44.99",
      imageUrl: "/MoreGames/FaeFarm.jpg",
      hasDemo: true,
      link: "https://www.nintendo.com/us/store/products/fae-farm-switch/",
    },
    {
      title: "Garden Story",
      date: "8/11/21",
      price: "$19.99",
      imageUrl: "/MoreGames/GardenStory.jpg",
      link: "https://www.nintendo.com/us/store/products/garden-story-switch/",
    },
    {
      title: "Littlewood",
      date: "2/25/21",
      price: "$14.99",
      imageUrl: "/MoreGames/LittleWoods.jpg",
      link: "https://www.nintendo.com/us/store/products/littlewood-switch/",
    },
    {
      title: "DRAGON QUEST BUILDERS 2",
      date: "7/12/9",
      price: "$49.99",
      imageUrl: "/MoreGames/DragonQuestBuilders2.jpg",
      hasDemo: true,
      link: "https://www.nintendo.com/us/store/products/dragon-quest-builders-2-switch/",
    },
    {
      title: "Let's Build a Zoo",
      date: "9/29/22",
      saleEnds: "10 days",
      salePrice: "$7.99",
      originalPrice: "$19.99",
      discount: "-60%",
      imageUrl: "/MoreGames/LetsBuildAZoo.jpg",
      link: "https://www.nintendo.com/us/store/products/lets-build-a-zoo-switch/",
    },
    {
      title: "Cat Cafe Manager",
      date: "4/14/22",
      price: "$19.99",
      imageUrl: "/MoreGames/CatCafeManager.jpg",
      link: "https://www.nintendo.com/us/store/products/cat-cafe-manager-switch/",
    },
    {
      title: "Summer in Mara",
      date: "6/16/20",
      saleEnds: "15 days",
      salePrice: "$5.99",
      originalPrice: "$19.99",
      discount: "-70%",
      imageUrl: "/MoreGames/SummerInMara.jpg",
      link: "https://www.nintendo.com/us/store/products/summer-in-mara-switch/",
    },
    {
      title: "Yonder: The Cloud Catcher Chronicles",
      date: "5/17/18",
      price: "$29.99",
      imageUrl: "/MoreGames/YonderTheCloudCatcherChronicles.jpg",
      link: "https://www.nintendo.com/us/store/products/yonder-the-cloud-catcher-chronicles-switch/",
    },
    {
      title: "Cozy Grove",
      date: "4/8/21",
      saleEnds: "4 days",
      salePrice: "$7.33",
      originalPrice: "$14.99",
      discount: "-51%",
      imageUrl: "/MoreGames/CozyGrove.jpg",
      link: "https://www.nintendo.com/us/store/products/cozy-grove-switch/",
    },
    {
      title: "Moonstone Island",
      date: "6/19/19",
      saleEnds: "9 days",
      salePrice: "$12.99",
      originalPrice: "$19.99",
      discount: "-35%",
      imageUrl: "/MoreGames/MoonstoneIsland.jpg",
      link: "https://www.nintendo.com/us/store/products/moonstone-island-switch/",
    },
    {
      title: "Turnip Boy Commits Tax Evasion",
      date: "4/22/21",
      saleEnds: "19 hr.",
      salePrice: "$2.99",
      originalPrice: "$14.99",
      discount: "-80%",
      imageUrl: "/MoreGames/TurnipBoyCommitsTaxEvasion.jpg",
      link: "https://www.nintendo.com/us/store/products/turnip-boy-commits-tax-evasion-switch/",
    },
  ];

  const handleNext = () => {
    const maxStartIndex = Math.max(0, moreLikeThisGames.length - visibleCount);
    if (carouselIndex + visibleCount < moreLikeThisGames.length) {
      const nextIndex = carouselIndex + visibleCount;
      if (nextIndex + visibleCount > moreLikeThisGames.length) {
        setCarouselIndex(maxStartIndex);
      } else {
        setCarouselIndex(nextIndex);
      }
    }
  };

  const handlePrev = () => {
    setCarouselIndex((prev) => Math.max(0, prev - visibleCount));
  };

  // Clamp carouselIndex to valid range
  const maxStartIndex = Math.max(0, moreLikeThisGames.length - visibleCount);
  const clampedIndex = Math.max(0, Math.min(carouselIndex, maxStartIndex));

  const fullDescription = (
    <>
      Now with Multiplayer! Invite 1-3 players to join you in the valley!
      Players can <br />
      work together to build a thriving farm, share resources, and build
      relationships with townspeople or each other. As more hands are better
      than one, players have the option to scale profit margin on produce sold
      for a more challenging experience.
    </>
  );
  const shortDescription =
    "Now with Multiplayer! Invite 1-3 players to join you in the valley! Players ca...";

  // Touch/drag support
  const onTouchStart = (e) => {
    setDragging(true);
    setDragStartX(e.touches ? e.touches[0].clientX : e.clientX);
    setDragDelta(0);
  };
  const onTouchMove = (e) => {
    if (!dragging) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    setDragDelta(clientX - dragStartX);
  };
  const onTouchEnd = () => {
    setDragging(false);
    if (
      dragDelta < -CARD_WIDTH / 2 &&
      clampedIndex + visibleCount < moreLikeThisGames.length
    ) {
      handleNext();
    } else if (dragDelta > CARD_WIDTH / 2 && clampedIndex > 0) {
      handlePrev();
    }
    setDragDelta(0);
  };

  const handleHeartEnter = (index) => {
    if (heartTimeoutRefs.current[index]) {
      clearTimeout(heartTimeoutRefs.current[index]);
    }
    setHeartHoveredIndex(index);
    heartTimeoutRefs.current[index] = setTimeout(() => {
      setHeartHoveredIndex((prev) => (prev === index ? null : prev));
    }, 500);
  };
  const handleHeartLeave = (index) => {
    if (heartTimeoutRefs.current[index]) {
      clearTimeout(heartTimeoutRefs.current[index]);
    }
    setHeartHoveredIndex((prev) => (prev === index ? null : prev));
  };

  return (
    <>
      <style>
        {`
          @keyframes jiggle {
            0%, 100% { transform: scale(1.1) rotate(0deg); }
            25% { transform: scale(1.1) rotate(-2deg); }
            50% { transform: scale(1.1) rotate(2deg); }
            75% { transform: scale(1.1) rotate(-1deg); }
          }
          .animate-jiggle {
            animation: jiggle 0.3s ease-in-out;
          }
        `}
      </style>
      <div className="bg-gray-50 py-30 px-14 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start ">
            {/* Left Column: Description */}
            <div className="md:w-1/2 pl-10">
              <h2 className="text-xl font-semibold text-[#484848] mb-4">
                You're moving to the valley...
              </h2>
              <p className="text-[#484848] text-base leading-relaxed mb-4">
                You've inherited your grandfather's old farm plot in Stardew
                Valley. Armed <br /> with hand-me-down tools and a few coins,
                you set out to begin your new <br /> life. Can you learn to live
                off the land and turn these overgrown fields into a <br />{" "}
                thriving home? It won't be easy. Ever since Joja Corporation
                came to town,
                <br />
                the old ways of life have all but disappeared. The community
                center, once <br /> the town's most vibrant hub of activity, now
                lies in shambles. But the valley <br /> seems full of
                opportunity. With a little dedication, you might just be the one{" "}
                <br /> to restore Stardew Valley to greatness!
              </p>
              <p className="text-[#484848] text-base leading-relaxed mb-4">
                {isExpanded ? fullDescription : shortDescription}
              </p>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center text-[#e60012] hover:text-[#ac000d] font-bold mb-1 group cursor-pointer transition-colors duration-300"
              >
                <span className="text-2xl text-bold mr-2 transform ">
                  {isExpanded ? "−" : "+"}
                </span>
                {isExpanded ? "Read less" : "Read more"}
              </button>
              <p className="text-xs text-[#484848] mb-6">
                Software description provided by the publisher.
              </p>
              <div className="relative inline-block">
                <div className="bg-[#e60013] hover:bg-[#ac000d] hover:scale-110 hover:animate-jiggle transition-all duration-300 py-4 px-8 rounded-lg shadow-md">
                  <a
                    href="http://www.stardewvalley.net/"
                    className="text-white text-lg font-bold"
                  >
                    Explore this game's official website
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="md:w-1/2 w-full mt-8 md:mt-0 pr-15">
              <img
                src={`${import.meta.env.BASE_URL}Gameimages/main_poster.png`}
                alt="Stardew Valley"
                className="rounded-xl w-full"
              />
            </div>
          </div>

          {/* Related Tags Section */}
          <div className="mt-16 pl-10">
            <h3 className="text-3xl font-bold text-[#484848] mb-4">
              Related tags
            </h3>
            <div className="flex flex-wrap gap-4">
              {tags.map((tag) => (
                <a href={tag.url} key={tag.name}>
                  <button className="bg-gray-200 text-black py-2 px-4 rounded-xl text-md font-semibold hover:text-[#ac000d] hover:scale-105 transition-all duration-300">
                    {tag.name}
                  </button>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* About this item Section */}
        <div className="mt-16 pl-70">
          <h2 className="text-3xl font-bold text-[#484848] mb-8">
            About this item
          </h2>
          <div className="border-t border-gray-200">
            <div className="py-6 flex border-b border-gray-200">
              <div className="w-1/3 text-[#484848] font-bold flex items-center gap-4 text-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  xml:space="preserve"
                  width="28"
                  role="presentation"
                  alt=""
                  data-testid="StorageIcon"
                  size="28"
                  color="currentColor"
                >
                  <ellipse
                    cx="16"
                    cy="4.234"
                    rx="13"
                    ry="4.234"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    fill="currentColor"
                  ></ellipse>
                  <path
                    fill="currentColor"
                    d="M3 15.71v5.293c0 .408.239.781.616.935C7.085 23.35 11.362 24.192 16 24.192s8.915-.84 12.384-2.254c.377-.154.616-.527.616-.935V15.71c-3.573 1.57-8.084 2.515-13 2.515S6.573 17.28 3 15.71z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M3 7.852v5.292c0 .408.239.782.616.935 3.469 1.414 7.746 2.254 12.384 2.254s8.915-.84 12.384-2.254c.377-.153.616-.527.616-.935V7.852c-3.573 1.57-8.084 2.514-13 2.514S6.573 9.422 3 7.852zm26 15.767c-3.573 1.57-8.084 2.514-13 2.514S6.573 25.19 3 23.62v4.147C3 30.104 8.82 32 16 32s13-1.896 13-4.234"
                  ></path>
                </svg>
                <span>Game file size</span>
              </div>
              <div className="w-2/3 text-base text-[#484848] flex items-center gap-4">
                <p>Nintendo Switch: 1.6 GB</p>
                <p>Nintendo Switch 2: 1.6 GB</p>
              </div>
            </div>

            <div className="py-6 flex border-b border-gray-200">
              <div className="w-1/3 text-[#484848] font-bold flex items-center gap-4 text-lg">
                <svg
                  data-name="Switch lite"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  width="28"
                  role="presentation"
                  alt=""
                  data-testid="SwitchLiteIcon"
                  size="28"
                  color="currentColor"
                >
                  <path
                    d="M28.737 9.41H3.262a3.218 3.218 0 0 0-3.218 3.218v7.164a3.218 3.218 0 0 0 3.218 3.218h25.475a3.218 3.218 0 0 0 3.219-3.218v-7.164a3.218 3.218 0 0 0-3.219-3.218zm.112 2.173a.563.563 0 1 1-.563.563.563.563 0 0 1 .563-.563zm0 2.32a.563.563 0 1 1-.563.564.563.563 0 0 1 .563-.563zM3.146 12.106a1.2 1.2 0 1 1-1.2 1.201 1.2 1.2 0 0 1 1.2-1.2zm1.437 5.85a.125.125 0 0 1-.125.125h-.731a.133.133 0 0 0-.133.134v.73a.126.126 0 0 1-.125.126h-.636a.125.125 0 0 1-.126-.126v-.73a.133.133 0 0 0-.132-.134h-.732a.125.125 0 0 1-.125-.125v-.636a.125.125 0 0 1 .125-.125h.732a.133.133 0 0 0 .132-.133v-.73a.125.125 0 0 1 .126-.126h.636a.126.126 0 0 1 .125.125v.731a.133.133 0 0 0 .133.133h.73a.125.125 0 0 1 .126.125zm1.674 3.654h19.497V10.82H6.257zm20.807-8.302a.563.563 0 1 1 .563.563.563.563 0 0 1-.563-.563zm1.778 5.532a1.2 1.2 0 1 1 1.2-1.2 1.2 1.2 0 0 1-1.2 1.2zm1.23-4.97a.563.563 0 1 1 .562-.562.563.563 0 0 1-.563.563z"
                    fill="currentColor"
                    fill-rule="evenodd"
                  ></path>
                </svg>
                <span>Supported play modes</span>
              </div>
              <div className="w-2/3">
                <div className="flex items-center gap-8">
                  <div className="flex flex-col items-center justify-center text-center">
                    <svg
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      role="presentation"
                      alt
                      data-testid="TvModeIcon"
                      size="40"
                      color="currentColor"
                    >
                      <g fill="currentColor">
                        <path d="M11.903 16.114l-1.154-3.56H9.591l1.641 4.627h1.357l1.632-4.627h-1.163zm-7.604-2.58h1.36v3.646h1.058v-3.646h1.371v-.981H4.299zm17.743 9.126v.758H32v-6.702h-9.958z"></path>
                        <path d="M8.433 21.6H4.784v1.808h3.649v.01h1.656v-.01h3.645V21.6H10.09v-.737h8.443V8.582H0v12.281h8.433v.737zM2.11 18.956v-8.453h14.31v8.453H2.11z"></path>
                        <path d="M16.333 21.6h-.603v1.801h5.589v-.602h-4.986z"></path>
                      </g>
                    </svg>
                    <p className="text-base text-[#484848]">TV mode</p>
                  </div>
                  <div className="flex flex-col items-center justify-center text-center">
                    <svg
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      role="presentation"
                      alt=""
                      data-testid="TabletopModeIcon"
                      size="40"
                      color="currentColor"
                    >
                      <path
                        d="M31.32 18.242l-2.657-6.94-1.285 6.94h3.943zM28.174 5.336H6.418l-2.74 12.906h21.754l2.741-12.906zm-5.035 10.505H6.99l1.722-8.094h16.143l-1.717 8.094zm-21.741 5.03H0v.995h.02a.098.098 0 0 0-.02.059v2.008a2.734 2.734 0 0 0 2.736 2.731h7.426a2.737 2.737 0 0 0 2.741-2.731v-2.008a.18.18 0 0 0-.01-.06h.01v-.994H1.397zm7.64.31a1 1 0 1 1-1.004 1.002c0-.554.45-1.002 1.004-1.001zm-5.845 4.43a1.837 1.837 0 1 1 1.858-1.833c-.003.49-.2.958-.55 1.302a1.839 1.839 0 0 1-1.308.53zm3.24-1.833a1.009 1.009 0 0 1 1.004-.985.981.981 0 1 1-1.004.985zm2.605 2.57a.983.983 0 1 1 .99-.978.988.988 0 0 1-.99.977zm1.591-1.591a.982.982 0 1 1 0-1.964.982.982 0 1 1 0 1.964zM32 20.87H19.097v.995h.02a.098.098 0 0 0-.02.059v2.008a2.73 2.73 0 0 0 2.731 2.731h7.431A2.738 2.738 0 0 0 32 23.933v-2.009a.18.18 0 0 0-.01-.06H32v-.994zm-3.866.31a1 1 0 0 1-.006 1.999.999.999 0 1 1 .006-1.998zm-5.85 4.43a1.836 1.836 0 0 1 0-3.673 1.837 1.837 0 1 1 0 3.672zm3.24-1.833c.015-.545.459-.98 1.004-.985a.981.981 0 1 1 0 1.964c-.544 0-.99-.434-1.004-.979zm2.61 2.57a.983.983 0 1 1 .99-.978.988.988 0 0 1-.99.977zm1.586-1.591a.982.982 0 1 1 0-1.964.982.982 0 1 1 0 1.964z"
                        fill="currentColor"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                    <p className="text-base text-[#484848]">Tabletop mode</p>
                  </div>
                  <div className="flex flex-col items-center justify-center text-center">
                    <svg
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      role="presentation"
                      alt=""
                      data-testid="HandheldModeIcon"
                      size="40"
                      color="currentColor"
                    >
                      <path
                        d="M28.812 8.455h-2.353c-.014 0-.038.009-.052.009v-.01H5.621v.014c-.028-.004-.061-.013-.07-.013H3.192A3.196 3.196 0 0 0 0 11.65v8.696a3.203 3.203 0 0 0 3.193 3.198H5.55c.01 0 .043-.01.07-.015v.015h20.787v-.015a.163.163 0 0 0 .052.015h2.353A3.195 3.195 0 0 0 32 20.346V11.65a3.187 3.187 0 0 0-3.188-3.196zm-.183 1.973a1.014 1.014 0 1 1-1.012 1.012 1.006 1.006 0 0 1 1.012-1.012zm.994 4.276a1.003 1.003 0 1 1-2.005-.021 1.003 1.003 0 0 1 2.005.021zM3.521 10.428a1.89 1.89 0 1 1-.703 3.639 1.892 1.892 0 0 1-1.168-1.755c0-1.035.835-1.877 1.87-1.884zm1.007 6.22a1.001 1.001 0 0 1-1.509.882 1.007 1.007 0 0 1-.497-.882 1.024 1.024 0 0 1 .999-1.026 1.03 1.03 0 0 1 1.007 1.026zM.896 18.29a1.003 1.003 0 1 1 2.006.018 1.003 1.003 0 0 1-2.006-.018zm2.625 2.636a1.012 1.012 0 0 1-.725-1.727 1.013 1.013 0 0 1 1.732.713 1.008 1.008 0 0 1-1.007 1.014zm1.636-1.623a1.02 1.02 0 1 1-.004-2.04 1.02 1.02 0 0 1 .004 2.04zm20.092 1.42H6.774v-9.45H25.25v9.45zm.722-7.66a1.021 1.021 0 1 1 2.043.009 1.021 1.021 0 0 1-2.043-.009zm2.658 7.863a1.892 1.892 0 1 1 1.866-1.88 1.88 1.88 0 0 1-1.866 1.88zm1.622-6.836a1.019 1.019 0 0 1-.748-1.726 1.018 1.018 0 1 1 .748 1.726z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <p className="text-base text-[#484848]">Handheld mode</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-4">
                  Software compatibility and play experience may differ on
                  Nintendo Switch Lite. Additional accessories may be required
                  (sold <br /> separately). See support for details.
                </p>
              </div>
            </div>

            <div className="py-6 flex border-b border-gray-200">
              <div className="w-1/3 text-gray-600 font-bold flex items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  xml:space="preserve"
                  width="28"
                  role="presentation"
                  alt=""
                  data-testid="GroupIcon"
                  size="28"
                  color="currentColor"
                >
                  <path
                    fill="currentColor"
                    d="M9 13c0 3.8 3.1 6.9 6.9 6.9 3.8 0 6.9-3.1 6.9-6.9 0-3.8-3.1-6.9-6.9-6.9C12.1 6.1 9 9.2 9 13z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M24.3 13c0 .7-.1 1.4-.3 2h.3c3.2 0 5.8-2.6 5.8-5.9 0-3.3-2.6-5.9-5.8-5.9-1.8 0-3.5.9-4.5 2.3 2.7 1.4 4.5 4.2 4.5 7.5zM7.4 15h.3c-.2-.6-.3-1.3-.3-2 0-3.3 1.8-6.1 4.5-7.5-1.1-1.4-2.7-2.3-4.5-2.3-3.2 0-5.8 2.6-5.8 5.9 0 3.3 2.6 5.9 5.8 5.9zm5.1 5.7c-1.8-.8-3.2-2.2-4.1-3.9-.3 0-.6-.1-1-.1C3.3 16.8 0 19.6 0 23h8.2c1.2-1 2.6-1.8 4.3-2.3zm11.8-3.9c-.3 0-.7 0-1 .1-.9 1.7-2.3 3.1-4.1 3.9 1.6.5 3.1 1.3 4.2 2.3h8.2c.2-3.5-3.2-6.3-7.3-6.3zm-8.4 5.1c-4.8 0-8.7 3-9 6.7h18c-.4-3.8-4.3-6.7-9-6.7z"
                  ></path>
                </svg>
                <span className="text-base text-[#484848] text-bold">
                  No. of players
                </span>
              </div>
              <div className="w-2/3 flex items-center gap-4">
                <a
                  href="https://www.nintendo.com/us/search/#cat=gme&f=playerCount&playerCount=Single%20Player"
                  className="text-[#e60012] font-semibold border-b-2 border-[#e60012] hover:text-[#ac000d] hover:border-[#ac000d] transition-all duration-300"
                >
                  Single System (1)
                </a>
                <a
                  href="https://www.nintendo.com/us/search/#cat=gme&f=playerCount&playerCount=Single%20Player"
                  className="text-[#e60012] font-semibold border-b-2 border-[#e60012] hover:text-[#ac000d] hover:border-[#ac000d] transition-all duration-300"
                >
                  Local wireless (1)
                </a>
                <a
                  href="https://www.nintendo.com/us/search/#cat=gme&f=playerCount&playerCount=4%2B"
                  className="text-[#e60012] font-semibold border-b-2 border-[#e60012] hover:text-[#ac000d] hover:border-[#ac000d] transition-all duration-300"
                >
                  Online (1-4)
                </a>
              </div>
            </div>

            <div className="py-6 flex border-b border-gray-200">
              <div className="w-1/3 text-gray-600 font-semibold flex items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  width="28"
                  role="presentation"
                  alt=""
                  data-testid="FamilyAccountIcon"
                  size="28"
                  color="currentColor"
                >
                  <path
                    d="M24.3 10.7c4.2 0 7.7 3.3 7.7 7.4s-3.5 7.4-7.7 7.4c-1.9 0-3.5-.6-4.9-1.7-2.2 1.9-5 3-7.9 3-6.3 0-11.5-5-11.5-11.1 0-6 5.2-11 11.6-11 4.6 0 8.6 2.6 10.4 6.4.7-.2 1.5-.4 2.3-.4zM11.5 21.4c1.8 0 3.5-.8 4.7-2 .4-.4.3-1.1-.1-1.5H16c-.5-.4-1.2-.3-1.5.2-.7.8-1.9 1.3-3 1.3-1.2 0-2.2-.5-2.9-1.3-.4-.5-1.1-.5-1.5-.2-.5.4-.5 1-.2 1.5v.1c1.1 1.2 2.8 1.9 4.6 1.9zm-1.6-8c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5.7 1.5 1.5 1.5 1.5-.7 1.5-1.5zm6.3 0c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5.7 1.5 1.5 1.5 1.5-.7 1.5-1.5zm13.7 4.8c0-3-2.5-5.5-5.6-5.5s-5.6 2.5-5.6 5.5 2.5 5.5 5.6 5.5c3.2-.1 5.6-2.5 5.6-5.5zm-6.6-1.5c0 .5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9zm3.8 0c0 .5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9zm-2.9 4.9c-1.1 0-2.1-.5-2.8-1.2-.2-.2-.2-.6.1-.8.3-.2.7-.2.9.1.5.5 1.1.8 1.8.8s1.4-.3 1.9-.8c.2-.2.6-.3.9-.1.2.2.3.6.1.8-.7.7-1.7 1.2-2.9 1.2z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className="text-lg text-[#484848] font-bold">
                  Nintendo Account family-group lending
                </span>
              </div>
              <div className="w-2/3 text-[#484848] font-light">
                <p>Supported</p>
              </div>
            </div>

            <div className="py-6 flex border-b border-gray-200">
              <div className="w-1/3 text-[#484848] font-bold flex items-center gap-4 text-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  width="28"
                  role="presentation"
                  alt=""
                  data-testid="DPadIcon"
                  size="28"
                  color="currentColor"
                >
                  <path
                    d="M30.1 10.4h-8.5V1.9c0-1-.8-1.9-1.9-1.9h-7.5c-1 0-1.9.8-1.9 1.9v8.5H1.9c-1 0-1.9.8-1.9 1.9v7.5c0 1 .8 1.9 1.9 1.9h8.5v8.5c0 1 .8 1.9 1.9 1.9h7.5c1 0 1.9-.8 1.9-1.9v-8.5h8.5c1 0 1.9-.8 1.9-1.9v-7.5c-.1-1.1-.9-1.9-2-1.9zM7.5 16.9H3.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h3.8c.5 0 .9.4.9.9s-.5.9-1 .9zm9.4 11.3c0 .5-.4.9-.9.9s-.9-.4-.9-.9v-3.8c0-.5.4-.9.9-.9s.9.4.9.9v3.8zm0-20.7c0 .5-.4.9-.9.9s-.9-.4-.9-.9V3.8c0-.5.4-.9.9-.9s.9.4.9.9v3.7zm11.3 9.4h-3.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h3.8c.5 0 .9.4.9.9.1.5-.3.9-.9.9z"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    fill="currentColor"
                  ></path>
                </svg>
                <span>Genre</span>
              </div>
              <div className="w-2/3">
                <a
                  href="https://www.nintendo.com/us/search/#cat=gme&f=gameGenreLabels&gameGenreLabels=Simulation"
                  className="text-[#e60012] font-semibold border-b-2 border-[#e60012] hover:text-[#ac000d] hover:border-[#ac000d] transition-all duration-300"
                >
                  Simulation
                </a>
              </div>
            </div>

            <div className="py-6 flex border-b border-gray-200">
              <div className="w-1/3 text-gray-600 font-semibold flex items-center gap-4">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width="28"
                    role="presentation"
                    alt=""
                    data-testid="NsoIcon"
                    size="28"
                    color="currentColor"
                  >
                    <path
                      fill="#e60012"
                      d="M0 0v32h32V0zm8.785 9.232a3.7 3.7 0 0 1 3.7-3.7h3.154a.106.106 0 0 1 .106.106v14.218a.106.106 0 0 1-.106.106h-3.154a3.7 3.7 0 0 1-3.7-3.7zM6.767 26.596a2.034 2.034 0 1 1 2.064-2.034 2.05 2.05 0 0 1-2.064 2.034zm6.473-.124h-.677l-2.032-2.547v2.547h-.773v-3.82h.77l1.9 2.464v-2.464h.812zm4.025 0H14.35v-3.82h.82v3.075h2.094zm1.616 0h-.82v-3.82h.82zm-1.586-6.51a.105.105 0 0 1-.106-.106V5.626a.093.093 0 0 1 .094-.094h2.232a3.7 3.7 0 0 1 3.7 3.7v7.03a3.7 3.7 0 0 1-3.7 3.7zm6.178 6.51h-.676l-2.033-2.547v2.547h-.772v-3.82h.769l1.901 2.464v-2.464h.811zm4.27-3.075H25.41v.76h2.22v.707h-2.22v.863h2.333v.745H24.59v-3.82h3.154z"
                    ></path>
                    <path
                      fill="#e60012"
                      d="M6.767 23.306a1.257 1.257 0 1 0 1.214 1.256 1.236 1.236 0 0 0-1.214-1.256zm5.718-4.508h2.097V6.696h-2.097A2.536 2.536 0 0 0 9.95 9.232v7.03a2.536 2.536 0 0 0 2.536 2.536zm-.097-10.294a1.357 1.357 0 1 1-1.356 1.356 1.357 1.357 0 0 1 1.356-1.356zm7.655 3.506a1.459 1.459 0 1 0 1.46 1.458 1.459 1.459 0 0 0-1.46-1.458z"
                    ></path>
                  </svg>
                </div>
                <span className="text-[#484848] font-bold text-lg">
                  Nintendo Switch Online
                </span>
              </div>
              <div className="w-2/3">
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.nintendo.com/us/switch/online/"
                    className="text-[#e60012] font-semibold border-b-2 border-[#e60012] hover:text-[#ac000d] hover:border-[#ac000d] transition-all duration-300"
                  >
                    Online play
                  </a>
                  <a
                    href="https://www.nintendo.com/us/switch/online/"
                    className="text-[#e60012] font-semibold border-b-2 border-[#e60012] hover:text-[#ac000d] hover:border-[#ac000d] transition-all duration-300"
                  >
                    Save Data Cloud
                  </a>
                </div>
                <p className="text-xs text-[#484848] mt-2">
                  Play online, access classic NES™ and Super NES™ games, and
                  more with a Nintendo Switch Online membership.{" "}
                  <a
                    href="https://www.nintendo.com/us/switch/online/"
                    className="text-[#e60012] font-semibold border-b-2 border-[#e60012] hover:text-[#ac000d] hover:border-[#ac000d] transition-all duration-300"
                  >
                    Learn more
                  </a>
                </p>
              </div>
            </div>

            <div className="py-6 flex border-b border-gray-200">
              <div className="w-1/3 text-gray-600 font-semibold flex items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  width="28"
                  role="presentation"
                  alt=""
                  data-testid="SwitchIcon"
                  size="28"
                  color="currentColor"
                >
                  <path
                    d="M13.54 0a.18.18 0 0 1 .17.17v31.66a.15.15 0 0 1-.17.17H8.11a6.86 6.86 0 0 1-6.85-6.8V6.74A6.81 6.81 0 0 1 8.11 0h5.43zm10.4 0a6.77 6.77 0 0 1 6.8 6.74V25.2a6.82 6.82 0 0 1-6.85 6.8h-5.43a.15.15 0 0 1-.17-.17V.17c0-.11.11-.17.22-.17h5.43zM7.49 19.6a1.26 1.26 0 1 0 0 2.51 1.32 1.32 0 0 0 1.31-1.25 1.28 1.28 0 0 0-1.31-1.26zm17-3.6a2.86 2.86 0 0 0-2.85 2.86A2.86 2.86 0 1 0 24.51 16zm-14.28.86a1.26 1.26 0 1 0 0 2.51 1.35 1.35 0 0 0 1.31-1.26 1.32 1.32 0 0 0-1.29-1.25zm-5.49 0a1.26 1.26 0 1 0 0 2.51 1.36 1.36 0 0 0 1.32-1.26 1.28 1.28 0 0 0-1.3-1.25zm2.75-2.69a1.26 1.26 0 1 0 0 2.52 1.37 1.37 0 0 0 1.33-1.26 1.28 1.28 0 0 0-1.31-1.26zm17-4a1.36 1.36 0 0 0-1.31 1.26 1.32 1.32 0 1 0 1.31-1.26zm-17-5.08a2.86 2.86 0 1 0 0 5.71 2.86 2.86 0 0 0 2.85-2.86 2.82 2.82 0 0 0-2.83-2.85zm19.77 2.4a1.26 1.26 0 1 0 1.31 1.25 1.32 1.32 0 0 0-1.29-1.25zm-5.43 0a1.26 1.26 0 1 0 1.31 1.25 1.29 1.29 0 0 0-1.29-1.25zm2.68-2.75A1.36 1.36 0 0 0 23.2 6a1.32 1.32 0 1 0 1.31-1.26z"
                    fill="currentColor"
                    fill-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-[#484848] font-bold text-lg">System</span>
              </div>
              <div className="w-2/3">
                <a
                  href="https://www.nintendo.com/us/store/games/#p=1&sort=df&show=0&f=corePlatforms&corePlatforms=Nintendo+Switch"
                  className="text-[#e60012] font-semibold border-b-2 border-[#e60012] hover:text-[#ac000d] hover:border-[#ac000d] transition-all duration-300"
                >
                  Nintendo Switch
                </a>
                <p className="text-xs text-gray-500 mt-2">
                  Which system(s) will play this game?{" "}
                  <a
                    href="#"
                    className="text-[#e60012] font-semibold border-b-2 border-[#e60012] hover:text-[#ac000d] hover:border-[#ac000d] transition-all duration-300"
                  >
                    Learn more
                  </a>
                </p>
              </div>
            </div>

            <div className="py-6 flex border-b border-gray-200">
              <div className="w-1/3 text-gray-600 font-semibold flex items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  width="28"
                  role="presentation"
                  alt=""
                  data-testid="BuildingIcon"
                  size="28"
                  color="currentColor"
                >
                  <path
                    d="M28.9 2.1C28.9 1 28 0 26.8 0H5.6C4.4 0 3.5 1 3.5 2.1v29.8H12v-6.4h7.4v6.4h9.5V2.1zm-19 25.6H6.7v-3.2h3.2v3.2zm0-5.4H6.7v-3.2h3.2v3.2zm0-5.3H6.7v-3.2h3.2V17zm0-5.3H6.7V8.5h3.2v3.2zm0-5.3H6.7V3.2h3.2v3.2zm5.2 15.9H12v-3.2h3.2v3.2zm0-5.3H12v-3.2h3.2V17zm0-5.3H12V8.5h3.2v3.2zm0-5.3H12V3.2h3.2v3.2zm5.3 15.9h-3.2v-3.2h3.2v3.2zm0-5.3h-3.2v-3.2h3.2V17zm0-5.3h-3.2V8.5h3.2v3.2zm0-5.3h-3.2V3.2h3.2v3.2zm5.3 21.3h-3.2v-3.2h3.2v3.2zm0-5.4h-3.2v-3.2h3.2v3.2zm0-5.3h-3.2v-3.2h3.2V17zm0-5.3h-3.2V8.5h3.2v3.2zm0-5.3h-3.2V3.2h3.2v3.2z"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className="text-[#484848] font-bold text-lg">
                  Publisher
                </span>
              </div>
              <div className="w-2/3">
                <a
                  href="https://www.nintendo.com/us/search/#cat=gme&f=softwarePublisher&softwarePublisher=ConcernedApe"
                  className="text-[#e60012] font-semibold border-b-2 border-[#e60012] hover:text-[#ac000d] hover:border-[#ac000d] transition-all duration-300"
                >
                  ConcernedApe
                </a>
              </div>
            </div>

            <div className="py-6 flex border-b border-gray-200">
              <div className="w-1/3 text-gray-600 font-semibold flex items-center gap-4">
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  role="presentation"
                  alt=""
                  data-testid="WrenchIcon"
                  size="28"
                  color="currentColor"
                >
                  <path
                    fill="currentColor"
                    d="M23.0616 18.5338L15.0011 10.4733C15.3211 9.62528 15.4939 8.70691 15.4939 7.75014C15.4971 3.46868 12.0284 0 7.74694 0C6.78697 0 5.8686 0.175994 5.02383 0.492784L10.0125 5.48142L5.48142 10.0125L0.492784 5.02383C0.172794 5.8718 0 6.79017 0 7.74694C0 12.0252 3.46868 15.4939 7.74694 15.4939C8.70691 15.4939 9.62528 15.3179 10.4701 15.0011L18.5306 23.0616C19.7817 24.3128 21.8105 24.3128 23.0616 23.0616C24.3128 21.8105 24.3128 19.7817 23.0616 18.5306V18.5338ZM20.4921 21.9193C19.6729 21.9193 19.0106 21.2569 19.0106 20.4377C19.0106 19.6185 19.6729 18.9562 20.4921 18.9562C21.3113 18.9562 21.9737 19.6185 21.9737 20.4377C21.9737 21.2569 21.3113 21.9193 20.4921 21.9193Z"
                  ></path>
                </svg>
                <span className="text-[#484848] font-bold text-lg">
                  Developer
                </span>
              </div>
              <div className="w-2/3">
                <a
                  href="https://www.nintendo.com/us/search/#cat=gme&f=softwareDeveloper&softwareDeveloper=ConcernedApe"
                  className="text-[#e60012] font-semibold border-b-2 border-[#e60012] hover:text-[#ac000d] hover:border-[#ac000d] transition-all duration-300"
                >
                  ConcernedApe
                </a>
              </div>
            </div>

            <div className="py-6 flex border-b border-gray-200">
              <div className="w-1/3 text-[#484848] font-bold flex items-center gap-4 text-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  width="28"
                  role="presentation"
                  alt=""
                  data-testid="GlobeIcon"
                  size="28"
                  color="currentColor"
                >
                  <path
                    d="M16 0C11.7 0 7.7 1.7 4.7 4.7S0 11.7 0 16c0 4.3 1.7 8.3 4.7 11.3S11.7 32 16 32c8.8 0 16-7.2 16-16S24.8 0 16 0zm-5.2 4c-.5.9-1 1.9-1.4 3-.6-.2-1.3-.5-2-.8 1-1 2.2-1.7 3.4-2.2zM5.5 8.1c1 .5 2.1 1 3.2 1.4-.4 1.6-.6 3.4-.7 5.2H3c.2-2.4 1.1-4.6 2.5-6.6zM3 17.3h5.1c.1 1.8.3 3.5.7 5.2-1.1.4-2.2.8-3.2 1.4-1.5-2-2.4-4.2-2.6-6.6zm4.4 8.5c.7-.3 1.4-.6 2.1-.8.4 1.1.9 2.1 1.4 3-1.3-.5-2.5-1.2-3.5-2.2zm7.3 2.8c-1-.8-2-2.3-2.7-4.3.9-.2 1.8-.3 2.7-.4v4.7zm0-7.3c-1.1.1-2.3.2-3.4.5-.3-1.4-.5-2.9-.6-4.5h4v4zm0-6.6h-4c.1-1.6.3-3.1.6-4.5 1.1.2 2.3.4 3.4.5v4zm0-6.7c-1 0-1.8-.1-2.7-.3.7-2 1.7-3.5 2.7-4.2V8zM29 14.7h-5.1c-.1-1.8-.3-3.5-.7-5.2 1.1-.4 2.2-.8 3.2-1.4 1.5 2 2.4 4.2 2.6 6.6zm-4.4-8.5c-.7.3-1.4.6-2.1.8-.4-1.1-.9-2.2-1.4-3.1 1.3.6 2.5 1.3 3.5 2.3zm-7.3-2.7c1 .8 1.9 2.3 2.6 4.2-.8.2-1.7.3-2.6.3V3.5zm0 7.2c1.1-.1 2.3-.2 3.4-.4.3 1.4.5 2.9.6 4.5h-3.9v-4.1zm0 17.8V24c.9.1 1.8.2 2.6.4-.6 1.8-1.6 3.4-2.6 4.1zm0-7.2v-4h3.9c-.1 1.6-.3 3.1-.6 4.5-1-.2-2.1-.4-3.3-.5zm3.8 6.8c.5-.9 1-1.9 1.4-3.1.7.2 1.4.5 2.1.9-1 .9-2.2 1.6-3.5 2.2zm5.4-4.2c-1-.5-2.1-1-3.2-1.4.4-1.6.6-3.4.7-5.1h5c-.2 2.3-1.1 4.5-2.5 6.5z"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    fill="currentColor"
                  ></path>
                </svg>
                <span>Supported languages</span>
              </div>
              <div className="w-2/3 text-base text-[#484848]">
                <p>
                  English, French, German, Italian, Japanese, Korean,
                  Portuguese, Russian, Simplified Chinese, <br /> Spanish,
                  Traditional Chinese
                </p>
              </div>
            </div>

            <div className="py-6 flex border-b border-gray-200">
              <div className="w-1/3 text-[#484848] font-bold flex items-center gap-4 text-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  xml:space="preserve"
                  width="28"
                  role="presentation"
                  alt=""
                  data-testid="CalendarIcon"
                  size="28"
                  color="currentColor"
                >
                  <path
                    fill="currentColor"
                    d="M21.8 19.1h5.6c.5 0 .9-.4.9-.9v-5.6c0-.5-.4-.9-.9-.9h-5.6c-.5 0-.9.4-.9.9v5.6c0 .5.4.9.9.9zm0 8.6h5.6c.5 0 .9-.4.9-.9v-5.6c0-.5-.4-.9-.9-.9h-5.6c-.5 0-.9.4-.9.9v5.6c0 .5.4.9.9.9zm1.6-20.3h1.5c.5 0 .9-.4.9-.9v-5c0-.5-.4-.9-.9-.9h-1.5c-.5 0-.9.4-.9.9v5c0 .5.4.9.9.9zm-16.3 0h1.5c.5 0 .9-.4.9-.9v-5c0-.5-.4-.9-.9-.9H7.1c-.5 0-.9.4-.9.9v5c0 .5.4.9.9.9zM6.1 20.3h5.6c.5 0 .9-.4.9-.9v-5.6c0-.5-.4-.9-.9-.9h-5.6c-.5 0-.9.4-.9.9v5.6c0 .5.4.9.9.9z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M29.5 4.3H27v2.2c0 1.2-.9 2.1-2.1 2.1h-1.5c-1.2 0-2.1-1-2.1-2.1V4.3H10.7v2.2c0 1.2-.9 2.1-2.1 2.1H7.1C5.9 8.6 5 7.6 5 6.5V4.3H2.5C1.1 4.3 0 5.4 0 6.7V29c0 1.4 1.1 2.5 2.5 2.5h27c1.4 0 2.5-1.1 2.5-2.5V6.7c0-1.3-1.1-2.4-2.5-2.4zm0 24.7h-27V10.4h27V29z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M13.2 19.1h5.6c.5 0 .9-.4.9-.9v-5.6c0-.5-.4-.9-.9-.9h-5.6c-.5 0-.9.4-.9.9v5.6c0 .5.4.9.9.9zm-8.6 8.6h5.6c.5 0 .9-.4.9-.9v-5.6c0-.5-.4-.9-.9-.9H4.6c-.5 0-.9.4-.9.9v5.6c0 .5.4.9.9.9zm0-8.6h5.6c.5 0 .9-.4.9-.9v-5.6c0-.5-.4-.9-.9-.9H4.6c-.5 0-.9.4-.9.9v5.6c0 .5.4.9.9.9z"
                  ></path>
                </svg>
                <span>Release date</span>
              </div>
              <div className="w-2/3 text-base text-[#484848]">
                <p>October 5, 2017</p>
              </div>
            </div>

            <div className="py-6 flex border-b border-gray-200">
              <div className="w-1/3 text-[#484848] font-bold flex items-center gap-4 text-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  width="28"
                  role="presentation"
                  alt=""
                  data-testid="GearIcon"
                  size="28"
                  color="currentColor"
                >
                  <path
                    d="M30.6 13.1h-2.4c-.3-1.4-.8-2.6-1.5-3.8l1.7-1.7c.5-.5.5-1.4 0-1.9l-2.1-2.1c-.5-.5-1.4-.5-1.9 0l-1.7 1.7c-1.2-.7-2.4-1.3-3.8-1.5V1.4c0-.7-.6-1.4-1.4-1.4h-3c-.7 0-1.4.6-1.4 1.4v2.4c-1.4.4-2.6.8-3.8 1.5L7.6 3.6c-.5-.5-1.4-.5-1.9 0L3.6 5.7c-.6.5-.6 1.4 0 1.9l1.7 1.7c-.7 1.2-1.3 2.4-1.5 3.8H1.3c-.7 0-1.4.6-1.4 1.4v3c0 .7.6 1.4 1.4 1.4h2.4c.3 1.4.8 2.6 1.5 3.8l-1.7 1.7c-.5.5-.5 1.4 0 1.9l2.1 2.1c.6.5 1.4.5 2 0l1.7-1.7c1.2.7 2.4 1.3 3.8 1.5v2.5c0 .7.6 1.4 1.4 1.4h3c.7 0 1.4-.6 1.4-1.4v-2.4c1.4-.3 2.6-.8 3.8-1.5l1.7 1.7c.5.5 1.4.5 1.9 0l2.1-2.1c.5-.5.5-1.4 0-1.9l-1.7-1.7c.7-1.2 1.3-2.4 1.5-3.8h2.4c.7 0 1.4-.6 1.4-1.4v-3c.1-.9-.6-1.5-1.4-1.5zM16 21.6c-3.1 0-5.6-2.5-5.6-5.6 0-3.1 2.5-5.6 5.6-5.6 3.1 0 5.6 2.5 5.6 5.6-.1 3.1-2.6 5.6-5.6 5.6z"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    fill="currentColor"
                  ></path>
                </svg>
                <span>ESRB rating</span>
              </div>
              <div className="w-2/3 text-base text-[#484848] flex items-start gap-4">
                <a href="https://www.esrb.org/ratings-guide/">
                  <img
                    src={`${import.meta.env.BASE_URL}esrb.jpg`}
                    alt="ESRB Rating"
                    className="w-12 h-16"
                  />
                </a>
                <div className="text-sm">
                  <p className="border-b border-gray-400 pb-1">
                    <a href="https://www.esrb.org/ratings-guide/">
                      Fantasy Violence, Mild Blood, Mild Language, Simulated{" "}
                      <br />
                      Gambling, Use of Alcohol, Use of Tobacco
                    </a>
                  </p>
                  <p className="pt-1">Users Interact</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-base font-bold text-[#484848] ">
                About the Number of Players
              </h3>
              <p className="text-sm text-[#484848]">
                1-4 with online multiplayer functionality
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 py-12 px-14 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">
            More like this
          </h2>
          <div className="relative">
            <button
              onClick={handlePrev}
              disabled={clampedIndex === 0}
              className={`absolute top-1/3 left-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg border border-gray-200 hover:bg-gray-100 z-10 ${
                clampedIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <div
              className="overflow-hidden"
              style={{
                width: (CARD_WIDTH + CARD_GAP) * visibleCount - CARD_GAP,
              }}
            >
              <div
                ref={carouselRef}
                className="flex pb-4 transition-transform duration-500"
                style={{
                  gap: `${CARD_GAP}px`,
                  transform: `translateX(calc(-${
                    clampedIndex * (CARD_WIDTH + CARD_GAP)
                  }px + ${dragDelta}px))`,
                  transitionTimingFunction: dragging
                    ? "none"
                    : "cubic-bezier(.77,0,.18,1)",
                  cursor: dragging ? "grabbing" : "grab",
                }}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
                onMouseDown={onTouchStart}
                onMouseMove={(e) => dragging && onTouchMove(e)}
                onMouseUp={onTouchEnd}
                onMouseLeave={onTouchEnd}
              >
                {moreLikeThisGames.map((game, index) => (
                  <a
                    key={index}
                    href={game.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex-shrink-0 border border-gray-200 rounded-lg bg-white transition-all duration-300 ${
                      visibleCount === 1 ? "w-80" : "w-60"
                    }`}
                    style={{
                      minWidth: visibleCount === 1 ? 320 : 256,
                      maxWidth: visibleCount === 1 ? 320 : 256,
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    <div className="overflow-hidden rounded-t-lg">
                      <img
                        src={`${
                          import.meta.env.BASE_URL
                        }${game.imageUrl.replace(/^\//, "")}`}
                        alt={game.title}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4 flex flex-col h-[15rem]">
                      <div className="flex-1">
                        <h3 className="font-bold text-[#484848] text-base transition-colors duration-300 group-hover:text-[#e60012]">
                          {game.title}
                        </h3>
                        <p className="text-xs text-[#727272]">{game.date}</p>
                      </div>
                      <div>
                        {game.hasDemo && (
                          <span className="inline-block mb-2 px-3 py-1 text-xs font-semibold bg-blue-600 text-white rounded-full shadow-sm">
                            Free demo
                          </span>
                        )}
                        {game.saleEnds && (
                          <span className="inline-block mb-2 px-3 py-1 text-xs font-semibold bg-red-600 text-white rounded-full shadow-sm">
                            Sale ends: {game.saleEnds}
                          </span>
                        )}
                        {game.salePrice &&
                        game.originalPrice &&
                        game.discount ? (
                          <div className="flex items-center gap-2">
                            <span className="text-base font-bold text-[#484848]">
                              {game.salePrice}
                            </span>
                            <span className="text-sm line-through text-gray-400">
                              {game.originalPrice}
                            </span>
                            <span className="text-xs font-bold bg-red-600 text-white px-2 py-0.5 rounded">
                              {game.discount}
                            </span>
                          </div>
                        ) : (
                          <p className="text-base font-bold text-[#484848]">
                            {game.price}
                          </p>
                        )}
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center text-xs text-gray-600">
                            <div className="w-4 h-4 flex items-center justify-center rounded-sm mr-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32"
                                width="24"
                                role="presentation"
                                alt=""
                                data-testid="DPadIcon"
                                color="currentColor"
                                size="24"
                              >
                                <path
                                  d="M30.1 10.4h-8.5V1.9c0-1-.8-1.9-1.9-1.9h-7.5c-1 0-1.9.8-1.9 1.9v8.5H1.9c-1 0-1.9.8-1.9 1.9v7.5c0 1 .8 1.9 1.9 1.9h8.5v8.5c0 1 .8 1.9 1.9 1.9h7.5c1 0 1.9-.8 1.9-1.9v-8.5h8.5c1 0 1.9-.8 1.9-1.9v-7.5c-.1-1.1-.9-1.9-2-1.9zM7.5 16.9H3.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h3.8c.5 0 .9.4.9.9s-.5.9-1 .9zm9.4 11.3c0 .5-.4.9-.9.9s-.9-.4-.9-.9v-3.8c0-.5.4-.9.9-.9s.9.4.9.9v3.8zm0-20.7c0 .5-.4.9-.9.9s-.9-.4-.9-.9V3.8c0-.5.4-.9.9-.9s.9.4.9.9v3.7zm11.3 9.4h-3.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h3.8c.5 0 .9.4.9.9.1.5-.3.9-.9.9z"
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </div>
                            <span>Games</span>
                          </div>
                          <button
                            className="text-[#e60012] hover:text-[#ac000d] hover:drop-shadow-md transition-all duration-300 ease-in-out"
                            onMouseEnter={() => handleHeartEnter(index)}
                            onMouseLeave={() => handleHeartLeave(index)}
                            onClick={(e) => e.preventDefault()}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-10 h-10"
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
                                  heartHoveredIndex === index
                                    ? "opacity-100"
                                    : "opacity-0"
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
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            <button
              onClick={handleNext}
              disabled={clampedIndex + visibleCount >= moreLikeThisGames.length}
              className={`absolute top-1/3 -right-24 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg border border-gray-200 hover:bg-gray-100 z-10 ${
                clampedIndex + visibleCount >= moreLikeThisGames.length
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
          <div className="mt-20 text-xs text-[#484848] space-y-4">
            <p>
              WARNING: If you have epilepsy or have had seizures or other
              unusual reactions to flashing lights or patterns, consult a doctor
              before playing video games. All users should read the Health and
              Safety Information available in the system settings before using
              this software.
            </p>
            <p>
              Nintendo Switch Online membership (sold separately) and Nintendo
              Account required for online play. Not available in all countries.
              Internet access required for online features. Terms apply.
              nintendo.com/switch-online
            </p>
            <p>
              Stardew Valley © ConcernedApe LLC 2016-2020. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GameDescription;
