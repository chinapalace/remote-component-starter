import React from "react";
import { Title } from "./components/Title";

export const App = ({
  title = "Product Title",
  images = [{ src: "https://example.com/image.jpg" }], // Example image URL
  variants = [{ price: "19.99" }] // Example price
}) => {
  const imageSrc = images && images.length > 0 ? images[0].src : ""; // Assuming the first image is the main image
  const price = variants && variants.length > 0 ? variants[0].price : "";

  return (
    <div className="product-card">
      <img src={imageSrc} alt={title} className="product-image" />
      <div className="product-details">
        <h2 className="product-title">{title}</h2>
        <p className="product-price">${price}</p>
      </div>
    </div>
  );
};
