"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Logo from "./Logo";
import { Building2 } from "lucide-react";
import { useState } from "react";
import { DesktopNav } from "./header/desktop-nav";
import { MobileNav } from "./header/mobile-nav";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b sticky top-0 bg-background z-50">
      <div className="container max-w-screen-xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          <DesktopNav />
          <div className="flex items-center gap-4">
            <Button asChild className="hidden md:inline-flex" style={{ backgroundColor: "#FF4C13", color: "white" }}>
              <Link href="/property" >
                <Building2 className="h-4 w-4 mr-2" />
                Browse Properties
              </Link>
            </Button>
            <MobileNav isOpen={isOpen} onOpenChange={setIsOpen} />
          </div>
        </div>
      </div>
    </header>
  );
}