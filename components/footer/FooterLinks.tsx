"use client";

import Link from "next/link";

interface LinkSection {
  title: string;
  links: { label: string; href: string }[];
}

const linkSections: LinkSection[] = [
  {
    title: "Services",
    links: [
      { label: "Asset Management", href: "#" },
      { label: "Wealth Planning", href: "#" },
      { label: "Risk Analysis", href: "#" },
      { label: "Financial Advisory", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms", href: "#" },
      { label: "Privacy", href: "#" },
      { label: "Cookies", href: "#" },
      { label: "Licenses", href: "#" },
    ],
  },
];

export default function FooterLinks() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
      {linkSections.map((section) => (
        <div key={section.title}>
          <h3 className="font-semibold mb-3">{section.title}</h3>
          <ul className="space-y-2">
            {section.links.map((link) => (
              <li key={link.label}>
                <Link 
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}