import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";
import { BsSave2 } from "react-icons/bs";
import { RiMovie2Line } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import { MdDocumentScanner } from "react-icons/md";
import getProducts from "@/app/api/route";

export default function page({ params: { slug } }) {
  const products = getProducts();
  const product = products.find((product) => {
    return product.slug == slug;
  });

  const productId = product.id;
  const catId = product.cat_id;
  const similarProduct = products.filter((product) => product.cat_id == catId);
  console.log(similarProduct);

  const similarProducts = similarProduct.filter(
    (product) => product.id != productId
  );
  // console.log(similarProducts);
  return (
    <>
      <div className="detailed-page-hero-section">
        <div className="left-detailed-hero">
          <Image src={product.image} alt="" width={300} height={300} />
        </div>
        <div className="mid-detailed-hero">
          <h1>{product.slug}</h1>

          <p>{product.detailed_description}</p>
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
                    /images/yoghurt-cup-2.PNG received text/html; charset=utf-8
                    - wait compiling...
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
      <div className="similarProducts">
        <h1>similarProducts</h1>
        <div className="productsWrapper">
          {similarProducts.map((product) => {
            return (
              <div className="similar-prod">
                <div className="prod-card">
                  <Image src={product.image} alt="" width={100} height={100} />
                  <h3>{product.title}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
