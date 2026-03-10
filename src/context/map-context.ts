import { createContext, useContext } from "react";
import type { Map as MapboxMap } from "mapbox-gl";

interface MapContextType {
  map: MapboxMap;
}

export const MapContext = createContext<MapContextType | null>(null);

export function useMap() {
  const context = useContext(MapContext);
  if (!context) {
    throw new Error("useMap must be used within a MapProvider");
  }
  return context;
}