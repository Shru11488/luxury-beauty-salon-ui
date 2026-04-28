"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

type CarouselProps = {
  children: React.ReactNode;
};

export function Carousel({ children }: CarouselProps) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({
      delay: 2500,
      stopOnInteraction: false,
    }),
  ]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex gap-6">{children}</div>
    </div>
  );
}

type CarouselItemProps = {
  children: React.ReactNode;
};

export function CarouselItem({ children }: CarouselItemProps) {
  return <div className="min-w-[250px] flex-shrink-0">{children}</div>;
}
