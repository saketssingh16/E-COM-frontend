import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const topProducts = [
  {
    id: 1,
    name: "Men Solid Crew T-Shirt",
    price: 899,
    image: "https://source.unsplash.com/700x900/?mens-fashion,tshirt",
  },
  {
    id: 2,
    name: "Women Linen Summer Dress",
    price: 1599,
    image: "https://source.unsplash.com/700x900/?women-fashion,dress",
  },
  {
    id: 3,
    name: "Unisex Classic Sneakers",
    price: 2199,
    image: "https://source.unsplash.com/700x900/?sneakers,shoes",
  },
  {
    id: 4,
    name: "Minimal Everyday Backpack",
    price: 1899,
    image: "https://source.unsplash.com/700x900/?backpack,fashion",
  },
  {
    id: 5,
    name: "Oversized Graphic Hoodie",
    price: 1799,
    image: "https://source.unsplash.com/700x900/?hoodie,fashion",
  },
  {
    id: 6,
    name: "Slim Fit Denim Jacket",
    price: 2499,
    image: "https://source.unsplash.com/700x900/?denim,jacket",
  },
  {
    id: 7,
    name: "Women Handbag Collection",
    price: 1999,
    image: "https://source.unsplash.com/700x900/?handbag,style",
  },
  {
    id: 8,
    name: "Streetwear Cargo Pants",
    price: 1699,
    image: "https://source.unsplash.com/700x900/?cargo,pants",
  },
];

function Home() {
  return (
    <div className="home-page">
      <section className="home-hero container py-4 py-lg-5">
        <div className="row g-3 g-lg-4">
          <div className="col-lg-8">
            <div className="home-hero-main p-4 p-md-5">
              <span className="hero-pill">TRENDING NOW</span>
              <h1 className="hero-title mt-3">Fashion That Fits Your Everyday Mood</h1>
              <p className="hero-subtitle mt-3">
                Discover fresh drops, elevated basics, and best-selling styles curated
                for workdays, weekends, and everything in between.
              </p>
              <div className="d-flex flex-wrap gap-2 mt-4">
                <Link to="/collection" className="btn btn-dark px-4">
                  Shop Collection
                </Link>
                <Link to="/about" className="btn btn-outline-dark px-4">
                  Our Story
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="home-promo-grid">
              <div className="promo-card">
                <img
                  src="https://source.unsplash.com/500x500/?fashion-sale"
                  alt="Sale promo"
                />
                <div className="promo-overlay">
                  <p className="mb-1">Flash Deal</p>
                  <h6 className="mb-0">Up to 50% OFF</h6>
                </div>
              </div>
              <div className="promo-card">
                <img
                  src="https://source.unsplash.com/500x500/?new-arrivals,clothing"
                  alt="New arrivals"
                />
                <div className="promo-overlay">
                  <p className="mb-1">Just In</p>
                  <h6 className="mb-0">New Arrivals</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-4">
        <div className="row g-3">
          {[
            { title: "Women", img: "https://source.unsplash.com/500x500/?women,outfit" },
            { title: "Men", img: "https://source.unsplash.com/500x500/?men,outfit" },
            { title: "Footwear", img: "https://source.unsplash.com/500x500/?shoes,fashion" },
            { title: "Accessories", img: "https://source.unsplash.com/500x500/?accessories,fashion" },
          ].map((item) => (
            <div className="col-6 col-md-3" key={item.title}>
              <Link to="/collection" className="category-card d-block">
                <img src={item.img} alt={item.title} />
                <span>{item.title}</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-4">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <h4 className="section-title mb-0">Top Picks For You</h4>
          <Link to="/collection" className="view-all-link">
            View all
          </Link>
        </div>

        <div className="row g-3 g-lg-4">
          {topProducts.map((product) => (
            <div className="col-6 col-md-4 col-lg-3" key={product.id}>
              <Link to="/product" className="product-card d-block">
                <div className="product-image-wrap">
                  <img src={product.image} className="product-image" alt={product.name} />
                </div>
                <div className="p-3">
                  <p className="product-name mb-1">{product.name}</p>
                  <p className="product-price mb-0">Rs. {product.price}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-4">
        <div className="value-strip row g-3 text-center">
          <div className="col-md-4">
            <div className="value-item">
              <i className="bi bi-truck"></i>
              <p className="mb-0">Free shipping over Rs. 999</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="value-item">
              <i className="bi bi-shield-check"></i>
              <p className="mb-0">100% secure payments</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="value-item">
              <i className="bi bi-arrow-repeat"></i>
              <p className="mb-0">Easy 7-day return policy</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container pt-2 pb-5">
        <div className="newsletter-box text-center p-4 p-md-5">
          <h5 className="mb-2">Get 20% OFF on Your First Order</h5>
          <p className="text-muted mb-3">Join our mailing list for offers, drops, and style edits.</p>
          <div className="newsletter-form mx-auto">
            <input type="email" className="form-control" placeholder="Enter your email" />
            <button className="btn btn-dark">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
