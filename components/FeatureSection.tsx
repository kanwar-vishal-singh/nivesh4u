"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, LineChart, BarChart, PieChart } from "lucide-react";

export default function FeatureSection() {
  return (
    <section className="container max-w-screen-xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-secondary">Professional Trading Tools</CardTitle>
            <CardTitle className="text-primary">For Smart Investors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <TrendingUp className="h-5 w-5" />, label: 'Real-time Trading' },
                { icon: <LineChart className="h-5 w-5" />, label: 'Technical Analysis' },
                { icon: <BarChart className="h-5 w-5" />, label: 'Market Depth' },
                { icon: <PieChart className="h-5 w-5" />, label: 'Portfolio Tracking' }
              ].map(({ icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    {icon}
                  </div>
                  <p>{label}</p>
                </div>
              ))}
            </div>
            <Button className="mt-6" style={{ backgroundColor: "#FF4C13", color: "white" }}>Start Trading</Button>
          </CardContent>
        </Card>
        <div className="bg-muted rounded-lg h-[300px] flex items-center justify-center">
          <p className="text-muted-foreground">Trading Platform Preview</p>
        </div>
      </div>
    </section>
  );
}