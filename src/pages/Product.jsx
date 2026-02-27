import React, { useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { products } from "../data/products";
import "./StorePages.css";

const fallbackImage = "https://picsum.photos/600/750?fashion";
const handleImageError = (event) => {
  event.currentTarget.src = fallbackImage;
};

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = useMemo(
    () => products.find((item) => item.id === Number(id)) || products[0],
    [id],
  );

  const gallery = useMemo(
    () => product.gallery || [product.image, product.image, product.image, product.image],
    [product],
  );

  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const mainImage = gallery[selectedImageIndex] || gallery[0];

  const handleAddToCart = () => {
    addToCart(product, 1, selectedSize);
    navigate("/cart");
  };

  return (
    <div className="page-shell py-4 py-lg-5">
      <div className="container">
        <div className="page-card p-3 p-lg-4 reveal-on-scroll">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-3">
                  <div className="d-flex flex-column gap-2">
                    {gallery.map((image, index) => (
                      <img
                        key={`${image}-${index}`}
                        src={image}
                        alt="Product thumbnail"
                        className={`product-thumb ${mainImage === image ? "active" : ""}`}
                        onClick={() => setSelectedImageIndex(index)}
                        onError={handleImageError}
                      />
                    ))}
                  </div>
                </div>
                <div className="col-9">
                  <img
                    src={mainImage}
                    alt={product.name}
                    className="product-detail-main"
                    onError={handleImageError}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <span className="pill-badge">BESTSELLER</span>
              <h3 className="mt-3 mb-2 fw-bold">{product.name}</h3>
              <p className="mb-2 text-warning">4.2 / 5 (128 Reviews)</p>
              <h4 className="fw-bold mb-3">Rs. {product.price}</h4>
              <p className="text-muted">{product.description}</p>

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

              <button className="btn btn-dark px-4 py-2 mb-4" type="button" onClick={handleAddToCart}>
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

        <div className="page-card mt-4 p-4 reveal-on-scroll">
          <h5 className="fw-bold mb-3">Product Details</h5>
          <p className="text-muted mb-0">
            Crafted with soft combed cotton, this product balances comfort and structure.
            Ideal for layering or standalone wear in every season.
          </p>
        </div>

        <div className="mt-4 reveal-on-scroll">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="page-title">Related Products</h4>
          </div>
          <div className="row g-3 g-lg-4">
            {products
              .filter((item) => item.id !== product.id)
              .slice(0, 4)
              .map((item) => (
                <div className="col-6 col-md-3 reveal-on-scroll" key={item.id}>
                  <Link to={`/product/${item.id}`} className="collection-product-card d-block">
                    <img
                      src={item.image}
                      className="collection-product-image"
                      alt={item.name}
                      onError={handleImageError}
                    />
                    <div className="p-3">
                      <p className="mb-1 fw-semibold small">{item.name}</p>
                      <p className="mb-0 fw-bold">Rs. {item.price}</p>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
