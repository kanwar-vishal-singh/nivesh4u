"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Property } from "@/types/property";
import { Building2, MapPin, IndianRupee, Maximize2, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const { id, title, location, price, type, size, images } = property;
  const propertyUrl = `/property/${id}`;

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full group">
      <Link href={propertyUrl} className="block">
        <div className="aspect-[16/9] relative overflow-hidden">
          <Image
            src={images[0]}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <CardHeader>
          <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
          <div className="flex items-center text-sm text-muted-foreground gap-2">
            <MapPin className="h-4 w-4" />
            <span>{location.city}, {location.state}</span>
          </div>
        </CardHeader>
      </Link>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center gap-2 text-sm">
            <Building2 className="h-4 w-4 text-muted-foreground" />
            <span className="capitalize">{type}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Maximize2 className="h-4 w-4 text-muted-foreground" />
            <span>{size}</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <IndianRupee className="h-4 w-4" />
            <span className="font-bold">
              {(price / 100000).toFixed(1)}L
            </span>
          </div>
          <Link href={propertyUrl}>
            <Button
              variant="outline"
              size="sm"
              className="group/button hover:bg-primary hover:text-primary-foreground"
            >
              View Details
              <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover/button:translate-x-1" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}