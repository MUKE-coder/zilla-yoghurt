"use client";
import React from "react";
import cateImage from "../public/products/yoghurt-cup.png";
import Link from "next/link";
import Image from "next/image";
export default function CategoryList({ data }) {
  // console.log(data);
  return (
    <section className="category-section">
      <div className=" cat-container">
        {data.map((category) => {
          return (
            <Link href="#" className="category-card">
              <div className="bg"></div>
              <div className="cat-image">
                <Image src={category.image} alt="this image" fill />
              </div>
              <h2 className="cat-title">{category.title}</h2>
            </Link>
          );
        })}
        {/* <Link href="#" className="category-card">
          <div className="bg"></div>
          <div className="cat-image">
            <Image src={cateImage} alt="this image" fill />
          </div>
          <h2 className="cat-title">Zilla Yoghurt</h2>
        </Link>
        <Link href="#" className="category-card">
          <div className="cat-image">
            <Image src={cateImage} alt="this image" fill />
          </div>
          <h2 className="cat-title">Zilla Yoghurt</h2>
        </Link>
        <Link href="#" className="category-card">
          <div className="cat-image">
            <Image src={cateImage} alt="this image" fill />
          </div>
          <h2 className="cat-title">Zilla Yoghurt</h2>
        </Link> */}
      </div>
    </section>
  );
}
