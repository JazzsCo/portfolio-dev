"use client";

import Lottie from "lottie-react";
import { Download, Send } from "lucide-react";

import LocationAnimationData from "@/assets/location-animation.json";
import SampleAnimationData from "@/assets/sample-animation.json";
import DeveloperAnimationData from "@/assets/developer-animation.json";
import SampleBoyAnimationData from "@/assets/boy-animation.json";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <section className="mt-20 flex flex-col items-center justify-around md:flex-row space-y-10 md:space-x-10 transition-all">
      <div className="space-y-5 w-2/4 flel flex-col justify-center">
        <div className="space-y-3 text-center md:text-left transition-all">
          <h1 className="text-lg -tracking-tighter font-semibold">
            Fullstack Developer
          </h1>
          <h2 className="text-3xl font-bold">Hello, my name is Tom</h2>
          <p className="text-muted-foreground">
            8,044 views 11 Nov 2023 #tailwindcss #nextjs #portfolio How To Build
            A Portfolio Website: Re
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
  );
}
