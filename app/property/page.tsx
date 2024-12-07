"use client";

import PropertyHeader from "@/components/property/PropertyHeader";
import PropertyFilters from "@/components/property/PropertyFilters";
import PropertyGrid from "@/components/property/PropertyGrid";
import { useState } from "react";
import { PropertyType, PropertyFilter } from "@/types/property";

export default function PropertyPage() {
  const [filters, setFilters] = useState<PropertyFilter>({
    type: "all",
    priceRange: [0, 10000000],
    location: "all",
  });

  return (
    <main className="min-h-screen bg-background">
      <PropertyHeader />
      <div className="container max-w-screen-xl mx-auto px-4 py-8">
        <PropertyFilters filters={filters} setFilters={setFilters} />
        <PropertyGrid filters={filters} />
      </div>
    </main>
  );
}