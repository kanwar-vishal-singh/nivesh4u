"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";

interface TradingCardProps {
  symbol: string;
  name: string;
  price: string;
  change: number;
  volume: string;
}

export default function TradingCard({ symbol, name, price, change, volume }: TradingCardProps) {
  const isPositive = change > 0;

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex justify-between items-center">
          <span>{symbol}</span>
          <span className={`text-sm ${isPositive ? 'text-green-500' : 'text-red-500'} flex items-center`}>
            {isPositive ? <ArrowUpIcon className="w-4 h-4 mr-1" /> : <ArrowDownIcon className="w-4 h-4 mr-1" />}
            {Math.abs(change)}%
          </span>
        </CardTitle>
        <p className="text-sm text-muted-foreground">{name}</p>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold">₹{price}</span>
          <span className="text-sm text-muted-foreground">Vol: {volume}</span>
        </div>
      </CardContent>
    </Card>
  );
}