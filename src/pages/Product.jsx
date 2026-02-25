import React, { useState } from "react";
import "./StorePages.css";

const fallbackImage = "https://picsum.photos/600/750?fashion";
const handleImageError = (event) => {
  event.currentTarget.src = fallbackImage;
};

const gallery = [
  "https://loremflickr.com/700/900/men,tshirt,fashion?lock=201",
  "https://loremflickr.com/700/900/tshirt,clothing,style?lock=202",
  "https://loremflickr.com/700/900/fashion,outfit,men?lock=203",
  "https://loremflickr.com/700/900/casual,streetwear,men?lock=204",
];

function ProductDetails() {
  const [selectedSize, setSelectedSize] = useState("M");
  const [mainImage, setMainImage] = useState(gallery[0]);

  return (
    <div className="page-shell py-4 py-lg-5">
      <div className="container">
        <div className="page-card p-3 p-lg-4">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-3">
                  <div className="d-flex flex-column gap-2">
                    {gallery.map((image) => (
                      <img
                        key={image}
                        src={image}
                        alt="Product thumbnail"
                        className={`product-thumb ${mainImage === image ? "active" : ""}`}
                        onClick={() => setMainImage(image)}
                        onError={handleImageError}
                      />
                    ))}
                  </div>
                </div>
                <div className="col-9">
                  <img
                    src={mainImage}
                    alt="Main product"
                    className="product-detail-main"
                    onError={handleImageError}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <span className="pill-badge">BESTSELLER</span>
              <h3 className="mt-3 mb-2 fw-bold">Men Round Neck Pure Cotton T-shirt</h3>
              <p className="mb-2 text-warning">★★★★☆ 4.2 (128 Reviews)</p>
              <h4 className="fw-bold mb-3">Rs. 1499</h4>
              <p className="text-muted">
                Lightweight premium cotton t-shirt built for all-day comfort. A wardrobe
                essential with modern fit and breathable fabric.
              </p>

              <h6 className="fw-semibold mt-4">Select Size</h6>
              <div className="d-flex gap-2 mb-4">
                {["S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    className={`btn btn-sm ${selectedSize === size ? "btn-dark" : "btn-outline-secondary"}`}
                    onClick={() => setSelectedSize(size)}
                    type="button"
                  >
                    {size}
                  </button>
                ))}
              </div>

              <button className="btn btn-dark px-4 py-2 mb-4" type="button">
                Add to Cart
              </button>

              <div className="row g-2">
                <div className="col-4">
                  <div className="mini-stat">
                    <h6>100%</h6>
                    <p>Original</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="mini-stat">
                    <h6>7 Days</h6>
                    <p>Return</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="mini-stat">
                    <h6>Free</h6>
                    <p>Shipping</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="page-card mt-4 p-4">
          <h5 className="fw-bold mb-3">Product Details</h5>
          <p className="text-muted mb-0">
            Crafted with soft combed cotton, this tee balances comfort and structure. Ideal
            for layering or standalone wear in every season.
          </p>
        </div>

        <div className="mt-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="page-title">Related Products</h4>
          </div>
          <div className="row g-3 g-lg-4">
            {[1, 2, 3, 4].map((item) => (
              <div className="col-6 col-md-3" key={item}>
                <div className="collection-product-card">
                  <img
                    src={`https://loremflickr.com/600/750/fashion,clothing,men?lock=23${item}`}
                    className="collection-product-image"
                    alt="Related product"
                    onError={handleImageError}
                  />
                  <div className="p-3">
                    <p className="mb-1 fw-semibold small">Men Casual Cotton Tee</p>
                    <p className="mb-0 fw-bold">Rs. 999</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
