import Comfort from "@/components/home/Comfort";
import HeroSection from "@/components/home/HeroSection";
import Testimonial from "@/components/home/Testimonial";
import TrendingServices from "@/components/home/TrendingServices";
import Video from "@/components/home/Video";
import WhatYouGet from "@/components/home/WhatYouGet";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <div className="bg-gray-50">
        <div className="mx-auto space-y-10 md:max-w-[1200px]">
          <Comfort />
          <TrendingServices />
          <WhatYouGet />
          <Video />
          <Testimonial />
        </div>
      </div>
    </main>
  );
}
