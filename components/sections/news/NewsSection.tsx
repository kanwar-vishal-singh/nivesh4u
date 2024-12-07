"use client";

import { Button } from "@/components/ui/button";
import NewsCard from "./NewsCard";
import { newsData } from "@/data/news";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NewsSection() {
  return (
    <section className="container max-w-screen-xl mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold">Latest Market News</h2>
          <p className="text-muted-foreground">Stay updated with the latest financial news and market insights</p>
        </div>
        <Button asChild style={{ backgroundColor: "#FF4C13", color: "white" }}>
          <Link href="/news">
            View All News
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {newsData.slice(0, 4).map((article) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}