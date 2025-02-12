"use client";
import React, { useState, useEffect, useRef } from "react";

const Bot = () => {
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowMessage(false);
      setShowPopup(false);
    }, 1500);

    return () => clearTimeout(0.5);
  }, []);

  const [showPopup, setShowPopup] = useState(false);

  const hideHim = useRef(false);

  const handleIconClick = () => {
    setShowPopup(true);
    hideHim.current = !hideHim.current;
  };

  const handleCloseClick = (event) => {
    event.stopPropagation();
    setShowPopup(false);
    hideHim.current = false;
  };

  return (
    <div className="h-screen w-screen relative flex justify-end">
      <div onClick={handleIconClick} className="cursor-pointer">
        <img
          src="/bot/boticon.png"
          className={`h-40 w-40 transition-all duration-500 hover:scale-110 z-[100] ${
            hideHim.current ? "translate-x-[50px]" : ""
          }`}
          alt=""
          style={{ position: "fixed", bottom: 60, right: -60 }}
        />
        {showMessage && (
          <div className="fixed top-80 z-[100]">
            <img
              src="/bot/text.png"
              className="h-30 w-40 transition-all duration-500 scale-80 mx-10"
              alt=""
              style={{ position: "fixed", bottom: 200, right: 0 }}
            />
          </div>
        )}
        {showPopup && (
          <div
            className={`fixed sm:bottom-0 sm:right-0 md:bottom-4 md:right-28 bg-[#E9F8E8] sm:w-screen sm:h-screen md:w-1/4 md:h-full sm:rounded-0 md:rounded-xl shadow z-[100] transition-all duration-500
            }`}
            style={{
              opacity: showPopup ? 1 : 0,
              transition: "opacity 1s, transform 1s",
              height: `${showPopup ? "650px" : "0px"}`,
            }}
          >
            <div className="bg-[#73AAA6]/90 rounded-t-xl">
              <div className="flex justify-between md:text-xl font-bold p-6 text-white bangers">
                SHRESHTA CHATBOT
                <div className="flex gap-4">
                  <button onClick={handleCloseClick}>
                    <img src="/bot/hide.png" className="w-4"></img>
                  </button>
                </div>
              </div>
            </div>
            <img src="/bot/back.png"></img>
            <style jsx>{`
              @media (max-width: 640px) {
                .fixed {
                  font-size: 2rem !important;
                  rounded-0 !important;
                  top: 0 !important;
                  right: 0 !important;
                  bottom: 0 !important;
                  left: 0 !important;
                  height: ${showPopup ? "100%" : "0"} !important;
                  transform: none !important;
                }
              }
            `}</style>
            <div className="flex w-full sm:h-full justify-center absolute bottom-0 md:h-16 pb-10">
              <div className="flex gap-2">
                <input
                  type="text"
                  id=""
                  className="text-xl rounded-lg bg-[#73AAA6]/90 py-4 px-4 text-white focus:outline-none placeholder:text-white dog"
                  placeholder="Type your question here..."
                  required
                />
                <button className="flex text-sm rounded-lg bg-[#73AAA6]/90 py-4 items-center px-4 text-white">
                  <img src="/bot/arrow.png" alt="" width={15} height={15} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bot;
