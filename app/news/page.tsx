"use client";

import { newsData } from "@/data/news";
import NewsCard from "@/components/sections/news/NewsCard";

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="bg-muted">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-4">Financial News & Insights</h1>
          <p className="text-xl text-muted-foreground">
            Stay informed with the latest market news, analysis, and expert insights
          </p>
        </div>
      </div>

      <div className="container max-w-screen-xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </main>
  );
}