import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";
import { Button } from "../ui/button";
const SocialMedia = () => {
  return (
    <div className="bg-purple-800">
      <div className="w-full items-center px-4 py-4 md:static md:mx-auto md:max-w-[1200px]  md:py-10 ">
        <div className="flex w-full flex-col-reverse items-center justify-between md:flex-row">
          <div className="pt-5 md:pt-0">
            <h3 className="font-medium text-gray-300">
              The Best Spa and Salon
            </h3>
          </div>
          <div className="flex items-center gap-4 text-gray-300">
            <Button variant="ghost" className="rounded-full" size="icon">
              <FaFacebookF size={24} />
            </Button>
            <Button variant="ghost" className="rounded-full" size="icon">
              <FaTwitter size={24} />
            </Button>
            <Button variant="ghost" className="rounded-full" size="icon">
              <FaInstagram size={24} />
            </Button>
            <Button variant="ghost" className="rounded-full" size="icon">
              <FaYoutube size={24} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
