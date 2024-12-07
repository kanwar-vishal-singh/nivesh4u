"use client";

import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="block">
      <Image
        src="/assets/images/logo.png"
        alt="Nivesh4U"
        width={140}
        height={50}
        className="h-12 w-auto"
        priority
      />
    </Link>
  );
}