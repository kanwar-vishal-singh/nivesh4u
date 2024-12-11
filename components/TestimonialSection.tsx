/* eslint-disable react/no-unescaped-entities */
"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StarIcon } from "lucide-react";

const testimonials = [
  {
    name: "MR. NITIN PATEL",
    role: "Founder & CEO",
    image: "",
    content: "The financial guidance and support provided has been invaluable for our business growth. Highly recommend their services!",
    rating: 5
  },
  {
    name: "PRIYA SHARMA",
    role: "Investment Manager",
    image: "",
    content: "Outstanding platform for trading and investments. The real-time analytics and expert insights have helped me make informed decisions.",
    rating: 5
  },
  {
    name: "RAJESH KUMAR",
    role: "Business Owner",
    image: "",
    content: "Their property investment advisory services are top-notch. Helped me diversify my portfolio with excellent returns.",
    rating: 5
  },
  {
    name: "ANITA DESAI",
    role: "Senior Trader",
    image: "",
    content: "The trading tools and market analysis features are exceptional. A must-have platform for serious investors.",
    rating: 5
  },
  {
    name: "VIKRAM SINGH",
    role: "Portfolio Manager",
    image: "",
    content: "Comprehensive wealth management solutions with a personal touch. Their team's expertise is unmatched.",
    rating: 5
  },
  {
    name: "MEERA REDDY",
    role: "Real Estate Investor",
    image: "",
    content: "The property listings and investment opportunities are carefully curated. Great platform for real estate investments.",
    rating: 5
  }
];

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <Card className="border-gray-300 hover:shadow-lg transition-shadow">
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12">
              <AvatarFallback style={{ backgroundColor: "#0A4570", color: "#ffffff" }}>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold">{testimonial.name}</h3>
              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
            </div>
          </div>
          <div className="flex gap-0.5">
            {Array(testimonial.rating).fill(null).map((_, i) => (
              <StarIcon key={i} className="h-4 w-4 fill-primary text-primary" style={{ color: "#FF4C13", fill: "#FF4C13" }} />
            ))}
          </div>
          <blockquote className="text-sm text-muted-foreground">
            "{testimonial.content}"
          </blockquote>
        </div>
      </CardContent>
    </Card>
  );
}

export default function TestimonialSection() {
  return (
    <section className="container max-w-screen-xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Stories From Our Valued Clients</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Discover what our clients say about their experience with our investment and trading solutions
        </p>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
          skipSnaps: false,
          slidesToScroll: 3
        }}
        className="w-full"
      >
        <div className="relative">
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                <TestimonialCard testimonial={testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="absolute -left-12 top-1/2" />
            <CarouselNext className="absolute -right-12 top-1/2" />
          </div>
        </div>
      </Carousel>
    </section>
  );
}