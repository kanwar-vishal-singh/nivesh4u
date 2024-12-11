"use client";

import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import Link from "next/link";

interface PropertyItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

export function PropertyItem({ title, description, icon, href }: PropertyItemProps) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="flex gap-4 select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        >
          <div className="h-8 w-8 rounded-md border border-border flex items-center justify-center">
            {icon}
          </div>
          <div>
            <div className="text-sm font-medium mb-1">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {description}
            </p>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}