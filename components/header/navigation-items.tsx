"use client";

import { Building2, MapPin, IndianRupee, Briefcase } from "lucide-react";

export const services = [
  {
    title: "Asset Management",
    description: "Professional management of your investment portfolio",
  },
  {
    title: "Wealth Planning",
    description: "Comprehensive financial planning for your future",
  },
  {
    title: "Business Loans",
    description: "Flexible financing solutions for your business",
  },
  {
    title: "Risk Analysis",
    description: "Expert assessment of investment risks",
  },
];

export const properties = [
  {
    title: "Commercial Properties",
    description: "Office spaces, retail outlets, and business complexes",
    icon: <Building2 className="h-4 w-4" />,
    href: "/property?type=commercial"
  },
  {
    title: "Residential Properties",
    description: "Apartments, villas, and premium housing",
    icon: <Briefcase className="h-4 w-4" />,
    href: "/property?type=residential"
  },
  {
    title: "Agricultural Land",
    description: "Fertile farmland and agricultural properties",
    icon: <MapPin className="h-4 w-4" />,
    href: "/property?type=agricultural"
  },
  {
    title: "Industrial Plots",
    description: "Industrial spaces and manufacturing units",
    icon: <IndianRupee className="h-4 w-4" />,
    href: "/property?type=industrial"
  },
];