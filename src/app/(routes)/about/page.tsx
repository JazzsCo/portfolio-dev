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
      <section className="mt-24 flex flex-col items-center bg-slate-800 justify-around md:flex-row space-y-10 md:space-x-10 transition-all">
        <div className="space-y-5 w-2/4 flel flex-col justify-center">
          <div className="space-y-3 text-center md:text-left transition-all">
            <h2 className="text-3xl font-bold">
              Hi there! 👋 I&apos;m{" "}
              <span className="-tracking-tighter">JazzsCo</span>
            </h2>
            <p className="text-muted-foreground">
              I&apos;m first-year computer science student exploring the
              exciting world of full-stack development.In my first year,
              I&apos;ve delved into the fundamentals of computer science,
              covering a diverse range of subjects from algorithms to data
              structures. The thrill of coding and the endless possibilities it
              offers have captivated me since day one. I&apos;m particularly
              enthusiastic about mastering the art of full-stack development, as
              it allows me to bring my creative ideas to life on both the front
              and back ends of web applications. I&apos;m currently live in{" "}
              <a
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps/dir/16.831045,96.123634/16.8310432,96.123634/@16.8314048,96.1233416,19.31z/data=!4m5!4m4!1m1!4e1!1m0!3e3?entry=ttu"
                  )
                }
                className="cursor-pointer underline underline-offset-[0.5px]"
              >
                Yangon, Kamaryut Hledan.
              </a>
            </p>
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
