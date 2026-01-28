"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "About" },
    { href: "/education", label: "Education" },
    { href: "/projects", label: "Projects" },
    { href: "/blogs", label: "Blogs" },
    { href: "/reachout", label: "Reach Out" },
    // { href: "/more", label: "More" },
  ];

  return (
    <header>
      <h1 className="text-6xl font-semibold">
        Piyush Kumar Singh
      </h1>
      <p
        className="mt-3 pt-2 text-xs font-[cursive]"
      >curious being..</p>

      <nav className="mt-4 flex gap-4">
        {links.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={
                isActive
                  ? `
                    bg-white
                    text-[rgb(27_26_25/1)]
                    px-3
                    py-1
                    rounded-t-md
                    border-3
                    border-[rgb(255,230,3)]
                  `
                  : `
                    underline
                    underline-offset-4
                    decoration-[rgb(255,230,3)]
                    decoration-wavy
                    hover:opacity-80
                  `
              }
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
