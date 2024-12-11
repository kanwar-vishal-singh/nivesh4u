"use client";

import { Property } from "@/types/property";
import PropertyDetail from "@/components/property/detail/PropertyDetail";
import PropertyGallery from "@/components/property/detail/PropertyGallery";
import PropertyAmenities from "@/components/property/detail/PropertyAmenities";
import PropertyContact from "@/components/property/detail/PropertyContact";
import PropertyOwner from "@/components/property/detail/PropertyOwner";
import PropertyLocation from "@/components/property/detail/PropertyLocation";
import SimilarProperties from "@/components/property/detail/SimilarProperties";
import { NotFound } from "@/components/property/detail/NotFound";
// import Footer from "@/components/footer/Footer";

interface PropertyDetailClientProps {
  property: Property | undefined;
  similarProperties: Property[];
}

export default function PropertyDetailClient({ property, similarProperties }: PropertyDetailClientProps) {
  if (!property) {
    return <NotFound />;
  }

  return (
    <>
      <main className="min-h-screen bg-background">
        <PropertyGallery images={property.images} />
        <div className="container max-w-screen-xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <PropertyDetail property={property} />
              <PropertyLocation location={property.location} />
              <PropertyAmenities amenities={property.amenities} />
              <SimilarProperties properties={similarProperties} />
            </div>
            <div className="space-y-8">
              <PropertyOwner owner={property.owner} />
              <PropertyContact property={property} />
            </div>
          </div>
        </div>
      </main>
      {/* <Footer /> */}
    </>
  );
}