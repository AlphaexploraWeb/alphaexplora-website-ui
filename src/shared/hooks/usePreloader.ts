import { useEffect, useState } from 'react';
import { useProgress } from '@react-three/drei';
import { useLoading } from '../context/LoadingContext';

// List of critical image paths to preload
import stPeterImg from '../../assets/st-peter.jpg';
import espasyoImg from '../../assets/espasyo.jpg';
import globalbimImg from '../../assets/globalbim.jpg';
import estrukturaImg from '../../assets/estruktura.jpg';
import tmgnImg from '../../assets/tmgn.jpg';
import heroImg from '../../assets/hero.png';

const IMAGES_TO_PRELOAD = [
  stPeterImg,
  espasyoImg,
  globalbimImg,
  estrukturaImg,
  tmgnImg,
  heroImg
];

export const usePreloader = () => {
  // Drei's useProgress tracks all Three.js assets globally
  const { progress: threeProgress, active } = useProgress();
  const { setIsAppReady, setLoadingProgress } = useLoading();
  
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);
  const [threeJsFinished, setThreeJsFinished] = useState(false);

  // 1. Enforce a minimum load time (2.5 seconds) for the cinematic boot feel
  // Also enforce a fail-safe maximum load time (6 seconds) to prevent infinite loading
  useEffect(() => {
    const minTimer = setTimeout(() => {
      setMinTimeElapsed(true);
    }, 2500);

    const maxTimer = setTimeout(() => {
      setThreeJsFinished(true);
      setLoadingProgress(100);
      setIsAppReady(true);
    }, 6000);

    return () => {
      clearTimeout(minTimer);
      clearTimeout(maxTimer);
    };
  }, [setIsAppReady, setLoadingProgress]);

  // 2. Preload Heavy Images
  useEffect(() => {
    let loaded = 0;
    IMAGES_TO_PRELOAD.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loaded++;
        setImagesLoaded(loaded);
      };
      img.onerror = () => {
        // If an image fails to load, count it anyway to prevent infinite loading screen
        loaded++;
        setImagesLoaded(loaded);
      };
    });
  }, []);

  // 3. Track Three.js explicitly becoming inactive or hitting 100
  useEffect(() => {
    if (threeProgress === 100 || !active) {
      setThreeJsFinished(true);
    }
  }, [threeProgress, active]);

  // 4. Calculate total progress and trigger readiness
  useEffect(() => {
    const imageProgress = IMAGES_TO_PRELOAD.length > 0 
      ? (imagesLoaded / IMAGES_TO_PRELOAD.length) * 50 
      : 50;
      
    // threeProgress is 0-100 from useProgress
    const webglProgress = threeJsFinished ? 50 : (threeProgress / 100) * 50;
    
    // Smoothly calculate total progress
    let totalProgress = Math.min(100, Math.round(imageProgress + webglProgress));

    // If both are done but minimum time isn't up, just keep showing 100% or close to it
    if (imagesLoaded === IMAGES_TO_PRELOAD.length && threeJsFinished) {
      totalProgress = 100;
    }

    setLoadingProgress(totalProgress);

    // If everything is loaded AND minimum time has passed, declare App Ready
    if (totalProgress === 100 && minTimeElapsed) {
      // Small visual delay to let users see "100%" before it vanishes
      setTimeout(() => {
        setIsAppReady(true);
      }, 400);
    }
  }, [imagesLoaded, threeProgress, threeJsFinished, minTimeElapsed, setIsAppReady, setLoadingProgress]);
};
