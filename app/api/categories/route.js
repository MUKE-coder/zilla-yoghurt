import React from "react";
import fs from "fs";
import path from "path";
export default function getCategories() {
  const filePath = path.join(process.cwd(), "categories.json");
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const categories = JSON.parse(fileContent);
  return categories;
}
