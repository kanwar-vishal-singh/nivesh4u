"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, ArrowUpRight, LineChart } from "lucide-react";

export default function BusinessLoanSection() {
  return (
    <section className="container max-w-screen-xl mx-auto px-4 py-16 bg-secondary">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold text-secondary mb-4">Grow your Portfolio with</h2>
          <h3 className="text-2xl font-bold text-primary mb-6">SMART INVESTMENTS</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="text-primary" />
              <span>Advanced Trading Tools</span>
            </div>
            <div className="flex items-center gap-2">
              <ArrowUpRight className="text-primary" />
              <span>Real-time Market Data</span>
            </div>
            <div className="flex items-center gap-2">
              <LineChart className="text-primary" />
              <span>Professional Analysis</span>
            </div>
          </div>
          <Button size="lg" className="mt-6">Start Trading</Button>
        </div>
        <Card>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-semibold">NIFTY 50</span>
                <span className="text-green-500">+1.2%</span>
              </div>
              <div className="bg-muted rounded-lg h-[200px] flex items-center justify-center">
                <p className="text-muted-foreground">Market Chart Placeholder</p>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">24h High</p>
                  <p className="font-semibold">19,875.45</p>
                </div>
                <div>
                  <p className="text-muted-foreground">24h Low</p>
                  <p className="font-semibold">19,654.30</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}