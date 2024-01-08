"use client";

import { navLinks } from "@/public/data";
import { Container } from "@/universal";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <Container position="navbar">
      <div className="py-5 flex items-center justify-between fixed top-0 left-5 right-5 z-10 bg-white">
        <h1 className="text-lg text-primary font-bold">Quit Zina!</h1>
        <ul className="flex items-center justify-center gap-5 font-medium">
          {navLinks.map((navLink) => (
            <li key={navLink.id}>
              <Link
                href={navLink.path}
                className={`${
                  pathname === navLink.path && "text-primary font-semibold"
                }`}
              >
                {navLink.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};
