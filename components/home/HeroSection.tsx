import Image from "next/image";
import React from "react";
import bg2 from "../../public/images/bg/herobg.png";
import { Playfair, Playfair_Display } from "next/font/google";
import { Button } from "../ui/button";

const fair = Playfair_Display({ subsets: ["latin"] });

function HeroSection() {
  return (
    <div className="flex bg-gray-50 pt-4 md:bg-hero md:bg-cover md:pt-0">
      <div className="relative mx-6 flex flex-col-reverse justify-between md:mx-auto md:flex md:max-w-[1200px] md:flex-row">
        <div className="mt-10 flex w-full items-center pr-4 md:w-1/2">
          <div className={`space-y-4`}>
            <h5 className={`${fair.className} text-2xl`}>
              #1 best spa and beauty
            </h5>
            <h3
              className={`${fair.className} leading-24 text-2xl font-bold md:text-4xl`}
            >
              Relax, <span className="text-purple-500">Renew</span>, and
              Revitalize with our In-Home Salon and Spa{" "}
              <span className="text-purple-500">Experiences.</span>
            </h3>
            <p className="text-[16px]">
              Turn your home into a peaceful retreat of beauty and relaxation!
              Our skilled professionals bring the salon and spa experience right
              to your door.
            </p>
            <div className="flex pt-10">
              <div className="flex w-full justify-between space-x-4 md:justify-start">
                <Button className="grow md:grow-0">Book Now</Button>
                <Button variant={"outline"} className="grow md:grow-0">
                  Order Now
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden w-full justify-end md:flex md:w-1/2">
          <Image
            alt=""
            height={646}
            width={448}
            style={{ objectFit: "cover" }}
            src={
              "https://images.pexels.com/photos/5938522/pexels-photo-5938522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
          />
        </div>
        <div className="container relative h-[450px] md:hidden">
          <Image
            priority
            fill
            style={{ objectFit: "cover" }}
            alt=""
            src={
              "https://images.pexels.com/photos/5938522/pexels-photo-5938522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
          />
        </div>
      </div>
      {/* <div className="">
        
        
      </div> */}
    </div>
  );
}

export default HeroSection;
