"use client";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
}

export default function ServiceCard({ icon, title }: ServiceCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: "#0a4570" }}>
          {icon}
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
    </Card>
  );
}