"use client";

import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="block">
      <Image
        src="https://github.com/kanwar-vishal-singh/nivesh4u/blob/main/public/assets/images/logo.png?raw=true"
        alt="Nivesh4U"
        width={140}
        height={50}
        className="h-12 w-auto"
        priority
      />
    </Link>
  );
}