import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";
import { BsSave2 } from "react-icons/bs";
import { RiMovie2Line } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import { MdDocumentScanner } from "react-icons/md";
export default function page() {
  return (
    <div className="detailed-page-hero-section">
      <div className="left-detailed-hero">
        <h1>left</h1>
      </div>
      <div className="mid-detailed-hero">
        <h1>Yorgut</h1>
        <p>
          Lorem lorem lorem ehsks shdna ahdi a Lorem lorem lorem ehsks shdna
          ahdi aLorem lorem lorem ehsks shdna ahdi ad bdjhdmi Lorem lorem lorem
          ehsks shdna ahdi a Lorem lorem lorem ehsks shdna ahdi aLorem lorem
          lorem ehsks shdna ahdi ad bdjhdmi{" "}
        </p>
        <div className="detailedPagePricing">
          <h5 className="price">$5036</h5>
          <h5 className="discount-Code">
            <MdDocumentScanner className="discountIcon" /> Add discount Code
          </h5>
        </div>
        <div className="selected-item-details">
          <div className="top-item-details">
            <p className="activeDetail">Detail</p>
            <p>Ingrediates</p>
            <p>Directions</p>
          </div>
          <div className="bottom-item-details">
            <div className="details-option">
              <div className="detail-image">
                <Image
                  src={"/products/yoghurt-cup.PNG"}
                  alt=""
                  width={80}
                  height={100}
                />
              </div>
              <div className="detail-infor">
                <h2>Natural Organic Yorghut</h2>
                <p>
                  lorem The requested resource isn't a valid image for
                  /images/yoghurt-cup-2.PNG received text/html; charset=utf-8 -
                  wait compiling...
                </p>
                <h2>Natural Organic Yorghut</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right-detailed-hero">
        <div className="cta cta1">
          <BsSave2 className="ctaBtn" />
          <p>save</p>
        </div>
        <div className="cta cta2">
          <RiMovie2Line className="ctaBtn" />
          <p>Intro</p>
        </div>
        <div className="cta cta2 active-cta ">
          <AiOutlinePlus className="ctaBtn " />
          <p>Purchase</p>
        </div>
      </div>
    </div>
  );
}
