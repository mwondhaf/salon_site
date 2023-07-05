import { Nunito, Playfair_Display } from "next/font/google";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";

const fair = Playfair_Display({ subsets: ["latin"] });
const nunito = Nunito({ subsets: ["latin"] });

const cards = [
  {
    title: "At-Home Hair Styling",
    description:
      "Salon-quality hairstyling delivered to your door for a convenient and polished look without leaving home",
    image:
      "https://images.pexels.com/photos/5301531/pexels-photo-5301531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Manicures and Pedicures",
    description:
      "Luxurious nail care at your fingertips with our manicure and pedicure services at your doorstep",
    image:
      "https://images.pexels.com/photos/6345207/pexels-photo-6345207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Relaxing Spa",
    description:
      "Unwind and rejuvenate with serene at-home spa, as our skilled therapists bring tranquility and relief right to you",
    image:
      "https://images.pexels.com/photos/8313254/pexels-photo-8313254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

function Comfort() {
  return (
    <div className="px-4 py-20">
      <div className="flex w-full py-10 md:w-2/3 md:py-20">
        <div className="h-36 border-l-8 border-purple-500" />
        <div className="pl-4">
          <h3
            className={`${fair.className} text-3xl font-bold leading-10 md:text-[40px]`}
          >
            Exceeding Expectations with Every Service
          </h3>
          <p className="pt-4 text-[16px]">
            We make customers happy by exceeding expectations through
            exceptional quality, personalized service, attentive care, going the
            extra mile, and continuous improvement. Here are some of our
            services
          </p>
        </div>
      </div>
      <div className="grid gap-9 md:grid-cols-3">
        {cards.map((card, index) => (
          <div
            className="items-center justify-center rounded-2xl border-2 border-purple-100 p-10 hover:cursor-pointer hover:border-purple-400"
            key={index}
          >
            <div className="relative h-[298px]">
              <Image
                fill
                style={{ objectFit: "cover", borderRadius: 8 }}
                src={card.image}
                alt=""
              />
            </div>
            <div className="pt-10">
              <div
                className={`${fair.className} text-center text-2xl  font-bold text-purple-500`}
              >
                {card.title}
              </div>
              <div className={`${nunito.className} pt-4 text-center text-sm`}>
                {card.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comfort;
