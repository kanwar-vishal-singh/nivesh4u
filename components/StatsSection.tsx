"use client";

import { Card, CardContent } from "@/components/ui/card";

export default function StatsSection() {
  return (
    <section className="container max-w-screen-xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="pt-6">
            <p className="text-3xl font-bold text-primary">11.2%</p>
            <p className="text-sm text-muted-foreground">Annual Growth</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-3xl font-bold text-primary">$72 K</p>
            <p className="text-sm text-muted-foreground">Average Investment</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-3xl font-bold text-primary">24/7</p>
            <p className="text-sm text-muted-foreground">Support Available</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-3xl font-bold text-primary">15+</p>
            <p className="text-sm text-muted-foreground">Years Experience</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}