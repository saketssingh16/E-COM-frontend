import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./StorePages.css";

const fallbackImage = "https://picsum.photos/600/750?fashion";
const handleImageError = (event) => {
  event.currentTarget.src = fallbackImage;
};

const products = [
  { id: 1, name: "Women Solid Casual Top", price: 1299, category: "Women", image: "https://loremflickr.com/600/750/women,top,fashion?lock=101" },
  { id: 2, name: "Men Printed Oversized Tee", price: 999, category: "Men", image: "https://loremflickr.com/600/750/men,tshirt,fashion?lock=102" },
  { id: 3, name: "Girls Party Dress", price: 1499, category: "Kids", image: "https://loremflickr.com/600/750/kids,dress,fashion?lock=103" },
  { id: 4, name: "Men Slim Fit Shirt", price: 1399, category: "Men", image: "https://loremflickr.com/600/750/men,shirt,style?lock=104" },
  { id: 5, name: "Women Wide Leg Jeans", price: 1899, category: "Women", image: "https://loremflickr.com/600/750/women,jeans,fashion?lock=105" },
  { id: 6, name: "Kids Hoodie Set", price: 1199, category: "Kids", image: "https://loremflickr.com/600/750/kids,hoodie,clothing?lock=106" },
  { id: 7, name: "Women Co-ord Set", price: 2299, category: "Women", image: "https://loremflickr.com/600/750/women,coord,style?lock=107" },
  { id: 8, name: "Men Denim Jacket", price: 2499, category: "Men", image: "https://loremflickr.com/600/750/men,denim,jacket?lock=108" },
];

function Collection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== "All") {
      result = result.filter((product) => product.category === selectedCategory);
    }

    if (sortBy === "low") result.sort((a, b) => a.price - b.price);
    if (sortBy === "high") result.sort((a, b) => b.price - a.price);

    return result;
  }, [selectedCategory, sortBy]);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal-on-scroll:not(.is-visible)");
    if (!elements.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -30px 0px",
      },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [filteredProducts, selectedCategory, sortBy]);

  return (
    <div className="page-shell py-4 py-lg-5">
      <div className="container">
        <div className="collection-banner page-card p-4 p-md-5 mb-4 reveal-on-scroll">
          <p className="pill-badge mb-3">FRESH DROP</p>
          <h2 className="page-title mb-2">Curated Styles for Every Mood</h2>
          <p className="section-subtitle mb-0">
            Explore fashion-forward picks across men, women, and kids with easy filtering.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-lg-3">
            <div className="page-card p-3 p-md-4 reveal-on-scroll">
              <h6 className="fw-bold mb-3">Filters</h6>
              <p className="small text-muted mb-2">Category</p>
              {["All", "Men", "Women", "Kids"].map((category) => (
                <div key={category} className="form-check mb-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="category"
                    id={category}
                    checked={selectedCategory === category}
                    onChange={() => setSelectedCategory(category)}
                  />
                  <label className="form-check-label" htmlFor={category}>
                    {category}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-9">
            <div className="d-flex flex-wrap justify-content-between align-items-center mb-3 reveal-on-scroll">
              <h4 className="page-title">All Collections</h4>
              <select
                className="form-select w-auto"
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
              >
                <option value="default">Sort: Default</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
              </select>
            </div>

            <div className="row g-3 g-lg-4">
              {filteredProducts.map((product) => (
                <div className="col-6 col-md-4 col-xl-3 reveal-on-scroll" key={product.id}>
                  <Link to="/product" className="collection-product-card d-block">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="collection-product-image"
                      onError={handleImageError}
                    />
                    <div className="p-3">
                      <p className="mb-1 fw-semibold small">{product.name}</p>
                      <p className="mb-0 fw-bold">Rs. {product.price}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
