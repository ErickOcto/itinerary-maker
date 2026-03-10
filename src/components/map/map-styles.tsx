"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { useMap } from "@/context/map-context";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { MapsIcon, MoonIcon, SatelliteIcon, Sun01Icon, Tree01Icon } from "hugeicons-react";

type StyleOption = {
  id: string;
  label: string;
  icon: React.ReactNode;
};

const STYLE_OPTIONS: StyleOption[] = [
  {
    id: "streets-v12",
    label: "Map",
    icon: <MapsIcon className="w-5 h-5" />,
  },
  {
    id: "satellite-streets-v12",
    label: "Satellite",
    icon: <SatelliteIcon className="w-5 h-5" />,
  },
  {
    id: "outdoors-v12",
    label: "Terrain",
    icon: <Tree01Icon className="w-5 h-5" />,
  },

  {
    id: "light-v11",
    label: "Light",
    icon: <Sun01Icon className="w-5 h-5" />,
  },
  {
    id: "dark-v11",
    label: "Dark",
    icon: <MoonIcon className="w-5 h-5" />,
  },
];

export default function MapStyles() {
  const { map } = useMap();
  const { setTheme } = useTheme();
  const [activeStyle, setActiveStyle] = useState("streets-v12");

  const handleChange = (value: string) => {
    if (!map) return;
    map.setStyle(`mapbox://styles/mapbox/${value}`);
    setActiveStyle(value);
  };

  useEffect(() => {
    if (activeStyle === "dark-v11") {
      setTheme("dark");
    } else setTheme("light");
  }, [activeStyle]);

  return (
    <aside className="absolute bottom-4 left-4 z-10">
      <Tabs value={activeStyle} onValueChange={handleChange}>
        <TabsList className="bg-background shadow-lg">
          {STYLE_OPTIONS.map((style) => (
            <TabsTrigger
              key={style.id}
              value={style.id}
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-sm flex items-center sm:px-3 sm:py-1.5"
            >
              {style.icon}
              <span className="hidden sm:inline">{style.label}</span>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </aside>
  );
}