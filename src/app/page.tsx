"use client";

import Lottie from "lottie-react";
import {
  Calendar,
  Download,
  GraduationCap,
  HomeIcon,
  MailIcon,
  PhoneCall,
  Send,
  User2,
} from "lucide-react";

import LocationAnimationData from "@/assets/location-animation.json";
import SampleAnimationData from "@/assets/sample-animation.json";
import DeveloperAnimationData from "@/assets/developer-animation.json";
import SampleBoyAnimationData from "@/assets/boy-animation.json";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const infoData = [
  {
    icon: <User2 />,
    text: "Tom",
  },
  {
    icon: <Calendar />,
    text: "Born on Oct 17, 2003",
  },
  {
    icon: <HomeIcon />,
    text: "Yangon, Kamaryut Hledan",
  },
  {
    icon: <PhoneCall />,
    text: "+959969417233",
  },
  {
    icon: <MailIcon />,
    text: "ygyi8632@gmail.com",
  },
  {
    icon: <GraduationCap />,
    text: "1st Year, University of Computer Studies ( Thaton )",
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "HTML, CSS, Tailwind",
      },
      {
        name: "Javascript, Typescript, C++, Java",
      },
      {
        name: "Front-end Development",
      },
      {
        name: "React, Svelte",
      },
      {
        name: "Back-end Development",
      },
      {
        name: "Node, Express",
      },
      {
        name: "Full-stack Development",
      },
      {
        name: "Nextjs",
      },
      {
        name: "Mobile Development",
      },
      {
        name: "React Native, Expo",
      },
      {
        name: "Sql & NoSql",
      },
      {
        name: "ORM -Prisma",
      },
      {
        name: "Other Libraries",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imageUrl: "/icons/DeviconAndroidstudio.svg",
      },
      {
        imageUrl: "/icons/DeviconVscode.svg",
      },
    ],
  },
];

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <main>
      {/* Home Section */}
      <section className="mt-20 flex flex-col items-center justify-around md:flex-row space-y-10 md:space-x-10 transition-all">
        <div className="space-y-5 w-2/4 flel flex-col justify-center">
          <div className="space-y-3 text-center md:text-left transition-all">
            <h1 className="text-lg -tracking-tighter font-semibold">
              Fullstack Developer
            </h1>
            <h2 className="text-3xl font-bold">Hello, my name is Tom</h2>
            <p className="text-muted-foreground">
              8,044 views 11 Nov 2023 #tailwindcss #nextjs #portfolio How To
              Build A Portfolio Website: Re
            </p>
          </div>

          <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-start gap-5">
            <Button className="text-slate-100 w-[180px] -tracking-tighter">
              Contact me <Send className="w-4 h-4 ml-1 mt-0.5" />
            </Button>
            <Button variant="outline" className="w-[180px] -tracking-tighter">
              Download CV <Download className="w-4 h-4 ml-1 mt-0.5" />
            </Button>
          </div>
        </div>

        <div className="w-[220px] sm:w-[300px] md:w-[380px]">
          <Lottie
            animationData={DeveloperAnimationData}
            style={{
              colorInterpolation: "sRGB",
            }}
          />
        </div>
      </section>

      {/* About Section */}
      <section className="bg-slate-200 mt-20">Hello About Section</section>
    </main>
  );
}
