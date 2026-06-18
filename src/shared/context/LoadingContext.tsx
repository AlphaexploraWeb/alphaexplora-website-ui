import React, { createContext, useContext, useState } from 'react';

interface LoadingContextType {
  isAppReady: boolean;
  setIsAppReady: (ready: boolean) => void;
  loadingProgress: number;
  setLoadingProgress: (progress: number) => void;
}

const LoadingContext = createContext<LoadingContextType>({
  isAppReady: false,
  setIsAppReady: () => {},
  loadingProgress: 0,
  setLoadingProgress: () => {}
});

export const LoadingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAppReady, setIsAppReady] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  return (
    <LoadingContext.Provider value={{ isAppReady, setIsAppReady, loadingProgress, setLoadingProgress }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);
