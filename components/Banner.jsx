import React from "react";
import Link from "next/link";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { BiLogoFacebook, BiLogoInstagram } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
export default function Banner() {
  return (
    <div className="banner">
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
    </div>
  );
}
