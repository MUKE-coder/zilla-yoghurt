import Link from "next/link";
import React from "react";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { BiLogoFacebook, BiLogoInstagram } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import siteConfig from "@/utils/siteConfig";
import Image from "next/image";

export default function Navbar() {
  return (
    <header>
      <Link href="/" className="logo">
        <Image
          src={siteConfig.logo}
          alt={siteConfig.companyName}
          height={60}
          width={95.72}
        />
      </Link>
      <nav>
        <Link href="#">Zilla Flavored Milk</Link>
        <Link href="#">Strawberry Yoghurt</Link>
        <Link href="#">Vanilla Yoghurt</Link>
      </nav>
      <div className="cta-links">
        <Link href="#" className="call-link">
          <TfiHeadphoneAlt className="icon" />
          <span>0708904404</span>
        </Link>
        <Link href="#" className="cta-link">
          <BiLogoFacebook className="icon" />
        </Link>
        <Link href="#" className="cta-link">
          <BiLogoInstagram className="icon" />
        </Link>
        <Link href="#" className="cta-link">
          <FaWhatsapp className="icon" />
        </Link>
      </div>
    </header>
  );
}
