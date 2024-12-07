"use client";

import { Separator } from "@/components/ui/separator";
import FooterLinks from "./FooterLinks";
import FooterNewsletter from "./FooterNewsletter";
import FooterSocial from "./FooterSocial";
import Logo from "../Logo";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container max-w-screen-xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground max-w-sm">
              Empowering your financial journey with expert guidance and innovative solutions.
            </p>
            <FooterSocial />
          </div>
          <div className="lg:col-span-3">
            <FooterLinks />
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <FooterNewsletter />
          <div className="text-sm text-muted-foreground lg:text-right">
            © {new Date().getFullYear()} Nivesh4U. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}