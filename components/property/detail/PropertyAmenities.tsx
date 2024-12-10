"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Car, Wifi, Trees, Droplet, Zap, Truck, Warehouse } from "lucide-react";
import { PropertyAmenity } from "@/types/property";

const iconMap: Record<string, React.ReactNode> = {
  shield: <Shield className="h-5 w-5 text-primary" />,
  car: <Car className="h-5 w-5 text-primary" />,
  wifi: <Wifi className="h-5 w-5 text-primary" />,
  tree: <Trees className="h-5 w-5 text-primary" />,
  droplet: <Droplet className="h-5 w-5 text-primary" />,
  zap: <Zap className="h-5 w-5 text-primary" />,
  truck: <Truck className="h-5 w-5 text-primary" />,
  warehouse: <Warehouse className="h-5 w-5 text-primary" />
};

interface PropertyAmenitiesProps {
  amenities: PropertyAmenity[];
}

export default function PropertyAmenities({ amenities }: PropertyAmenitiesProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Amenities & Features</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {amenities.map((amenity, index) => (
            <div key={index} className="flex items-start gap-3">
              {iconMap[amenity.icon]}
              <div>
                <p className="font-medium">{amenity.name}</p>
                <p className="text-sm text-muted-foreground">{amenity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}