import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import AnnouncementBar from "./components/AnnouncementBar";
import GameDetails from "./components/GameDetails";
import GameDescription from "./components/GameDescription";
import StickyNav from "./components/StickyNav";
import Footer from "./components/Footer";

function App() {
  const [isStickyNavVisible, setIsStickyNavVisible] = useState(false);
  const triggerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (triggerRef.current) {
        const { top, height } = triggerRef.current.getBoundingClientRect();
        // Show sticky nav when scrolled halfway down the GameDetails component
        if (top < -(height * 0.75)) {
          setIsStickyNavVisible(true);
        } else {
          setIsStickyNavVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <AnnouncementBar />
      <div ref={triggerRef}>
        <GameDetails />
      </div>
      <GameDescription />
      <StickyNav isVisible={isStickyNavVisible} />
      <Footer />
    </>
  );
}

export default App;
