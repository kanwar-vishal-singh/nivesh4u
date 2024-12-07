"use client";

import { Button } from "@/components/ui/button";
import { Building2, MapPin } from "lucide-react";

export default function PropertyHeader() {
  return (
    <div className="bg-secondary">
      <div className="container max-w-screen-xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Property & Land</h1>
            <p className="text-muted-foreground max-w-2xl">
              Discover premium properties and land opportunities across India. 
              From commercial spaces to agricultural lands, find your next 
              investment with our curated listings.
            </p>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <Building2 className="text-primary" />
                <span>1000+ Properties</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="text-primary" />
                <span>Pan India Presence</span>
              </div>
            </div>
          </div>
          <Button size="lg">List Your Property</Button>
        </div>
      </div>
    </div>
  );
}