"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Building2, Home, MapPin, IndianRupee, Clock, Shield, BadgeCheck } from "lucide-react";
import PropertyCard from "./PropertyCard";

const properties = [
  {
    title: "Modern Commercial Complex",
    location: "Bandra West, Mumbai",
    price: "2.5 Cr",
    type: "Commercial",
    size: "2000 sq.ft"
  },
  {
    title: "Agricultural Land",
    location: "Nashik, Maharashtra",
    price: "75 Lakh",
    type: "Agricultural",
    size: "5 Acres"
  },
  {
    title: "Industrial Plot",
    location: "MIDC Pune",
    price: "1.8 Cr",
    type: "Industrial",
    size: "1500 sq.ft"
  },
  {
    title: "Premium Office Space",
    location: "Whitefield, Bangalore",
    price: "1.2 Cr",
    type: "Commercial",
    size: "1200 sq.ft"
  }
];

const rentalProperties = [
  {
    title: "Luxury Apartment",
    location: "Powai, Mumbai",
    price: "75,000/month",
    type: "Residential",
    size: "1200 sq.ft"
  },
  {
    title: "Office Space",
    location: "BKC, Mumbai",
    price: "2.5L/month",
    type: "Commercial",
    size: "2500 sq.ft"
  },
  {
    title: "Retail Shop",
    location: "MG Road, Bangalore",
    price: "1.2L/month",
    type: "Commercial",
    size: "800 sq.ft"
  },
  {
    title: "Villa",
    location: "HSR Layout, Bangalore",
    price: "95,000/month",
    type: "Residential",
    size: "3000 sq.ft"
  }
];

export default function PropertySection() {
  return (
    <section className="container max-w-screen-xl mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold">Property & Land</h2>
          <p className="text-muted-foreground">Discover premium properties and land opportunities</p>
        </div>
        <Button style={{ backgroundColor: "#FF4C13", color: "white" }}>List Your Property</Button>
      </div>

      <Tabs defaultValue="buy" className="mb-8">
        <TabsList className="grid w-full grid-cols-3 max-w-[400px]">
          <TabsTrigger value="buy">Buy</TabsTrigger>
          <TabsTrigger value="sell">Sell</TabsTrigger>
          <TabsTrigger value="rent">Rent</TabsTrigger>
        </TabsList>

        <TabsContent value="buy" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property.title} {...property} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="sell" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-6">List Your Property</h3>
                  <div className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="propertyType">Property Type</Label>
                        <Input id="propertyType" placeholder="Residential/Commercial" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <Input id="location" placeholder="City, State" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="size">Size (sq.ft/acres)</Label>
                        <Input id="size" placeholder="Property size" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="price">Expected Price</Label>
                        <Input id="price" placeholder="Enter amount" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="description">Property Description</Label>
                      <Input id="description" placeholder="Brief description of your property" />
                    </div>
                    <Button className="w-full">Submit Listing</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-4">Why Sell with Us?</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Shield className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Verified Buyers</p>
                        <p className="text-sm text-muted-foreground">Pre-screened serious buyers</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <BadgeCheck className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Expert Valuation</p>
                        <p className="text-sm text-muted-foreground">Get the best market value</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Quick Process</p>
                        <p className="text-sm text-muted-foreground">Faster closing guaranteed</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="rent" className="mt-6">
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {rentalProperties.map((property) => (
                <PropertyCard key={property.title} {...property} />
              ))}
            </div>

            <Card className="bg-muted">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="space-y-2">
                    <Home className="h-6 w-6 mx-auto text-primary" />
                    <h4 className="font-semibold">Verified Properties</h4>
                    <p className="text-sm text-muted-foreground">All listings are thoroughly verified</p>
                  </div>
                  <div className="space-y-2">
                    <Building2 className="h-6 w-6 mx-auto text-primary" />
                    <h4 className="font-semibold">Zero Brokerage</h4>
                    <p className="text-sm text-muted-foreground">Direct connection with owners</p>
                  </div>
                  <div className="space-y-2">
                    <MapPin className="h-6 w-6 mx-auto text-primary" />
                    <h4 className="font-semibold">Prime Locations</h4>
                    <p className="text-sm text-muted-foreground">Properties in premium areas</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}