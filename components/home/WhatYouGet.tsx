import { Playfair_Display } from "next/font/google";
import React from "react";
const fair = Playfair_Display({ subsets: ["latin"] });

const benefits = [
  {
    title: "Convenience",
    subtitle:
      "Our at-home services eliminate the need to travel to a salon or spa, saving your time and effort. You can enjoy the services in the comfort of your own home at your preferred time",
  },
  {
    title: "Customized Solutions",
    subtitle:
      "Our diverse selection of salon and spa services caters to a variety of beauty and wellness needs. Whether you seek a revitalizing massage or a rejuvenating facial, our offerings can be customized to meet your specific desires and goals",
  },
  {
    title: "Exceptional Care",
    subtitle:
      "We prioritize your satisfaction and provide exceptional customer care every step of the way. Our friendly and attentive staff are dedicated to ensuring your comfort, addressing any concerns promptly, and making your visit a truly memorable one",
  },
];

const WhatYouGet = () => {
  return (
    <div className="px-4 pt-20 md:py-20">
      <div className="flex w-full md:w-1/2">
        <div className="">
          <h4 className="">BENEFITS</h4>
          <h3
            className={`${fair.className} text-3xl font-bold leading-10 md:text-[40px]`}
          >
            What do you get when you use our services?
          </h3>
        </div>
      </div>
      <div className="grid gap-10 py-10 md:grid-cols-3 md:py-20">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="rounded-2xl border-2 border-purple-100 p-10 px-12 py-14  hover:border-purple-400"
          >
            <div className="mb-6 items-center border-l-8 border-purple-500 pl-4">
              <h3 className={`${fair.className} text-2xl`}>{benefit.title}</h3>
            </div>
            <p className="text-[14px]">{benefit.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatYouGet;
