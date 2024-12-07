"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Logo from "./Logo";
import { Building2, MapPin, IndianRupee, Briefcase } from "lucide-react";

const services = [
  {
    title: "Asset Management",
    description: "Professional management of your investment portfolio",
  },
  {
    title: "Wealth Planning",
    description: "Comprehensive financial planning for your future",
  },
  {
    title: "Business Loans",
    description: "Flexible financing solutions for your business",
  },
  {
    title: "Risk Analysis",
    description: "Expert assessment of investment risks",
  },
];

const properties = [
  {
    title: "Commercial Properties",
    description: "Office spaces, retail outlets, and business complexes",
    icon: <Building2 className="h-4 w-4" />,
    href: "/property?type=commercial"
  },
  {
    title: "Residential Properties",
    description: "Apartments, villas, and premium housing",
    icon: <Briefcase className="h-4 w-4" />,
    href: "/property?type=residential"
  },
  {
    title: "Agricultural Land",
    description: "Fertile farmland and agricultural properties",
    icon: <MapPin className="h-4 w-4" />,
    href: "/property?type=agricultural"
  },
  {
    title: "Industrial Plots",
    description: "Industrial spaces and manufacturing units",
    icon: <IndianRupee className="h-4 w-4" />,
    href: "/property?type=industrial"
  },
];

const ListItem = ({ title, description }: { title: string; description: string }) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          href="#"
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {description}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
};

const PropertyItem = ({ title, description, icon, href }: {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="flex gap-4 select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        >
          <div className="h-8 w-8 rounded-md border border-border flex items-center justify-center">
            {icon}
          </div>
          <div>
            <div className="text-sm font-medium mb-1">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {description}
            </p>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

export default function Header() {
  return (
    <header className="border-b">
      <div className="container max-w-screen-xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Logo />

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    {services.map((service) => (
                      <ListItem
                        key={service.title}
                        title={service.title}
                        description={service.description}
                      />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Property & Land</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[600px] md:grid-cols-2">
                    {properties.map((property) => (
                      <PropertyItem
                        key={property.title}
                        {...property}
                      />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  )}>
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-4">
            <Button asChild style={{ backgroundColor: "#FF4C13", color: "white" }}>
              <Link href="/property">
                <Building2 className="h-4 w-4 mr-2" />
                Browse Properties
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}