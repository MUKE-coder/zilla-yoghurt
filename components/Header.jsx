import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import CategoryList from "./CategoryList";
import getProducts from "@/app/api/route";
import getCategories from "@/app/api/categories/route";

export default function Header() {
  const products = getProducts();
  const categories = getCategories();

  // console.log(categories);
  return (
    <section className="header-section">
      {/* <Navbar /> */}
      <Hero productData={products} />
      <CategoryList data={categories} />
    </section>
  );
}
