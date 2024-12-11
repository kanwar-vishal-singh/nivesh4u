"use client";

import Image from "next/image";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PropertyGalleryProps {
  images: string[];
}

export default function PropertyGallery({ images }: PropertyGalleryProps) {
  const [activeImage, setActiveImage] = useState(0);

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setActiveImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-muted">
      <div className="container max-w-screen-xl mx-auto px-4 py-8">
        <div className="space-y-4">
          <div className="relative aspect-[16/9]">
            <Card className="relative overflow-hidden w-full h-full">
              <Image
                src={images[activeImage]}
                alt="Property"
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
              <div className="absolute inset-0 flex items-center justify-between p-4">
                <Button
                  variant="secondary"
                  size="icon"
                  onClick={previousImage}
                  className="rounded-full"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="secondary"
                  size="icon"
                  onClick={nextImage}
                  className="rounded-full"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {images.map((image, index) => (
              <Card
                key={index}
                className={`relative aspect-[4/3] cursor-pointer overflow-hidden ${index === activeImage ? "ring-2 ring-primary" : ""
                  }`}
                onClick={() => setActiveImage(index)}
              >
                <Image
                  src={image}
                  alt={`Property view ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}