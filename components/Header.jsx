import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import CategoryList from "./CategoryList";

export default function Header() {
  return (
    <section className="header-section">
      <Navbar />
      <Hero />
      <CategoryList />
    </section>
  );
}
