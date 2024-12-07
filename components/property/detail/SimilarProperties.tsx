"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PropertyCard from "@/components/property/PropertyCard";
import { Property } from "@/types/property";

interface SimilarPropertiesProps {
  properties: Property[];
}

export default function SimilarProperties({ properties }: SimilarPropertiesProps) {
  if (properties.length === 0) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Similar Properties</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}