"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import css from "./Header.module.css";
import container from "@/styles/container.module.css";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={css.header}>
      <div className={container.container}>
        <div className={css.inner}>
          <Link href="/" className={css.logo}>
            <Image
                src="/icons/logo.svg"
                alt="TravelTrucks"
                width={136}
                height={16}
                priority
          />
          </Link>

          <nav className={css.nav}>
            <Link
                href="/"
                className={`${css.link} ${pathname === "/" ? css.active : ""}`}
            >
            Home
            </Link>

           <Link
                href="/catalog"
                className={`${css.link} ${
                pathname.startsWith("/catalog") ? css.active : ""}        
                }`}
            >
            Catalog
           </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}