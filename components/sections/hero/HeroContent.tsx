"use client";

import { Button } from "@/components/ui/button";

export default function HeroContent() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4 text-primary">Smart Trading & Investment</h1>
      <p className="text-2xl text-secondary mb-6">Your Gateway to Financial Markets</p>
      <div className="space-y-4">
        <p className="text-muted-foreground">
          Professional trading solutions and investment strategies for maximum returns
        </p>
        <Button size="lg" className="bg-primary hover:bg-primary/90">Start Trading</Button>
      </div>
    </div>
  );
}