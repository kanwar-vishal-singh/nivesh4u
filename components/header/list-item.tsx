"use client";

import { NavigationMenuLink } from "@/components/ui/navigation-menu";

interface ListItemProps {
  title: string;
  description: string;
}

export function ListItem({ title, description }: ListItemProps) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          href="#"
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {description}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
}