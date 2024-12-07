"use client";

import { Property } from "@/types/property";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, MapPin, IndianRupee, Maximize2, Calendar } from "lucide-react";

interface PropertyDetailProps {
  property: Property;
}

export default function PropertyDetail({ property }: PropertyDetailProps) {
  const { title, description, location, price, type, size, yearBuilt, features } = property;

  return (
    <Card>
      <CardContent className="pt-6">
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        <div className="flex items-center gap-2 text-muted-foreground mb-4">
          <MapPin className="h-4 w-4" />
          <span>{location.address}, {location.city}, {location.state}</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
          <div className="flex items-center gap-2">
            <IndianRupee className="h-5 w-5 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Price</p>
              <p className="font-semibold">₹{(price / 100000).toFixed(1)}L</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Building2 className="h-5 w-5 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Type</p>
              <p className="font-semibold capitalize">{type}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Maximize2 className="h-5 w-5 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Size</p>
              <p className="font-semibold">{size}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Year Built</p>
              <p className="font-semibold">{yearBuilt}</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-muted-foreground">{description}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Features</h2>
            <ul className="grid grid-cols-2 gap-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}