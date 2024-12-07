"use client";

import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FooterSocial() {
  const socialLinks = [
    { icon: <Facebook className="h-4 w-4" />, href: "#" },
    { icon: <Twitter className="h-4 w-4" />, href: "#" },
    { icon: <Instagram className="h-4 w-4" />, href: "#" },
    { icon: <Linkedin className="h-4 w-4" />, href: "#" },
  ];

  return (
    <div className="flex gap-2">
      {socialLinks.map((social, index) => (
        <Button
          key={index}
          variant="ghost"
          size="icon"
          className="h-9 w-9 rounded-full"
          asChild
        >
          <a href={social.href} target="_blank" rel="noopener noreferrer">
            {social.icon}
          </a>
        </Button>
      ))}
    </div>
  );
}