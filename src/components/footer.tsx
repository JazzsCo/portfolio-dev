"use client";

import Image from "next/image";
import Link from "next/link";
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

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="relative w-full">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#2DAC5C"
          fill-opacity="1"
          d="M0,160L21.8,160C43.6,160,87,160,131,176C174.5,192,218,224,262,234.7C305.5,245,349,235,393,234.7C436.4,235,480,245,524,208C567.3,171,611,85,655,85.3C698.2,85,742,171,785,186.7C829.1,203,873,149,916,138.7C960,128,1004,160,1047,160C1090.9,160,1135,128,1178,101.3C1221.8,75,1265,53,1309,48C1352.7,43,1396,53,1418,58.7L1440,64L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
        ></path>
      </svg>

      <div className="absolute bottom-2 right-2 flex flex-col items-center gap-1">
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

        <p className="text-black/75 text-[10px] sm:text-sm">
          Copyright &copy; Tom. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
