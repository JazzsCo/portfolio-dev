"use client";

import * as z from "zod";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Download, HomeIcon, MailIcon, PhoneCall } from "lucide-react";

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

const formSchema = z.object({
  name: z.string().nonempty("Name is required."),
  email: z.string().nonempty("Email is required.").email("Invalid email."),
  content: z
    .string()
    .nonempty("Message is required.")
    .min(6, { message: "Message must be at least 6 characters." }),
});

const ContactPage = () => {
  const [isMounted, setIsMounted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      content: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log("VALUES", values);
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
        <div className="space-y-10 w-2/4 flex flex-col items-center md:items-start justify-center">
          <div className="space-y-3 text-center md:text-left transition-all">
            <h2 className="text-3xl font-bold">Lets Work Together.</h2>
            <p className="text-muted-foreground">
              If you need fullstack developer with junior position, Please
              content me.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start gap-5">
            <div className="flex gap-6">
              <div className="w-4 h-4 text-primary">
                <PhoneCall />
              </div>
              <p className="text-muted-foreground">+959969417233</p>
            </div>

            <div className="flex gap-6">
              <div className="w-4 h-4 text-primary">
                <MailIcon />
              </div>
              <p className="text-muted-foreground">ygyi8632@gmail.com</p>
            </div>

            <div className="flex gap-6">
              <div className="w-4 h-4 text-primary">
                <HomeIcon />
              </div>
              <p className="text-muted-foreground">Yangon, Kamaryut Hledan</p>
            </div>
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
              {/* `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;` */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="col-start-2 col-span-4">
                    <FormLabel className="-tracking-tighter">Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Jazzs_Co" {...field} />
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
                      <Input placeholder="your@gmail.com" {...field} />
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
                        placeholder="Something If you want"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="col-start-2 text-slate-100 col-span-4 -tracking-tighter">
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
