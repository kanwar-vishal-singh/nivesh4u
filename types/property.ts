export type PropertyType = "commercial" | "residential" | "agricultural" | "industrial" | "all";

export interface PropertyOwner {
  name: string;
  phone: string;
  email: string;
  image: string;
  experience: string;
  properties: number;
}

export interface PropertyAmenity {
  name: string;
  description: string;
  icon: string;
}

export interface PropertyLocation {
  address: string;
  city: string;
  state: string;
  nearbyPlaces: {
    name: string;
    distance: string;
    type: string;
  }[];
}

export interface PropertyFilter {
  type: PropertyType;
  priceRange: [number, number];
  location: string;
}

export interface Property {
  id: string;
  title: string;
  description: string;
  type: PropertyType;
  price: number;
  location: PropertyLocation;
  size: string;
  amenities: PropertyAmenity[];
  images: string[];
  owner: PropertyOwner;
  features: string[];
  yearBuilt: number;
  status: "available" | "sold" | "pending";
}