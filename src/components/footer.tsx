"use client";

import Image from "next/image";
import Wave from "react-wavify";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

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

const Footer = () => {
  const [isMounted, setIsMounted] = useState(false);

  const theme = useTheme().theme;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <section className="mt-20 relative">
      <Wave
        mask="url(#mask)"
        fill={theme === "dark" ? "#151414" : "#F1F5F9"}
        paused={false}
        style={{ display: "flex" }}
        options={{
          height: 10,
          amplitude: 17,
          speed: 0.7,
          points: 2,
        }}
      />

      <div className="absolute bottom-0 left-0">
        <div className="px-3 pb-[0.5px] flex flex-col items-center gap-1">
          <div className="hidden md:flex md:space-x-2">
            {socialData.map((data) => (
              <a
                key={data.link}
                onClick={() => window.open(data.link)}
                className="cursor-pointer"
              >
                <Image alt="Image" src={data.imgUrl} width={20} height={20} />
              </a>
            ))}
          </div>

          <p className="text-black/50 dark:text-white/20 text-[10px] sm:text-sm">
            &copy; 2023 JazzsCo. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
