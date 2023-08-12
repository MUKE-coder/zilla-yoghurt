import React from "react";
import cateImage from "../public/products/yoghurt-cup.png";
import Link from "next/link";
import Image from "next/image";
export default function CategoryList() {
  return (
    <section className="category-section">
      <div className="bg"></div>
      <div className="grid-col-3 cat-container">
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
        </Link>
        <Link href="#" className="category-card">
          <div className="cat-image">
            <Image src={cateImage} alt="this image" fill />
          </div>
          <h2 className="cat-title">Zilla Yoghurt</h2>
        </Link>
      </div>
    </section>
  );
}
