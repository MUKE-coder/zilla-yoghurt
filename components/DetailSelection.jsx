"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";

export default function DetailSelection() {
  const [section, setSection] = useState("detail");
  function showDetail() {
    setSection("detail");
  }
  function showIngredients() {
    setSection("ingredients");
  }
  function showDirection() {
    setSection("direction");
  }

  return (
    <div className="selected-item-details">
      <div className="options">
        <p
          onClick={showDetail}
          className={section == "detail" ? "activeTab" : ""}
        >
          Detail
        </p>
        <p
          onClick={showIngredients}
          className={section == "ingredients" ? "activeTab" : ""}
        >
          Ingredients
        </p>
        <p
          onClick={showDirection}
          className={section == "direction" ? "activeTab" : ""}
        >
          Direction
        </p>
      </div>
      {section == "detail" ? (
        <div className="details">
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
              <h3>Natural Organic Yorghut</h3>
              <p>this is purified yorghut from natural milk</p>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </div>
      ) : section == "ingredients" ? (
        <div className=" ingredients">
          <h3>ingredients</h3>
          <p>this is about ingredients</p>
        </div>
      ) : (
        <div className=" direction">
          <h1>We are locate in Bugolobi </h1>
          <p>this is about ingredients</p>
        </div>
      )}
    </div>
  );
}
