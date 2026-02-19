import React, { useState } from "react";

function ProductDetails() {
  const [selectedSize, setSelectedSize] = useState("M");

  return (
    <div className="container py-5">
      <div className="row">
        {/* LEFT SIDE - IMAGES */}
        <div className="col-md-6">
          <div className="row">
            {/* Thumbnails */}
            <div className="col-3 d-flex flex-column gap-3">
              {[1, 2, 3, 4].map((img) => (
                <img
                  key={img}
                  src="https://via.placeholder.com/80x100"
                  alt="thumb"
                  className="img-fluid border"
                  style={{ cursor: "pointer" }}
                />
              ))}
            </div>

            {/* Main Image */}
            <div className="col-9">
              <img
                src="https://via.placeholder.com/500x600"
                alt="product"
                className="img-fluid"
              />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - PRODUCT INFO */}
        <div className="col-md-6">
          <h5>Men Round Neck Pure Cotton T-shirt</h5>

          <div className="mb-2 text-warning">★★★★☆</div>

          <h4 className="mb-3">$149</h4>

          <p className="text-muted small">
            A lightweight, stylish cotton t-shirt designed for comfort and
            everyday wear.
          </p>

          {/* SIZE SELECT */}
          <h6 className="mt-4">Select Size</h6>

          <div className="d-flex gap-2 mb-4">
            {["S", "M", "L", "XL"].map((size) => (
              <button
                key={size}
                className={`btn btn-sm ${
                  selectedSize === size ? "btn-dark" : "btn-outline-secondary"
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>

          <button className="btn btn-dark px-4">ADD TO CART</button>

          <hr className="my-4" />

          <p className="text-muted small">
            100% Original product.
            <br />
            Cash on delivery available.
            <br />
            Easy return and exchange within 7 days.
          </p>
        </div>
      </div>

      {/* DESCRIPTION TABS */}
      <div className="mt-5">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <button className="nav-link active">Description</button>
          </li>
          <li className="nav-item">
            <button className="nav-link">Reviews (12)</button>
          </li>
        </ul>

        <div className="border p-4">
          <p className="text-muted small">
            This premium cotton t-shirt is crafted for everyday comfort and
            durability. Designed with a modern fit and breathable fabric.
          </p>
        </div>
      </div>

      {/* RELATED PRODUCTS */}
      <div className="mt-5">
        <h6 className="fw-light mb-4">RELATED PRODUCTS —</h6>

        <div className="row">
          {[1, 2, 3, 4].map((item) => (
            <div className="col-md-3 mb-4" key={item}>
              <div className="card border-0 text-center">
                <img
                  src="https://via.placeholder.com/300x350"
                  className="card-img-top"
                  alt="related"
                />
                <div className="card-body">
                  <h6 className="card-title small">
                    Men Casual Cotton T-shirt
                  </h6>
                  <p className="text-muted small">$99</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
