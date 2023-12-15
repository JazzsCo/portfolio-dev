import "./globals.css";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { Toaster } from "react-hot-toast";

import { ThemeProvider } from "@/provider/theme-provider";
import MainNav from "@/components/main-nav";
import Footer from "@/components/footer";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "JazzsCo",
  icons: {
    icon: ["/logo-dev.png"],
  },
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen w-full bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <MainNav />
          <Toaster />
          <div className="h-full w-full lg:max-w-7xl mx-auto p-3 px-7 mt-16">
            {children}
          </div>

          {/* Footer */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
