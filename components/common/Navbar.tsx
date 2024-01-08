"use client";

import { navLinks } from "@/public/data";
import { Container } from "@/universal";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <Container>
      <div className="py-5 flex items-center justify-between border-b">
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
