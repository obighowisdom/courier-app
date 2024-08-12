import { createContext, useState } from "react";

const TrackingContext = createContext();

const TrackingProvider = ({ children }) => {
  const [trackingData, setTrackingData] = useState(null);

  return (
    <TrackingContext.Provider value={{ trackingData, setTrackingData }}>
      {children}
    </TrackingContext.Provider>
  );
};

export { TrackingProvider, TrackingContext };
