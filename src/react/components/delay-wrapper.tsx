"use client";

import { useState, useEffect } from "react";
import type { ReactNode } from "react";

import "@/sass/components/_delay-wrapper.scss";

interface DelayWrapperProps {
  children: ReactNode;
}

const DelayWrapper = ({ children }: DelayWrapperProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const SECONDS_TO_DISPLAY = 780;
    let attempts = 0;
    let elsDisplayed = false;
    const alreadyDisplayedKey = `alreadyElsDisplayed${SECONDS_TO_DISPLAY}`;
    const alreadyElsDisplayed = localStorage.getItem(alreadyDisplayedKey);
    
    const showHiddenElements = function () { 
      elsDisplayed = true;
      setIsVisible(true);
      localStorage.setItem(alreadyDisplayedKey, "true");
    }

    const startWatchVideoProgress = function () {
    const { smartplayer } = window;

      console.log("smartplayer => ", smartplayer);
      
      if (typeof smartplayer === "undefined" || !(smartplayer.instances && smartplayer.instances.length)) {
        if (attempts >= 10) return;
        attempts += 1;

        return setTimeout(function () {
          startWatchVideoProgress()
        }, 1000)
      }

      smartplayer.instances[0].on("timeupdate", () => {
        if (elsDisplayed || smartplayer.instances[0].smartAutoPlay) return;
        if (smartplayer.instances[0].video.currentTime < SECONDS_TO_DISPLAY) return;
        
        showHiddenElements();
      })
    }

    if (alreadyElsDisplayed === "true") { 
      setTimeout(function () { showHiddenElements(); }, 100); 
    } else {
      startWatchVideoProgress() 
    }
  }, []);

  return isVisible ? children : null;
}

export default DelayWrapper;
