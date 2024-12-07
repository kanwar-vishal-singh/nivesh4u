"use client";

import PropertyCard from "@/components/property/PropertyCard";
import { PropertyFilter, Property } from "@/types/property";
import { propertyData } from "@/data/property";

interface PropertyGridProps {
  filters: PropertyFilter;
}

export default function PropertyGrid({ filters }: PropertyGridProps) {
  const filteredProperties = propertyData.filter((property) => {
    const matchesType = filters.type === "all" || property.type === filters.type;
    const matchesLocation = 
      filters.location === "all" || property.location.city.toLowerCase().includes(filters.location);
    const matchesPrice = 
      property.price >= filters.priceRange[0] && property.price <= filters.priceRange[1];
    
    return matchesType && matchesLocation && matchesPrice;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProperties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}