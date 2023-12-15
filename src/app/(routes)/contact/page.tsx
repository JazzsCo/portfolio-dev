"use client";

import * as z from "zod";
import { useEffect, useState } from "react";
import axios from "axios";
import Lottie from "lottie-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Download, HomeIcon, MailIcon, PhoneCall } from "lucide-react";
import toast from "react-hot-toast";

import LocationAnimationData from "@/assets/location-animation.json";
import SampleAnimationData from "@/assets/sample-animation.json";
import DeveloperAnimationData from "@/assets/developer-animation.json";
import UserInfoAnimation from "@/assets/user-info-animation.json";
import CuteGuy from "@/assets/cute-guy.json";
import LazyGuy from "@/assets/lazy-guy.json";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { Qahiri } from "next/font/google";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  name: z.string().nonempty("Name is required."),
  email: z.string().nonempty("Email is required.").email("Invalid email."),
  content: z
    .string()
    .nonempty("Message is required.")
    .min(6, { message: "Message must be at least 6 characters." }),
});

const ContactPage = () => {
  const router = useRouter();

  const [isMounted, setIsMounted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      content: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post("/api/customer", {
        name: values.name,
        email: values.email,
        content: values.content,
      });

      form.reset();

      console.log(response);

      toast.success("Yey, you had content me!!");
    } catch (error) {
      toast.error("Something was wrong.");
    } finally {
      router.refresh();
    }
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <main>
      {/* Content Section */}
      <section className="mt-24 flex flex-col items-center justify-around md:flex-row space-y-10 md:space-x-10 transition-all">
        <div className="space-y-10 w-2/5 flex flex-col items-center md:items-start justify-center">
          <div className="space-y-3 text-center md:text-left transition-all">
            <h2 className="text-3xl font-bold text-transparent gradient-text animate-gradient">
              Lets Work Together.
            </h2>
            <p className="text-muted-foreground">
              You can leave a message directly through the website.If you need
              fullstack developer with junior position, Please contact me.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start gap-5">
            <a
              onClick={() => {
                const phone = +959969417233;

                window.open("tel:" + phone);
              }}
              className="cursor-pointer"
            >
              <div className="flex gap-6">
                <div className="w-2 h-2 text-primary mt-[2px]">
                  <PhoneCall />
                </div>
                <p className="text-muted-foreground truncate">+959969417233</p>
              </div>
            </a>

            <a
              onClick={() =>
                window.open(
                  "https://mail.google.com/mail/u/0/#sent?compose=CllgCJvlHJLCRrGqkqwjvwMvvLjvcWrSQgzzhVwWtHWtwXZNJjTXXVNPFmZpWbwfHNHnWThWSNB"
                )
              }
              className="cursor-pointer"
            >
              <div className="flex gap-6">
                <div className="w-4 h-4 text-primary mt-[3px]">
                  <MailIcon />
                </div>
                <p className="text-muted-foreground truncate">
                  ygyi8632@gmail.com
                </p>
              </div>
            </a>

            <a
              onClick={() =>
                window.open(
                  "https://www.google.com/maps/dir/16.831045,96.123634/16.8310432,96.123634/@16.8314048,96.1233416,19.31z/data=!4m5!4m4!1m1!4e1!1m0!3e3?entry=ttu"
                )
              }
              className="cursor-pointer"
            >
              <div className="flex gap-6">
                <div className="w-4 h-4 text-primary text-center">
                  <HomeIcon />
                </div>
                <p className="text-muted-foreground truncate">
                  Yangon, Kamaryut Hledan
                </p>
              </div>
            </a>
          </div>

          <Button variant="outline" className="w-[180px] -tracking-tighter">
            Download CV <Download className="w-4 h-4 ml-1 mt-0.5" />
          </Button>
        </div>

        <div className="w-[220px] sm:w-[300px] md:w-[380px]">
          <Lottie animationData={CuteGuy} />
        </div>
      </section>

      {/* Form Section */}
      <div className="flex items-center justify-center">
        <div className="mt-24 w-3/4 py-7 border rounded-md bg-muted">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-5 grid grid-cols-6"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="col-start-2 col-span-4">
                    <FormLabel className="-tracking-tighter">Name</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        placeholder="Jazzs_Co"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="col-start-2 col-span-4">
                    <FormLabel className="-tracking-tighter">
                      You email
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        placeholder="your@gmail.com"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem className="col-start-2 col-span-4">
                    <FormLabel className="-tracking-tighter">Content</FormLabel>
                    <FormControl>
                      <Textarea
                        disabled={isLoading}
                        placeholder="Something If you want"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                disabled={isLoading}
                className="col-start-2 text-slate-100 col-span-4 -tracking-tighter"
              >
                Lets Talk
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
