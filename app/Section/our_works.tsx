"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/Components/carousel";
import { Card, CardContent } from "@/app/Components/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectImage {
  src: string;
  alt: string;
}

type ProjectCategory =
  | "logo"
  | "ads"
  | "websites"
  | "tshirts"
  | "branding"
  | "printing";

export default function OurWorks() {
  const [activeTab, setActiveTab] = useState<ProjectCategory>("websites");
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    const updateStats = () => {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap() + 1);
    };

    updateStats();

    api.on("select", updateStats);
    api.on("reInit", updateStats);

    return () => api.off("select", updateStats);
  }, [api, activeTab]);

  const projects: Record<ProjectCategory, ProjectImage[]> = {
    logo: [
      { src: "/hero1.svg", alt: "Logo1" },
      { src: "/js.svg", alt: "Logo1" },
    ],
    ads: [
      { src: "/mongo.svg", alt: "Logo1" },
      { src: "/js.svg", alt: "Logo1" },
    ],
    websites: [
      { src: "/window.svg", alt: "Logo1" },
      { src: "/hero1.svg", alt: "Logo2" },
      { src: "/js.svg", alt: "Logo3" },
      { src: "/window.svg", alt: "Logo1" },
      { src: "/hero1.svg", alt: "Logo2" },
    ],
    tshirts: [
      { src: "/mongo.svg", alt: "Logo1" },
      { src: "/hero1.svg", alt: "Logo2" },
    ],
    branding: [
      { src: "/mongo.svg", alt: "Logo1" },
      { src: "/hero1.svg", alt: "Logo2" },
    ],
    printing: [{ src: "/react.svg", alt: "Logo1" }],
  };

  const tabs = Object.keys(projects);

  return (
    <section className="h-full w-full p-4">
      <div className="bg-brown-500 h-full  w-full p-4 lg:grid lg:grid-cols-[1.5fr_2fr] lg:gap-4 md:space-y-14 space-y-8 lg:space-y-0">
        <div className="h-full w-full space-y-4  ">
          <h1 className="text-8xl md:text-8xl  lg:text-5xl font-black text-center lg:text-left">
            Our Works
          </h1>
          <p className="text-4xl md:text-3xl lg:text-xl text-center lg:text-left">
            Whether Small, Medium, Or Big We Offer An Unlimited Design Service
            For Business of All Size
          </p>
        </div>

        <div className="h-full w-full flex flex-wrap items-center justify-evenly gap-4 lg:gap-8 p-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as ProjectCategory)}
              className={`px-4 py-8 lg:py-2 md:py-2 rounded-full text-4xl md:text-3xl lg:text-[18px] font-semibold transition-all ${
                activeTab === tab
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-white hover:bg-blue-400"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="px-8 w-full h-fit mx-auto mt-14">
        <Carousel setApi={setApi} opts={{ align: "start" }} className="w-full">
          <CarouselContent>
            {projects[activeTab].map((image, index) => (
              <CarouselItem
                key={index}
                className="basis-full md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card className="h-[800px] lg:h-[400px] md:h-[500px]">
                    <CardContent className="flex items-center justify-center p-6">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={300}
                        height={300}
                        className="rounded-lg w-[600px] lg:w-[300px] object-contain"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="!hidden lg:!flex lg:h-20 lg:w-20 bg-white border-[6.5px] border-black text-black rounded-full" />
          <CarouselNext className="!hidden lg:!flex lg:h-20 lg:w-20 bg-white border-[6.5px] border-black text-black rounded-full" />
        </Carousel>

        <div className="py-4 flex justify-center gap-2">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                current === i + 1 ? "bg-blue-600 w-8" : "bg-gray-300"
              }`}
              onClick={() => api?.scrollTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
