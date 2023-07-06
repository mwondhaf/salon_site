import Header from "@/components/common/layout/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import SocialMedia from "@/components/home/SocialMedia";
import Footer from "@/components/common/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <SocialMedia />
        <Footer />
      </body>
    </html>
  );
}
