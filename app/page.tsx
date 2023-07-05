import Comfort from "@/components/home/Comfort";
import HeroSection from "@/components/home/HeroSection";
import TrendingServices from "@/components/home/TrendingServices";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <div className="bg-gray-50">
        <div id="content" className="mx-auto space-y-10 md:max-w-[1200px]">
          <Comfort />
          <TrendingServices />
        </div>
      </div>
    </main>
  );
}
