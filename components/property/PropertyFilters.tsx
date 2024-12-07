"use client";

import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { PropertyFilter } from "@/types/property";

interface PropertyFiltersProps {
  filters: PropertyFilter;
  setFilters: (filters: PropertyFilter) => void;
}

export default function PropertyFilters({ filters, setFilters }: PropertyFiltersProps) {
  return (
    <Card className="mb-8">
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <Label>Property Type</Label>
            <Select
              value={filters.type}
              onValueChange={(value: any) => setFilters({ ...filters, type: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="commercial">Commercial</SelectItem>
                <SelectItem value="residential">Residential</SelectItem>
                <SelectItem value="agricultural">Agricultural</SelectItem>
                <SelectItem value="industrial">Industrial</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Location</Label>
            <Select
              value={filters.location}
              onValueChange={(value) => setFilters({ ...filters, location: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="mumbai">Mumbai</SelectItem>
                <SelectItem value="delhi">Delhi</SelectItem>
                <SelectItem value="bangalore">Bangalore</SelectItem>
                <SelectItem value="pune">Pune</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Price Range (₹)</Label>
            <Slider
              defaultValue={[filters.priceRange[0], filters.priceRange[1]]}
              max={10000000}
              step={100000}
              onValueChange={(value) => 
                setFilters({ ...filters, priceRange: [value[0], value[1]] })
              }
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>₹{(filters.priceRange[0] / 100000).toFixed(1)}L</span>
              <span>₹{(filters.priceRange[1] / 100000).toFixed(1)}L</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}