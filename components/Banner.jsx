import React from "react";
import Link from "next/link";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import Socialicons from "./Socialicons";
export default function Banner() {
  return (
    <div className="banner">
      <div className="cta-links">
        <Link href="#" className="call-link">
          <TfiHeadphoneAlt className="icon" />
          <span>0708904404</span>
        </Link>
        <Socialicons />
      </div>
    </div>
  );
}
