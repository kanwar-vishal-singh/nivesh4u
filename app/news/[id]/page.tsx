/* eslint-disable react/no-unescaped-entities */
import { newsData } from "@/data/news";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import Image from "next/image";

export function generateStaticParams() {
  return newsData.map((article) => ({
    id: article.id,
  }));
}

export default function NewsDetailPage({ params }: { params: { id: string } }) {
  const article = newsData.find((a) => a.id === params.id);

  if (!article) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground">The article you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="relative h-[400px] w-full">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto -mt-32 relative">
          <div className="bg-card rounded-lg p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <Badge variant="secondary">{article.category}</Badge>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>{new Date(article.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>{article.readTime}</span>
              </div>
            </div>

            <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
            <p className="text-xl text-muted-foreground mb-8">{article.summary}</p>
            
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              {article.content}
            </div>

            <div className="mt-8 pt-8 border-t">
              <p className="text-muted-foreground">Written by</p>
              <p className="font-semibold">{article.author}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}