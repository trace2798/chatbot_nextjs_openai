import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import { ThemeToggle } from "@/components/ThemeToggle";
import Navbar from "@/components/Navbar";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-RB75JQHNT1`}
      />

      <Script strategy="lazyOnload">
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'XXXXXXXXXX', {
        page_path: window.location.pathname,
      });
  `}
      </Script>
      {/* <Navbar/> */}
      <main className="absolute inset-0 flex justify-center items-center  flex-col ">
        {/* <div className=" w-80 h-80 bg-white dark:bg-slate-900">
          <p className="text-black dark:text-white">
            Trying box for theme change
          </p>
        </div> */}
        {/* <div className="">
          <ThemeToggle />
        </div> */}
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 mb-8 text-4xl font-bold sm:text-5xl md:mb-12 md:text-6xl lg:w-3/4 text-center">
          Revolutionize Your Customer Support with AI powered chatbot
        </h1>
        <p className="mb-8 leading-relaxed text-neutral-100 md:mb-12 xl:text-lg md:w-1/2 text-center">
          Empower your business with AI-driven chat support that delivers quick
          and accurate responses, powered by the revolutionary technology from
          OpenAI.
        </p>
        {/* <div className="">
          <ThemeToggle />
        </div> */}
        {/* <Hero/> */}
      </main>
    </>
  );
}
