"use client";

import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, LineChart, BarChart2, PieChart, ArrowUpDown, Clock, Calculator, ChartBar } from "lucide-react";

export default function ToolsSection() {
  return (
    <section className="container max-w-screen-xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8">Trading Tools</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {[
          { icon: <TrendingUp />, label: 'Market Scanner' },
          { icon: <LineChart />, label: 'Technical Charts' },
          { icon: <BarChart2 />, label: 'Price Alerts' },
          { icon: <PieChart />, label: 'Portfolio Analysis' },
          { icon: <ArrowUpDown />, label: 'Order Types' },
          { icon: <Clock />, label: 'Trading Hours' },
          { icon: <Calculator />, label: 'Profit Calculator' },
          { icon: <ChartBar />, label: 'Market Depth' }
        ].map(({ icon, label }) => (
          <Card key={label} className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="mb-2">{icon}</div>
              <p className="text-sm">{label}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}