"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building, MapPin, IndianRupee } from "lucide-react";

interface PropertyCardProps {
  title: string;
  location: string;
  price: string;
  type: string;
  size: string;
}

export default function PropertyCard({ title, location, price, type, size }: PropertyCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <div className="aspect-[16/9] relative bg-muted flex items-center justify-center">
        <p className="text-muted-foreground">Property Image</p>
      </div>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <div className="flex items-center text-sm text-muted-foreground gap-2">
          <MapPin className="h-4 w-4" />
          <span>{location}</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="text-sm" style={{ fontSize: " 0.775rem" }}>
            <span className="text-muted-foreground" >Type:</span> {type}
          </div>
          <div className="text-sm" style={{ fontSize: " 0.775rem" }}>
            <span className="text-muted-foreground">Size:</span> {size}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <IndianRupee className="h-4 w-4" />
            <span className="font-bold">{price}</span>
          </div>
          <Button variant="outline" size="sm">View Details</Button>
        </div>
      </CardContent>
    </Card>
  );
}