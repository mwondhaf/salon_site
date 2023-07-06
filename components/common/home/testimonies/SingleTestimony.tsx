"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import React, { FC } from "react";

const fair = Playfair_Display({ subsets: ["latin"] });

interface Props {
  review: { photo_url: string; name: string; review: string };
  isAnimating: boolean;
}

const SingleTestimony: FC<Props> = ({ review, isAnimating }) => {
  return (
    <div className="">
      <div className="relative mt-12 flex w-full justify-center rounded-2xl bg-purple-200 pt-5 md:mt-24">
        <div
          className={`${fair.className} absolute right-5 top-0 -mt-10 h-[100px] w-[100px] rounded-lg bg-purple-500 text-center text-[80px] font-bold md:right-24`}
        >
          “
        </div>
        <AnimatePresence mode="popLayout">
          <motion.div
            key={review.name}
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: 130, opacity: 0.3 }}
            transition={{ duration: 0.5 }}
            className="relative h-[354px] w-[275px]"
          >
            <Image
              style={{
                objectFit: "cover",
                borderTopRightRadius: 8,
                borderTopLeftRadius: 8,
                zIndex: 5,
              }}
              fill
              // height={354}
              // width={275}
              alt=""
              src={review.photo_url}
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <motion.div
        key={review.name}
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: 130, opacity: 0.3 }}
        transition={{ duration: 0.5 }}
        className=""
      >
        <h4 className={`${fair.className} pb-4 pt-10 text-2xl font-bold`}>
          {review.name}
        </h4>
        <p className="line-clamp-5 text-[14px]">{review.review}</p>
      </motion.div>
    </div>
  );
};

export default SingleTestimony;
