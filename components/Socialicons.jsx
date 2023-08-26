import Link from "next/link";
import React from "react";

import { BiLogoFacebook, BiLogoInstagram } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
export default function Socialicons() {
  return (
    <>
      <Link href="#" className="cta-link">
        <BiLogoFacebook className="icon" />
      </Link>
      <Link href="#" className="cta-link">
        <BiLogoInstagram className="icon" />
      </Link>
      <Link href="#" className="cta-link">
        <FaWhatsapp className="icon" />
      </Link>
    </>
  );
}
