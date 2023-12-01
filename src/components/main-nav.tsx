"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { useParams, usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/theme-toggle";
import { Button } from "./ui/button";

const poppins = Montserrat({ weight: "600", subsets: ["latin"] });

const MainNav = () => {
  const pathname = usePathname();

  const routes = [
    {
      name: "About",
      href: "/about",
      active: pathname === "/about",
    },
    {
      name: "My Projects",
      href: "/my-projects",
      active: pathname === "/my-projects",
    },
    {
      name: "Contact",
      href: "/contact",
      active: pathname === "/contact",
    },
  ];

  return (
    <div className="relative">
      <div className="fixed left-0 top-0 flex w-full border-b border-gray-200 bg-gradient-to-b from-zinc-200 py-4 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:dark:bg-zinc-800/30 bg-opacity-0 ">
        <div className="w-full lg:max-w-7xl mx-auto px-5 md:px-7 flex items-center justify-between">
          <Link href="/">
            <div className="relative flex items-end">
              <Image alt="Logo" src="/logo-dev.png" width={40} height={40} />
              <h2
                className={cn(
                  "absolute top-4 left-12 font-bold -tracking-tighter text-2xl",
                  poppins.className
                )}
              >
                Tom
              </h2>
            </div>
          </Link>

          <div>
            <div className="flex items-center space-x-5">
              {routes.map((route) => (
                <Link key={route.href} href={route.href}>
                  <h2
                    className={cn(
                      "hover:text-green-700 transition-all",
                      route.active ? "text-green-700" : "text-primary",
                      poppins.className
                    )}
                  >
                    {route.name}
                  </h2>
                </Link>
              ))}

              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
