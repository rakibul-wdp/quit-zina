"use client";

import { Container } from "@/universal";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <Container>
      <div className="py-5 flex items-center justify-between">
        <h1 className="text-lg text-primary font-bold">Quit Zina!</h1>
        <ul className="flex items-center justify-center gap-5 font-medium">
          <Link href="/" className={`${pathname === "/" && "text-primary"}`}>
            Home
          </Link>
          <Link
            href="/countdown"
            className={`${pathname === "/countdown" && "text-primary"}`}
          >
            Countdown
          </Link>
          <Link
            href="/motivation"
            className={`${pathname === "/motivation" && "text-primary"}`}
          >
            Motivation
          </Link>
          <Link
            href="/dashboard"
            className={`${pathname === "/dashboard" && "text-primary"}`}
          >
            Dashboard
          </Link>
          <Link
            href="/about"
            className={`${pathname === "/about" && "text-primary"}`}
          >
            About
          </Link>
          <Link
            href="/signup"
            className={`${pathname === "/signup" && "text-primary"}`}
          >
            SignUp
          </Link>
          <Link
            href="/login"
            className={`${pathname === "/login" && "text-primary"}`}
          >
            Login
          </Link>
        </ul>
      </div>
    </Container>
  );
};
