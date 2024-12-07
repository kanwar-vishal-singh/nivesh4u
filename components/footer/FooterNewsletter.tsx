"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function FooterNewsletter() {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold">Subscribe to our newsletter</h3>
      <p className="text-sm text-muted-foreground">
        Get the latest news and updates from our team.
      </p>
      <div className="flex gap-2">
        <Input 
          type="email" 
          placeholder="Enter your email" 
          className="max-w-[240px]"
        />
        <Button>Subscribe</Button>
      </div>
    </div>
  );
}