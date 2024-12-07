import { propertyData } from "@/data/property";
import PropertyDetailClient from "@/components/property/detail/PropertyDetailClient";

export function generateStaticParams() {
  return propertyData.map((property) => ({
    id: property.id,
  }));
}

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  const property = propertyData.find(p => p.id === params.id);
  const similarProperties = property 
    ? propertyData
        .filter(p => p.type === property.type && p.id !== property.id)
        .slice(0, 3)
    : [];

  return <PropertyDetailClient property={property} similarProperties={similarProperties} />;
}