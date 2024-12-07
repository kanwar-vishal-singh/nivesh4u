"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Navigation } from "lucide-react";
import { PropertyLocation as PropertyLocationType } from "@/types/property";

interface PropertyLocationProps {
  location: PropertyLocationType;
}

export default function PropertyLocation({ location }: PropertyLocationProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Location & Nearby Places</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-primary mt-1" />
            <div>
              <p className="font-medium">{location.address}</p>
              <p className="text-muted-foreground">
                {location.city}, {location.state}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">Nearby Places</h4>
            <div className="grid gap-4">
              {location.nearbyPlaces.map((place, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Navigation className="h-4 w-4 text-muted-foreground" />
                  <div className="flex-1">
                    <p className="font-medium">{place.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {place.distance} • {place.type}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}