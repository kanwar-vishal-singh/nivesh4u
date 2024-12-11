"use client";

import Link from "next/link";

interface MobileNavItemProps {
  href: string;
  children: React.ReactNode;
}

export function MobileNavItem({ href, children }: MobileNavItemProps) {
  return (
    <Link 
      href={href} 
      className="block px-2 py-2 text-sm hover:text-primary transition-colors rounded-md hover:bg-accent"
    >
      {children}
    </Link>
  );
}