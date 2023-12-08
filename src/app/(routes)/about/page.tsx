"use client";

import Lottie from "lottie-react";
import CountUp from "react-countup";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import LocationAnimationData from "@/assets/location-animation.json";
import SampleAnimationData from "@/assets/sample-animation.json";
import DeveloperAnimationData from "@/assets/developer-animation.json";
import UserInfoAnimation from "@/assets/user-info-animation.json";
import CuteGuy from "@/assets/cute-guy.json";
import LazyGuy from "@/assets/lazy-guy.json";

import { Button } from "@/components/ui/button";

const skillData = [
  {
    name: "Html",
    imageUrl: "/icons/html.svg",
    rate: 80,
  },
  {
    name: "Css",
    imageUrl: "/icons/css.svg",
    rate: 83,
  },
  {
    name: "Javascript",
    imageUrl: "/icons/typescript.svg",
    rate: 85,
  },
  {
    name: "Typescript",
    imageUrl: "/icons/javascript.svg",
    rate: 80,
  },
  {
    name: "Node",
    imageUrl: "/icons/node.svg",
    rate: 80,
  },
  {
    name: "Express",
    imageUrl: "/icons/express.svg",
    rate: 80,
  },
  {
    name: "React",
    imageUrl: "/icons/react.svg",
    rate: 85,
  },
  {
    name: "Redux",
    imageUrl: "/icons/redux.svg",
    rate: 80,
  },
  {
    name: "Next",
    imageUrl: "/icons/next.svg",
    rate: 87,
  },
  {
    name: "React Native",
    imageUrl: "/icons/react.svg",
    rate: 80,
  },
  {
    name: "Expo",
    imageUrl: "/icons/expo.svg",
    rate: 83,
  },
  {
    name: "C++",
    imageUrl: "/icons/cplusplus.svg",
    rate: 78,
  },
  {
    name: "Java",
    imageUrl: "/icons/java.svg",
    rate: 75,
  },
  {
    name: "Tailwind",
    imageUrl: "/icons/tailwind.svg",
    rate: 85,
  },
  {
    name: "Shadcn UI",
    imageUrl: "/icons/shadcn.jpg",
    rate: 86,
  },
  {
    name: "Material UI",
    imageUrl: "/icons/mui.svg",
    rate: 80,
  },
  {
    name: "Sql, NoSql",
    imageUrl: "/icons/database.svg",
    rate: 80,
  },
  {
    name: "Prisma",
    imageUrl: "/icons/prisma.svg",
    rate: 83,
  },
  {
    name: "Node Package Manager",
    imageUrl: "/icons/npm.svg",
    rate: 80,
  },
  {
    name: "Other Libraries",
    imageUrl: "/icons/fire.svg",
    rate: 78,
  },
];

const AboutPage = () => {
  return (
    <main>
      {/* About Section */}
      <section className="mt-24 flex flex-col items-center justify-around md:flex-row space-y-10 md:space-x-10 transition-all">
        <div className="space-y-5 w-2/4 flel flex-col justify-center">
          <div className="space-y-3 text-center md:text-left transition-all">
            <h2 className="text-3xl font-bold">Hello, My name is Tom</h2>
            <p className="text-muted-foreground">
              Im currently study to became Full Stack Developer. I live in
              Yangon, Kamaryut Hledan.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-start gap-5">
            {/* <Button className="text-slate-100 w-[180px] -tracking-tighter">
              Contact me <Send className="w-4 h-4 ml-1 mt-0.5" />
            </Button>
            <Button variant="outline" className="w-[180px] -tracking-tighter">
              Download CV <Download className="w-4 h-4 ml-1 mt-0.5" />
            </Button> */}
          </div>
        </div>

        <div className="w-[220px] sm:w-[300px] md:w-[380px]">
          <Lottie animationData={LocationAnimationData} />
        </div>
      </section>

      {/* Skill Set Section */}
      <section className="mt-20 w-4/5 transition-all mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-3 gap-x-7">
          {skillData.map((data) => (
            <div key={data.imageUrl}>
              <div className="px-4 py-3 w-[130px] flex items-center rounded-md bg-muted">
                <Avatar className="w-6 h-6 md:w-8 md:h-8">
                  <AvatarImage src={data.imageUrl} alt="@shadcn" />
                  <AvatarFallback>
                    {data.name.charAt(0) +
                      data.name.charAt(data.name.length - 1)}
                  </AvatarFallback>
                </Avatar>

                <div className="ml-5 font-semibold">
                  <CountUp end={data.rate} duration={5} delay={0} />
                  &nbsp;%
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
