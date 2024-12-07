"use client";

import { Button } from "@/components/ui/button";
import TradingCard from "./TradingCard";

const tradingData = [
  {
    symbol: "RELIANCE",
    name: "Reliance Industries",
    price: "2,456.75",
    change: 2.34,
    volume: "2.5M"
  },
  {
    symbol: "TATASTEEL",
    name: "Tata Steel Ltd.",
    price: "876.30",
    change: -1.25,
    volume: "1.8M"
  },
  {
    symbol: "HDFCBANK",
    name: "HDFC Bank Ltd.",
    price: "1,543.20",
    change: 0.85,
    volume: "3.2M"
  },
  {
    symbol: "INFY",
    name: "Infosys Ltd.",
    price: "1,234.55",
    change: -0.75,
    volume: "1.5M"
  }
];

export default function TradingSection() {
  return (
    <section className="container max-w-screen-xl mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold">Market Trends</h2>
          <p className="text-muted-foreground">Live market updates and trading insights</p>
        </div>
        <Button style={{ backgroundColor: "#FF4C13", color: "white" }}>View All Markets</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tradingData.map((stock) => (
          <TradingCard key={stock.symbol} {...stock} />
        ))}
      </div>
    </section>
  );
}