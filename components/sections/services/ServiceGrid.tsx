"use client";

import { BarChart3, LineChart, PieChart, TrendingUp, Wallet, ArrowUpDown, BarChart2, Building2, Briefcase, DollarSign } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";

export default function ServiceGrid() {
  const services = [
    { icon: <TrendingUp style={{ color: "#ffffff" }} />, title: "Stock Trading" },
    { icon: <BarChart3 style={{ color: "#ffffff" }} />, title: "Market Analysis" },
    { icon: <LineChart style={{ color: "#ffffff" }} />, title: "Technical Analysis" },
    { icon: <PieChart style={{ color: "#ffffff" }} />, title: "Portfolio Management" },
    { icon: <ArrowUpDown style={{ color: "#ffffff" }} />, title: "Forex Trading" },
    { icon: <BarChart2 style={{ color: "#ffffff" }} />, title: "Commodity Trading" },
    { icon: <Building2 style={{ color: "#ffffff" }} />, title: "IPO Investments" },
    { icon: <Briefcase style={{ color: "#ffffff" }} />, title: "Mutual Funds" },
    { icon: <Wallet style={{ color: "#ffffff" }} />, title: "Digital Assets" },
    { icon: <DollarSign style={{ color: "#ffffff" }} />, title: "Bonds & Securities" },
  ];

  return (
    <section className="container max-w-screen-xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8">Complete Trading Solutions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
}