// import React from "react";

// export const App = ({
//   title = "Product Title",
//   images = [{ src: "https://example.com/image.jpg" }], // Example image URL
//   variants = [{ price: "19.99" }] // Example price
// }) => {
//   const imageSrc = images && images.length > 0 ? images[0].src : ""; // Assuming the first image is the main image
//   const price = variants && variants.length > 0 ? variants[0].price : "";

//   return (
//     <div className="product-card">
//       <img src={imageSrc} alt={title} className="product-image" />
//       <div className="product-details">
//         <h2 className="product-title">{title}</h2>
//         <p className="product-price">${price}</p>
//       </div>
//     </div>
//   );
// };
import * as React from "react"; //don't change this line
import "./index.css";

export const App = ({
  product = {
    id: "gid://shopify/Product/6792849653898",
    handle: "valentina-top-in-sage-linen",
    availableForSale: true,
    title: "Valentina Top in Sage Linen",
    description: "Beautiful spring and summer top!",
    descriptionHtml: "Beautiful spring and summer top!",
    options: [
      {
        id: "gid://shopify/ProductOption/8713669935242",
        name: "Size",
        values: ["Small", "Medium", "Large"]
      }
    ],
    priceRange: {
      maxVariantPrice: {
        amount: "50.0",
        currencyCode: "USD"
      },
      minVariantPrice: {
        amount: "50.0",
        currencyCode: "USD"
      }
    },
    featuredImage: {
      url:
        "https://cdn.shopify.com/s/files/1/0311/3962/7146/products/1G6A6902_550x825_crop_center_e98494e2-f7b6-40ec-9f48-08ab590731b0.jpg?v=1646781977",
      altText: null,
      width: 550,
      height: 825
    },
    seo: {
      description: null,
      title: null
    },
    tags: ["Spring"],
    updatedAt: "2024-02-02T23:45:11Z",
    images: [
      {
        url:
          "https://cdn.shopify.com/s/files/1/0311/3962/7146/products/1G6A6902_550x825_crop_center_e98494e2-f7b6-40ec-9f48-08ab590731b0.jpg?v=1646781977",
        altText:
          "Valentina Top in Sage Linen - 1G6A6902_550x825_crop_center_e98494e2-f7b6-40ec-9f48-08ab590731b0",
        width: 550,
        height: 825
      }
    ],
    variants: [
      {
        id: "gid://shopify/ProductVariant/40832907477130",
        title: "Small",
        availableForSale: true,
        selectedOptions: [
          {
            name: "Size",
            value: "Small"
          }
        ],
        price: {
          amount: "50.0",
          currencyCode: "USD"
        }
      },
      {
        id: "gid://shopify/ProductVariant/40832907509898",
        title: "Medium",
        availableForSale: true,
        selectedOptions: [
          {
            name: "Size",
            value: "Medium"
          }
        ],
        price: {
          amount: "50.0",
          currencyCode: "USD"
        }
      },
      {
        id: "gid://shopify/ProductVariant/40832907542666",
        title: "Large",
        availableForSale: false,
        selectedOptions: [
          {
            name: "Size",
            value: "Large"
          }
        ],
        price: {
          amount: "50.0",
          currencyCode: "USD"
        }
      }
    ]
  }
}) => {
  const [selectedVariantImg, setSelectedVariantImg] = React.useState("");

  return (
    <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <a
        className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
        href="#"
      >
        <img
          className="object-cover"
          src={product.featuredImage.url}
          alt="product image"
        />
        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
          39% OFF
        </span>
      </a>
      <div className="mt-4 px-5 pb-5">
        <a href="#">
          <h5 className="text-xl tracking-tight text-slate-900">
            {product.title}
          </h5>
        </a>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900">$449</span>
            <span className="text-sm text-slate-900 line-through">$699</span>
          </p>
          <div className="flex items-center">
            <svg
              aria-hidden="true"
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
              5.0
            </span>
          </div>
        </div>
        <a
          href="#"
          className="flex items-center justify-center rounded-md bg-gray-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          Add to cart
        </a>
      </div>
    </div>
  );
};
