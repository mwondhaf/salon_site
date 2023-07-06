"use client";
import { CheckCircle2 } from "lucide-react";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const fair = Playfair_Display({ subsets: ["latin"] });

const TrendingServices = () => {
  return (
    <div className="block justify-between px-4 md:flex md:py-20">
      <div className="w-full rounded-2xl bg-purple-500 px-6  py-10 text-white md:w-1/2 md:p-20">
        <h5 className="uppercase">You are covered</h5>
        <h3
          className={`${fair.className} text-3xl font-bold leading-10 md:text-[40px]`}
        >
          We will serve you well
        </h3>
        <div className="pt-6 md:pt-12">
          <div className="space-y-5 border-l-4 border-white pl-4 md:space-y-10">
            <motion.div
              whileHover={{ scale: 0.99 }}
              className="flex items-center"
            >
              <CheckCircle2 size={32} />
              <h5 className="ml-4 text-lg md:text-xl">
                Hair washing & plaiting
              </h5>
            </motion.div>
            <motion.div
              whileHover={{ scale: 0.99 }}
              className="flex items-center"
            >
              <CheckCircle2 size={32} />
              <h5 className="ml-4 text-lg md:text-xl">
                Hair washing & plaiting
              </h5>
            </motion.div>
            <motion.div
              whileHover={{ scale: 0.99 }}
              className="flex items-center"
            >
              <CheckCircle2 size={32} />
              <h5 className="ml-4 text-lg md:text-xl">
                Hair washing & plaiting
              </h5>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="mt-20 flex w-full flex-col justify-between md:ml-10 md:mt-0 md:w-1/2">
        <div className="relative h-[217px] w-full">
          <Image
            fill
            style={{ objectFit: "cover", borderRadius: 16 }}
            src={
              "https://images.pexels.com/photos/3765164/pexels-photo-3765164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt=""
          />
        </div>
        <div className="">
          <p className="py-10 text-[16px]">
            We offer your beautiful facial treatments and a very comfortable
            spa. we have served more than 30 years with very professional
            workers and we have more than 200 branches spread all over the world
          </p>
          <Button className="w-full md:w-1/4">Book Now</Button>
        </div>
      </div>
    </div>
  );
};

export default TrendingServices;
