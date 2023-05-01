"use client";
import { FC } from "react";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <header className="mb-8 flex items-center justify-between border-b py-4 md:mb-12 md:py-8 xl:mb-16">
          <a
            href="/"
            className="text-black-800 inline-flex items-center gap-2.5 text-2xl font-bold md:text-3xl"
            aria-label="logo"
          >
            <svg
              width="95"
              height="94"
              viewBox="0 0 95 94"
              className="h-auto w-6 text-indigo-500"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M96 0V47L48 94H0V47L48 0H96Z" />
            </svg>
            Flowrift
          </a>

          <nav className="hidden gap-12 lg:flex">
            <a href="#" className="text-lg font-semibold text-indigo-500">
              Home
            </a>
            <a
              href="#"
              className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
            >
              Features
            </a>
            <a
              href="#"
              className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
            >
              About
            </a>
          </nav>

          <a
            href="#"
            className="hidden rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:inline-block"
          >
            Contact Sales
          </a>

          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              />
            </svg>
            Menu
          </button>
        </header>

        <section className="flex flex-col items-center">
          <div className="flex items-center gap-2 rounded border bg-gray-50 p-2 text-gray-500">
            <span className="mt-0.5 rounded-full bg-indigo-100 px-2 py-1 text-xs font-semibold leading-none text-indigo-800">
              New
            </span>

            <span className="text-sm">
              This is a section of some simple filler text.
            </span>

            <a
              href="#"
              className="text-sm font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
            >
              More
            </a>
          </div>

          <div className="flex max-w-xl flex-col items-center pt-8 pb-0 text-center sm:pb-16 lg:pt-32 lg:pb-32">
            <p className="mb-4 font-semibold text-indigo-500 md:mb-6 md:text-lg xl:text-xl">
              Very proud to introduce
            </p>

            <h1 className="text-white mb-8 text-4xl font-bold sm:text-5xl md:mb-12 md:text-6xl">
              Revolutionary way to build the web
            </h1>

            <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 xl:text-lg">
              This is a section of some simple filler text, also known as
              placeholder text. It shares characteristics of real text.
            </p>

            <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
              <a
                href="#"
                className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
              >
                Start now
              </a>

              <a
                href="#"
                className="inline-block rounded-lg border bg-white px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base"
              >
                Take tour
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Hero;
