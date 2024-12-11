"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { services, properties } from "./navigation-items";
import { MobileNavItem } from "./mobile-nav-item";

interface MobileNavProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function MobileNav({ isOpen, onOpenChange }: MobileNavProps) {
  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0">
        <SheetHeader className="px-6 py-4 border-b">
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <ScrollArea className="h-[calc(100vh-5rem)]">
          <div className="px-6 py-4">
            <nav className="space-y-6">
              <div className="space-y-3">
                <p className="text-sm font-medium text-muted-foreground px-2">Services</p>
                {services.map((service) => (
                  <MobileNavItem key={service.title} href="#">
                    {service.title}
                  </MobileNavItem>
                ))}
              </div>
              <div className="space-y-3">
                <p className="text-sm font-medium text-muted-foreground px-2">Property & Land</p>
                {properties.map((property) => (
                  <MobileNavItem key={property.title} href={property.href}>
                    {property.title}
                  </MobileNavItem>
                ))}
              </div>
              <div className="space-y-3">
                <p className="text-sm font-medium text-muted-foreground px-2">Quick Links</p>
                <MobileNavItem href="/about">About</MobileNavItem>
                <MobileNavItem href="/property">Browse Properties</MobileNavItem>
              </div>
            </nav>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}