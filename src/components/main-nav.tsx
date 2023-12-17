"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/theme-toggle";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

const poppins = Montserrat({ weight: "600", subsets: ["latin"] });

const socialData = [
  {
    name: "facebook",
    link: "https://www.facebook.com/profile.php?id=100035109380459",
    imgUrl: "/social/facebook.png",
  },
  {
    name: "discord",
    link: "https://discord.com/channels/@me/1073582027640688672",
    imgUrl: "/social/discord.png",
  },
  {
    name: "github",
    link: "https://github.com/JazzsCo",
    imgUrl: "/social/github.png",
  },
  {
    name: "instagram",
    link: "https://www.instagram.com/thuyein_o/",
    imgUrl: "/social/instagram.png",
  },
  {
    name: "line",
    link: "https://line.me/ti/p/LiQRD9kYn2",
    imgUrl: "/social/line.png",
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/jazzs-co-7aa4a526b/",
    imgUrl: "/social/linkedin.png",
  },
];

const MainNav = () => {
  const pathname = usePathname();

  const [isMounted, setIsMounted] = useState(false);

  const routes = [
    {
      name: "Home",
      href: "/",
      active: pathname === "/",
    },
    {
      name: "About",
      href: "/about",
      active: pathname === "/about",
    },
    // {
    //   name: "Projects",
    //   href: "/projects",
    //   active: pathname === "/projects",
    // },
    {
      name: "Contact",
      href: "/contact",
      active: pathname === "/contact",
    },
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="relative">
      <div className="fixed z-10 left-0 top-0 flex w-full border-b border-gray-200 bg-gradient-to-b from-zinc-200 py-4 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:dark:bg-zinc-800/30 bg-opacity-0 ">
        <div className="w-full lg:max-w-7xl mx-auto px-5 md:px-7 flex items-center justify-between">
          <Link href="/">
            <div className="relative">
              <Image alt="Logo" src="/logo-dev.png" width={40} height={40} />
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-5">
            {routes.map((route) => (
              <Link key={route.href} href={route.href}>
                <h2
                  className={cn(
                    "hover:text-green-700 transition-all -tracking-tighter",
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

          <div className="flex md:hidden items-center space-x-3">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <MenuIcon />
                </Button>
              </SheetTrigger>

              <SheetContent>
                <SheetHeader>
                  <SheetTitle>
                    <div className="w-fit mt-3">
                      <Link href="/">
                        <div className="relative">
                          <Image
                            alt="Logo"
                            src="/logo-dev.png"
                            width={35}
                            height={35}
                          />
                        </div>
                      </Link>
                    </div>
                  </SheetTitle>
                </SheetHeader>

                <div className="px-3 mt-5 w-full flex justify-center">
                  <div className="flex flex-col items-center justify-center space-y-3">
                    {routes.map((route) => (
                      <Link key={route.href} href={route.href}>
                        <SheetClose>
                          <h2
                            className={cn(
                              "hover:text-green-700 transition-all -tracking-tighter",
                              route.active ? "text-green-700" : "text-primary",
                              poppins.className
                            )}
                          >
                            {route.name}
                          </h2>
                        </SheetClose>
                      </Link>
                    ))}
                  </div>
                </div>

                <SheetFooter>
                  <div className="absolute bottom-2 inset-x-0">
                    <div className="flex flex-col items-center justify-center">
                      <div className="flex gap-2">
                        {socialData.map((data) => (
                          <a
                            key={data.link}
                            onClick={() => window.open(data.link)}
                            className="cursor-pointer"
                          >
                            <Image
                              alt="Image"
                              src={data.imgUrl}
                              width={20}
                              height={20}
                            />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </SheetFooter>
              </SheetContent>
            </Sheet>

            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
