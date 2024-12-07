"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import { NewsArticle } from "@/types/news";
import Image from "next/image";
import Link from "next/link";

interface NewsCardProps {
  article: NewsArticle;
}

export default function NewsCard({ article }: NewsCardProps) {
  return (
    <Link href={`/news/${article.id}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full group">
        <div className="aspect-video relative overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <CardHeader className="space-y-2">
          <div className="flex items-center gap-2">
            <Badge variant="secondary" style={{ backgroundColor: "#FF4C13", color: "white" }}>{article.category}</Badge>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>{new Date(article.date).toLocaleDateString()}</span>
            </div>
          </div>
          <h3 className="text-xl font-semibold group-hover:text-primary transition-colors line-clamp-2" style={{ fontSize: " 1.0125rem" }}>
            {article.title}
          </h3>
          <p className="text-muted-foreground line-clamp-2" style={{ fontSize: " 0.85rem" }}>{article.summary}</p>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>{article.author}</span>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{article.readTime}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}