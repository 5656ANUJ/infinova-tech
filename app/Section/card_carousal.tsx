"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/app/Components/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/app/Components/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function CardCarousal() {
  const [api, setApi] = useState<CarouselApi>();
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

    return () => {
      api.off("select", updateStats);
    };
  }, [api]);

  const images = [
    { src: "/hero1.svg", alt: "Card 1" },
    { src: "/hero1.svg", alt: "Card 2" },
    { src: "/hero1.svg", alt: "Card 3" },
    { src: "/hero1.svg", alt: "Card 4" },
    { src: "/hero1.svg", alt: "Card 5" },
  ];

  return (
    <section className=" pb-20 lg:pb-0 md:pb-24 ">
      <div className="text-center mb-10 px-4">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-300">
          Project Showcase
        </h2>
        <h3 className="text-2xl md:text-4xl lg:text-6xl font-black text-white mt-2">
          Our Design in Action
        </h3>
        <p className="text-base md:text-lg lg:text-xl text-gray-400 mt-4 max-w-5xl mx-auto">
          Explore a selection of UI design projects we've delivered for
          innovative clients across various industries.
        </p>
      </div>
      <Carousel
        setApi={setApi}
        opts={{ align: "start" }}
        className="w-full  p-1"
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem
              key={index}
              className="basis-full md:basis-1/2  lg:basis-1/3"
            >
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square  items-center justify-center p-6">
                    <Image
                      src={image.src} // ✅ now using the array
                      alt={image.alt}
                      width={300}
                      height={300}
                      className="rounded-lg object-contain w-full max-w-[300px]"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden! lg:flex! lg:h-20   lg:w-20 bg-white border-[6.5px] hover:lg:h-24 hover:lg:w-24 hover:md: border-black text-black rounded-full  transition-all items-center justify-center">
          <ChevronLeft className="h-15 w-15" />
        </CarouselPrevious>
        <CarouselNext className="hidden! lg:flex! lg:h-20   lg:w-20 bg-white  border-[6.5px] hover:lg:h-24 hover:lg:w-24 hover:md: border-black text-black rounded-full  transition-all items-center justify-center">
          <ChevronRight className="h-20  w-20" />
        </CarouselNext>
      </Carousel>
      {/* Dots Pagination */}
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
    </section>
  );
}
