import React from "react";
import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";
export default function getProducts() {
  const filePath = path.join(process.cwd(), "products.json");
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const products = JSON.parse(fileContent);
  return products;
}
