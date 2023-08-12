"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import heroImage from "../public/products/yoghurt-cup.png";
export default function Hero() {
  const data = [
    {
      bgImage: "/products/yoghurt-cup.png",
      title: "Zilla Yoghurt",
      desc: "lorem ipsum 1",
    },
    {
      bgImage: "/products/yoghurt-cup-2.png",
      title: "Fresh Yoghurt",
      desc: "lorem ipsum 2",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="hero-section">
      <div className="left">
        <h2 className="hero-title">Zilla Sweet Yoghurt</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
          esse.
        </p>

        <Link href="#" className="theme-btn">
          Buy Now
        </Link>
      </div>
      <div className="middle"></div>
      <div className="right">
        <div className="hero-card">
          <div className="hero-icon">
            <Image src={heroImage} alt="side cup" fill />
          </div>
          <div className="card-text">
            <h4 className="title">Sippy Cards</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis,
              quam?
            </p>
          </div>
        </div>
        <div className="hero-card">
          <div className="hero-icon">
            <Image src={heroImage} alt="side cup" fill />
          </div>
          <div className="card-text">
            <h4 className="title">Sippy Cards</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis,
              quam?
            </p>
          </div>
        </div>
        <div className="hero-card">
          <div className="hero-icon">
            <Image src={heroImage} alt="side cup" fill />
          </div>
          <div className="card-text">
            <h4 className="title">Sippy Cards</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis,
              quam?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
