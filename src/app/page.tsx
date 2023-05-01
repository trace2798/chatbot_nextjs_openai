import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="absolute inset-0 flex justify-center items-center  flex-col">
      <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 mb-8 text-4xl font-bold sm:text-5xl md:mb-12 md:text-6xl lg:w-3/4 text-center">
        Revolutionize Your Customer Support with AI powered chatbot
      </h1>
      <p className="mb-8 leading-relaxed text-neutral-100 md:mb-12 xl:text-lg md:w-1/2 text-center">
        Empower your business with AI-driven chat support that delivers quick
        and accurate responses, powered by the revolutionary technology from
        OpenAI.
      </p>
      {/* <Hero/> */}
    </main>
  );
}
