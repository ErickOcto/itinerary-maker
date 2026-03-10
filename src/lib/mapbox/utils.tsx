import React from "react";
import {
  Coffee01Icon,
  KitchenUtensilsIcon,
  ShoppingBag01Icon,
  Hotel01Icon,
  Dumbbell01Icon,
  CourtHouseIcon,
  Store01Icon,
  BankIcon,
  GraduationScrollIcon,
  Shirt01Icon,
  Stethoscope02Icon,
  Home01Icon,
} from "hugeicons-react";

export const iconMap: { [key: string]: React.ReactNode } = {
  café: <Coffee01Icon className="h-5 w-5" />,
  cafe: <Coffee01Icon className="h-5 w-5" />,
  coffee: <Coffee01Icon className="h-5 w-5" />,
  restaurant: <KitchenUtensilsIcon className="h-5 w-5" />,
  food: <KitchenUtensilsIcon className="h-5 w-5" />,
  hotel: <Hotel01Icon className="h-5 w-5" />,
  lodging: <Hotel01Icon className="h-5 w-5" />,
  gym: <Dumbbell01Icon className="h-5 w-5" />,
  bank: <BankIcon className="h-5 w-5" />,
  shopping: <ShoppingBag01Icon className="h-5 w-5" />,
  store: <Store01Icon className="h-5 w-5" />,
  government: <CourtHouseIcon className="h-5 w-5" />,
  school: <GraduationScrollIcon className="h-5 w-5" />,
  hospital: <Stethoscope02Icon className="h-5 w-5" />,
  clothing: <Shirt01Icon className="h-5 w-5" />,
  home: <Home01Icon className="h-5 w-5" />,
};

export type LocationSuggestion = {
  mapbox_id: string;
  name: string;
  place_formatted: string;
  maki?: string;
};

export type LocationFeature = {
  type: "Feature";
  geometry: {
    type: "Point";
    coordinates: [number, number];
  };
  properties: {
    name: string;
    name_preferred?: string;
    mapbox_id: string;
    feature_type: string;
    address?: string;
    full_address?: string;
    place_formatted?: string;
    context: {
      country?: {
        name: string;
        country_code: string;
        country_code_alpha_3: string;
      };
      region?: {
        name: string;
        region_code: string;
        region_code_full: string;
      };
      postcode?: { name: string };
      district?: { name: string };
      place?: { name: string };
      locality?: { name: string };
      neighborhood?: { name: string };
      address?: {
        name: string;
        address_number?: string;
        street_name?: string;
      };
      street?: { name: string };
    };
    coordinates: {
      latitude: number;
      longitude: number;
      accuracy?: string;
      routable_points?: {
        name: string;
        latitude: number;
        longitude: number;
        note?: string;
      }[];
    };
    language?: string;
    maki?: string;
    poi_category?: string[];
    poi_category_ids?: string[];
    brand?: string[];
    brand_id?: string[];
    external_ids?: Record<string, string>;
    metadata?: Record<string, unknown>;
    bbox?: [number, number, number, number];
    operational_status?: string;
  };
};