import type { Metadata } from "next";
import { Schibsted_Grotesk, Martian_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Aurora from "@/components/Aurora";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const schibstedgrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted-grotesk",
  subsets: ["latin"],
});

const martianmono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevEvents",
  description: "The hub for every Developers",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", schibstedgrotesk.variable, martianmono.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col">
        <Navbar/>
        <div className=" absolute inset-0 top-0 x-[-1] min-h-screen">
          <Aurora
            colorStops={["#7cff67", "#B497CF", "#5227FF"]}
            blend={0.5}
            amplitude={1.0}
            speed={0.7}
          />
        </div>
        <main className="z-1">
          {children}
        </main>
      </body>
    </html>
  );
}
