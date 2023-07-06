"use client";
import React, { useState } from "react";
import { Playfair_Display } from "next/font/google";
import SingleTestimony from "../common/home/testimonies/SingleTestimony";
import { MoveLeft, MoveRight } from "lucide-react";
import { motion } from "framer-motion";

const fair = Playfair_Display({ subsets: ["latin"] });

const reviews = [
  {
    name: "Sarah D.",
    review:
      "I had the most amazing experience with the at-home salon service! The stylist was extremely professional and talented. She transformed my dull hair into a stunning masterpiece. The convenience of having the salon come to my house was incredible. I highly recommend their services to anyone looking for a top-notch salon experience in the comfort of their own home!",
    photo_url:
      "https://images.pexels.com/photos/3189024/pexels-photo-3189024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Ritah. S",
    review:
      "I recently booked an at-home salon appointment for a haircut and color, and I couldn't be happier with the results. The stylist was not only skilled but also very friendly and attentive to my preferences. She took her time to understand what I wanted and executed it flawlessly. The entire experience was relaxing and enjoyable. I will definitely be booking their services again!",
    photo_url:
      "https://images.pexels.com/photos/3290235/pexels-photo-3290235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Emily R.",
    review:
      "I was hesitant to try an at-home salon service, but I'm so glad I did! The stylist arrived with all the necessary equipment and products, creating a professional setup in my living room. She gave me a fabulous manicure and pedicure, paying great attention to detail. The quality of service was outstanding, and I felt pampered throughout. I highly recommend their at-home salon services for a luxurious and convenient experience!",
    photo_url:
      "https://images.pexels.com/photos/7624816/pexels-photo-7624816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Lisa S.",
    review:
      "I had a fantastic experience with the at-home salon service. The esthetician was incredibly knowledgeable and skillful in providing a rejuvenating facial. She used high-quality products and customized the treatment according to my skin type. The convenience of having a spa-like experience at home was unbeatable. I felt refreshed and glowing afterward. I can't wait to book their services again!",
    photo_url:
      "https://images.pexels.com/photos/1098759/pexels-photo-1098759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "David L.",
    review:
      "The at-home salon service exceeded all my expectations. The hairstylist arrived punctually and set up a mini salon in my bedroom. She gave me a stunning updo for a special event, and I received countless compliments throughout the night. Not only was the stylist talented, but she also made the whole experience enjoyable with her warm personality. I will definitely be a repeat customer!",
    photo_url:
      "https://images.pexels.com/photos/7389077/pexels-photo-7389077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const Testimonial = () => {
  let [reviewA, setReviewA] = useState(0);
  const [reviewB, setReviewB] = useState(1);
  const [isAnimate, setIsAnimating] = useState<boolean>(false);

  const handleNext = () => {
    if (reviewB !== reviews.length - 1) {
      handleAnimate();
      setReviewA(reviewA + 1);
      setReviewB(reviewB + 1);
    }
  };

  const handlePrev = () => {
    if (reviewA !== 0) {
      handleAnimate();
      setReviewA(reviewA - 1);
      setReviewB(reviewB - 1);
    }
  };

  const handleAnimate = () => {
    setIsAnimating(true);
  };

  return (
    <div className="justify-between gap-20 px-4 md:flex md:py-20">
      <div className="w-full md:w-1/2">
        <div className="">
          <h1 className={`${fair.className} pb-0 text-[80px] font-bold`}>“</h1>
          <h3
            className={`${fair.className} -mt-14 ml-8 text-3xl font-bold leading-10 md:text-[40px]`}
          >
            What our customers are saying!
          </h3>
        </div>
        <SingleTestimony review={reviews[reviewA]} isAnimating={isAnimate} />
      </div>
      <div className="flex w-full flex-col items-center justify-between md:w-1/2">
        <SingleTestimony review={reviews[reviewB]} isAnimating={isAnimate} />
        <div className="flex items-center gap-4 pt-10">
          <motion.div
            whileHover={{ scale: 1.5 }}
            className="hover:cursor-pointer"
            onClick={handlePrev}
          >
            <MoveLeft size={40} />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.5 }}
            onClick={handleNext}
            className="hover:cursor-pointer"
          >
            <MoveRight size={40} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
