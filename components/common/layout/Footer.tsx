import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import React from "react";
const fair = Playfair_Display({ subsets: ["latin"] });
const sections = [
  {
    title: "About Us",
    links: [
      {
        label: "Company Overview",
        url: "/about",
      },
      {
        label: "Our Team",
        url: "/team",
      },
      {
        label: "Testimonials",
        url: "/testimonials",
      },
    ],
  },
  {
    title: "Our Products",
    links: [
      {
        label: "Hair Care",
        url: "/hair-care",
      },
      {
        label: "Skin Care",
        url: "/skin-care",
      },
      {
        label: "Spa Treatments",
        url: "/spa-treatments",
      },
    ],
  },
  {
    title: "Our Principles",
    links: [
      {
        label: "Quality Service",
        url: "/quality-service",
      },
      {
        label: "Customer Satisfaction",
        url: "/customer-satisfaction",
      },
      {
        label: "Relaxation and Wellness",
        url: "/relaxation-wellness",
      },
    ],
  },
  {
    title: "Info",
    links: [
      {
        label: "Contact Us",
        url: "/contact",
      },
      {
        label: "Location",
        url: "/location",
      },
      {
        label: "FAQ",
        url: "/faq",
      },
    ],
  },
];

const Footer = () => {
  return (
    <div className="bg-purple-700 py-14 text-white">
      <div className="grid grid-cols-2 gap-10 px-4 md:mx-auto md:max-w-[1200px] md:grid-cols-4">
        {sections.map((section, index) => (
          <div key={index} className="flex flex-col gap-3 md:gap-6">
            <div className={`${fair.className} text-lg font-bold`}>
              {section.title}
            </div>
            <ul className="flex flex-col gap-2 md:gap-5">
              {section.links.map((link, index) => (
                <Link key={index} href={link.url}>
                  <li>{link.label}</li>
                </Link>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
