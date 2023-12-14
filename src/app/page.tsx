"use client";

import Image from "next/image";
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
import Lottie from "lottie-react";

// import Swiper core and required modules
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import LocationAnimationData from "@/assets/location-animation.json";
import SampleAnimationData from "@/assets/sample-animation.json";
import DeveloperAnimationData from "@/assets/developer-animation.json";
import UserInfoAnimation from "@/assets/user-info-animation.json";
import CuteGuy from "@/assets/cute-guy.json";
import LazyGuy from "@/assets/lazy-guy.json";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type skillDataType = {
  title: string;
  data: Datum[];
};

type Datum = {
  name?: string;
  imageUrl?: string;
};

type ProjectsDataType = {
  name: string;
  description: string;
  category: string;
  tools: string[];
  imgUrl: string;
  liveLink: string;
  githubLink: string;
};

const infoData = [
  {
    icon: <User2 />,
    text: "Tom",
  },
  {
    icon: <PhoneCall />,
    text: "+959969417233",
  },
  {
    icon: <Calendar />,
    text: "Born on Oct 17, 2003",
  },
  {
    icon: <MailIcon />,
    text: "ygyi8632@gmail.com",
  },
  {
    icon: <HomeIcon />,
    text: "Yangon, Kamaryut Hledan",
  },
  {
    icon: <GraduationCap />,
    text: "1st Year, University of Computer Studies ( Thaton )",
  },
];

const skillData: skillDataType[] = [
  {
    title: "skills",
    data: [
      {
        name: "Typescript",
        imageUrl: "/icons/typescript.svg",
      },
      {
        name: "Node",
        imageUrl: "/icons/node.svg",
      },
      {
        name: "Express",
        imageUrl: "/icons/express.svg",
      },
      {
        name: "React",
        imageUrl: "/icons/react.svg",
      },
      {
        name: "Next",
        imageUrl: "/icons/next.svg",
      },
      {
        name: "React Native",
        imageUrl: "/icons/react.svg",
      },
      {
        name: "Expo",
        imageUrl: "/icons/expo.svg",
      },
      {
        name: "Sql, NoSql",
        imageUrl: "/icons/database.svg",
      },
      {
        name: "Prisma",
        imageUrl: "/icons/prisma.svg",
      },
      {
        name: "Other Libraries",
        imageUrl: "/icons/fire.svg",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        name: "Android Studio",
        imageUrl: "/icons/android-studio.svg",
      },
      {
        name: "Visual Studio Code",
        imageUrl: "/icons/vscode.svg",
      },
      {
        name: "Git",
        imageUrl: "/icons/git.svg",
      },
      {
        name: "Postman",
        imageUrl: "/icons/postman.svg",
      },
    ],
  },
];

const projectData: ProjectsDataType[] = [
  {
    name: "Genius AI",
    description:
      "Make changes to your account here. Click save when youre done.",
    category: "SAAS",
    tools: [
      "Typescript",
      "Javascript",
      "React",
      "Nextjs",
      "Tailwind",
      "Shadcn UI",
    ],
    imgUrl: "/projects/genius.png",
    liveLink: "/",
    githubLink: "/",
  },
  {
    name: "Ecommerce Admin",
    description:
      "Make changes to your account here. Click save when youre done.",
    category: "SAAS",
    tools: [
      "Typescript",
      "Javascript",
      "React",
      "Nextjs",
      "Tailwind",
      "Shadcn UI",
    ],
    imgUrl: "/projects/ecommerce.png",
    liveLink: "/",
    githubLink: "/",
  },
  {
    name: "Food Delivery App",
    description:
      "Make changes to your account here. Click save when youre done.",
    category: "POS",
    tools: ["Typescript", "Javascript", "React Native", "Expo", "Tailwind"],
    imgUrl: "/projects/ecommerce.png",
    liveLink: "/",
    githubLink: "/",
  },
  {
    name: "Car Rental",
    description:
      "Make changes to your account here. Click save when youre done.",
    category: "Service",
    tools: ["Typescript", "Javascript", "React", "Nextjs", "Tailwind"],
    imgUrl: "/projects/carrental.png",
    liveLink: "/",
    githubLink: "/",
  },
  {
    name: "Ecommerce UI App",
    description:
      "Make changes to your account here. Click save when youre done.",
    category: "UI",
    tools: ["Typescript", "Javascript", "React Native", "Expo", "Tailwind"],
    imgUrl: "/projects/genius.png",
    liveLink: "/",
    githubLink: "/",
  },
];

const reviewData = [
  {
    name: "Thomas",
    description:
      "Make changes to your account here. Click save when youre done.",
    job: "Water",
    imgUrl: "/projects/genius.png",
  },
  {
    name: "Rose",
    description:
      "Make changes to your account here. Click save when youre done.",
    job: "Water",
    imgUrl: "/projects/genius.png",
  },
  {
    name: "Suzy Buki",
    description:
      "Make changes to your account here. Click save when youre done.",
    job: "Water",
    imgUrl: "/projects/genius.png",
  },
  {
    name: "Ah Shi Mar",
    description:
      "Make changes to your account here. Click save when youre done.",
    job: "Water",
    imgUrl: "/projects/genius.png",
  },
  {
    name: "Genius Sign",
    description:
      "Make changes to your account here. Click save when youre done.",
    job: "Water",
    imgUrl: "/projects/genius.png",
  },
  {
    name: "Hazsto",
    description:
      "Make changes to your account here. Click save when youre done.",
    job: "Water",
    imgUrl: "/projects/genius.png",
  },
  {
    name: "Toki Moki",
    description:
      "Make changes to your account here. Click save when youre done.",
    job: "Water",
    imgUrl: "/projects/genius.png",
  },
  {
    name: "Jenies Kiki",
    description:
      "Make changes to your account here. Click save when youre done.",
    job: "Water",
    imgUrl: "/projects/genius.png",
  },
];

export default function Home() {
  return (
    <main>
      {/* Home Section */}
      <section className="mt-24 flex flex-col items-center justify-around md:flex-row space-y-10 md:space-x-10 transition-all">
        <div className="space-y-5 w-2/4 flel flex-col justify-center">
          <div className="space-y-3 text-center md:text-left transition-all">
            <h1 className="text-lg -tracking-tighter font-semibold">
              Welcome To My Portfolio Website!
            </h1>
            <h2 className="text-3xl font-bold text-transparent gradient-text animate-gradient">
              My name is JazzsCo
            </h2>
            <p className="text-muted-foreground">
              Currently I&apos;m study to become full-stack developer. I&apos;m
              a dedicated and innovative developer with a passion for creating
              full-stack application. I&apos;m good problem solving and team
              collaboration.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-start gap-5">
            <Button className="text-slate-100 w-[180px] -tracking-tighter">
              <Link href="/contact" className="flex items-center">
                Contact me <Send className="w-4 h-4 ml-1 mt-1" />
              </Link>
            </Button>
            <Button variant="outline" className="w-[180px] -tracking-tighter">
              Download CV <Download className="w-4 h-4 ml-1 mt-0.5" />
            </Button>
          </div>
        </div>

        <div className="w-[220px] sm:w-[300px] md:w-[380px]">
          <Lottie animationData={DeveloperAnimationData} />
        </div>
      </section>

      {/* About Section */}
      <section className="mt-24 flex flex-col-reverse items-center justify-around md:flex-row md:space-x-10 transition-all">
        <div className="w-[220px] sm:w-[300px] md:w-[380px] mt-14 md:mt-0">
          <Lottie animationData={UserInfoAnimation} />
        </div>

        <Tabs defaultValue="personal" className="md:w-[600px]">
          <TabsList className="grid w-[180px] md:w-full grid-cols-1 md:grid-cols-2 gap-1 md:gap-0 mx-auto md:mx-0 mb-16 md:mb-0">
            <TabsTrigger value="personal" className="bg-muted">
              Personal Info
            </TabsTrigger>
            <TabsTrigger value="skills" className="bg-muted">
              Skills
            </TabsTrigger>
          </TabsList>
          <TabsContent value="personal">
            <Card>
              <CardHeader>
                <CardTitle>Personal Info</CardTitle>
                <CardDescription>
                  This is the main infomation of myself.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="p-2 flex flex-col items-center md:items-start gap-5">
                  {infoData.map((data) => (
                    <div key={data.text} className="flex gap-6">
                      <div className="w-4 h-4 text-primary">{data.icon}</div>
                      <p className="text-muted-foreground truncate">
                        {data.text}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="skills">
            <Card>
              <CardHeader>
                <CardTitle>What I Use Everyday</CardTitle>
                <CardDescription>
                  I use this languages, frameworks, databases, tools and other
                  libraries every day.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 ">
                <div className="p-2 flex flex-col items-center md:grid md:grid-cols-2 gap-5 transition-all">
                  {skillData[0].data.map((data, _i) => (
                    <div key={_i} className="flex gap-6">
                      <Image
                        // @ts-ignore
                        alt={data.imageUrl}
                        // @ts-ignore
                        src={data.imageUrl}
                        width={10}
                        height={10}
                        className="w-6 h-6"
                      />
                      <p className="text-muted-foreground">{data.name}</p>
                    </div>
                  ))}
                </div>
              </CardContent>

              <CardContent className="space-y-2 ">
                <div className="p-2 flex flex-col items-center md:grid md:grid-cols-2 gap-5 transition-all">
                  {skillData[1].data.map((data, _i) => (
                    <div key={_i} className="flex gap-6">
                      <Image
                        //@ts-ignore
                        alt={data.imageUrl}
                        //@ts-ignore
                        src={data.imageUrl}
                        width={10}
                        height={10}
                        className="w-6 h-6"
                      />
                      <p className="text-muted-foreground">{data.name}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Projects */}
      <section className="mt-24 flex flex-col items-center justify-around md:flex-row space-y-10 md:space-x-10 transition-all">
        <div className="space-y-5 w-2/4 flel flex-col justify-center">
          <div className="space-y-3 text-center md:text-left transition-all">
            <h2 className="text-3xl font-bold"> Latest Projects</h2>
            <p className="text-muted-foreground">
              Currently I&apos;m study to become full-stack developer. I&apos;m
              a dedicated and innovative developer with a passion for creating
              full-stack application. I&apos;m good problem solving and team
              collaboration.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center md:flex-row sm:justify-start">
            <Link href="/projects">
              <Button
                variant="outline"
                className="hover:bg-primary hover:text-white w-[180px] -tracking-tighter"
              >
                Latest Projects
              </Button>
            </Link>
          </div>
        </div>

        {/* Latest Projects */}
        <div className="w-3/5 hidden md:block">
          <Swiper
            // install Swiper modules
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={2}
            pagination={{ clickable: true }}
          >
            {projectData.map((data: ProjectsDataType) => (
              <SwiperSlide key={data.liveLink}>
                <div className="w-[300px] md:w-[320px] border rounded-md bg-muted">
                  <div>
                    <Link href="/projects">
                      <Image
                        alt="Image"
                        src={data.imgUrl}
                        width={20}
                        height={20}
                        className="w-full object-fill rounded-md"
                      />
                    </Link>
                  </div>
                  <div className="px-3 py-3">
                    <div>
                      <div className="flex gap-3">
                        <h1 className="font-medium">{data.name}</h1>
                        <Badge>{data.category}</Badge>
                      </div>
                      <p className="text-muted-foreground text-sm ml-1 mt-1">
                        {data.description}
                      </p>
                    </div>

                    <div className="mt-2 flex flex-wrap items-center gap-2">
                      {data.tools.map((item, _i) => (
                        <div
                          key={_i}
                          className="flex items-center justify-center w-fit rounded-full border dark:border-gray-700 px-3 py-0.5 text-xs font-semibold transition-colors bg-secondary text-secondary-foreground hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section>
        <div className="w-full hidden sm:block md:hidden mt-8">
          <Swiper
            // install Swiper modules
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={2}
            pagination={{ clickable: true }}
          >
            {projectData.map((data: ProjectsDataType) => (
              <SwiperSlide key={data.liveLink}>
                <Link href="/my-projects">
                  <div className="w-[300px] md:w-[320px] border rounded-md bg-muted">
                    <div>
                      <Image
                        alt="Image"
                        src={data.imgUrl}
                        width={20}
                        height={20}
                        className="w-full object-fill rounded-md"
                      />
                    </div>
                    <div className="px-3 py-3">
                      <div>
                        <div className="flex gap-3">
                          <h1 className="font-medium">{data.name}</h1>
                          <Badge>{data.category}</Badge>
                        </div>
                        <p className="text-muted-foreground text-sm ml-1 mt-1">
                          {data.description}
                        </p>
                      </div>

                      <div className="mt-2 flex flex-wrap items-center gap-2">
                        {data.tools.map((item, _i) => (
                          <div
                            key={_i}
                            className="flex items-center justify-center w-fit rounded-full border dark:border-gray-700 px-3 py-0.5 text-xs font-semibold transition-colors bg-secondary text-secondary-foreground hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <div className="flex flex-col items-center justify-center mt-8 gap-5 sm:hidden">
        {projectData.map((data: ProjectsDataType) => (
          <div
            key={data.liveLink}
            className="w-[300px] md:w-[320px] border rounded-md bg-muted"
          >
            <div>
              <Image
                alt="Image"
                src={data.imgUrl}
                width={20}
                height={20}
                className="w-full object-fill rounded-md"
              />
            </div>
            <div className="px-3 py-3">
              <div>
                <div className="flex gap-3">
                  <h1 className="font-medium">{data.name}</h1>
                  <Badge>{data.category}</Badge>
                </div>
                <p className="text-muted-foreground text-sm ml-1 mt-1">
                  {data.description}
                </p>
              </div>

              <div className="mt-2 flex flex-wrap items-center gap-2">
                {data.tools.map((item, _i) => (
                  <div
                    key={_i}
                    className="flex items-center justify-center w-fit rounded-full border dark:border-gray-700 px-3 py-0.5 text-xs font-semibold transition-colors bg-secondary text-secondary-foreground hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Reviews */}
      <section className="mt-24 flex flex-col items-center justify-around md:flex-row space-y-10 md:space-x-10 transition-all">
        <div className="space-y-5 w-1/4 flel flex-col justify-center">
          <div className="space-y-3 text-center md:text-left transition-all">
            <h2 className="text-3xl font-bold -tracking-tighter">Reviews</h2>
            <p className="text-muted-foreground">
              8,044 views 11 Nov 2023 #tailwindcss #nextjs #portfolio How To
              Build A Portfolio Website: Re
            </p>
          </div>
        </div>

        {/* Reviews */}
        <div className="w-3/5 hidden md:block">
          <Swiper
            // install Swiper modules
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={2}
            pagination={{ clickable: true }}
          >
            {reviewData.map((data) => (
              <SwiperSlide key={data.name}>
                <div className="w-[300px] md:w-[320px] border rounded-md bg-muted p-3">
                  <div className="flex items-center gap-3">
                    <div>
                      <Avatar>
                        <AvatarImage
                          src="https://github.com/shadcn.png"
                          alt="@shadcn"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="-mt-1">
                      <h1 className="font-semibold">{data.name}</h1>
                      <h3 className="text-xs text-muted-foreground">
                        {data.job}
                      </h3>
                    </div>
                  </div>
                  <div className="py-2 px-3 text-muted-foreground text-sm">
                    <p>{data.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <section>
        <div className="w-full hidden sm:block md:hidden mt-8">
          <Swiper
            // install Swiper modules
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={2}
            pagination={{ clickable: true }}
          >
            {reviewData.map((data) => (
              <SwiperSlide key={data.name}>
                <div className="w-[300px] md:w-[320px] border rounded-md bg-muted p-3">
                  <div className="flex items-center gap-3">
                    <div>
                      <Avatar>
                        <AvatarImage
                          src="https://github.com/shadcn.png"
                          alt="@shadcn"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="-mt-1">
                      <h1 className="font-semibold">{data.name}</h1>
                      <h3 className="text-xs text-muted-foreground">
                        {data.job}
                      </h3>
                    </div>
                  </div>
                  <div className="py-2 px-3 text-muted-foreground text-sm">
                    <p>{data.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <div className="flex flex-col items-center justify-center mt-8 gap-5 sm:hidden">
        {reviewData.map((data) => (
          <div key={data.name}>
            <SwiperSlide>
              <div className="w-[300px] md:w-[320px] border rounded-md bg-muted p-3">
                <div className="flex items-center gap-3">
                  <div>
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="-mt-1">
                    <h1 className="font-semibold">{data.name}</h1>
                    <h3 className="text-xs text-muted-foreground">
                      {data.job}
                    </h3>
                  </div>
                </div>
                <div className="py-2 px-3 text-muted-foreground text-sm">
                  <p>{data.description}</p>
                </div>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </div>

      <div>
        <div className="flex flex-col items-center justify-center gap-5 mt-24">
          <h2 className="text-3xl font-semibold text-center">
            Prepared to turn your ideas into reality? I can help you
          </h2>
          <Link href="/contact">
            <Button className="text-slate-100 w-[180px] -tracking-tighter">
              Contact me <Send className="w-4 h-4 ml-1 mt-0.5" />
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}

// I will use this bg color for cool theme website to see
// bg-secondary/80 dark:bg-secondary/20
