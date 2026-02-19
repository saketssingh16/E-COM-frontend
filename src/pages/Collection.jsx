import React, { useState } from "react";
import { Link } from "react-router-dom";

function Collection() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const products = Array.from({ length: 32 }, (_, i) => ({
    id: i + 1,
    name: "Women Round Neck Cotton Top",
    price: 89,
    image: "https://via.placeholder.com/300x350",
  }));

  return (
    <div className="container py-5">
      <div className="row">
        {/* FILTER SIDEBAR */}
        <div className="col-md-3">
          <h6 className="mb-3">FILTERS</h6>

          {/* CATEGORY */}
          <div className="mb-4">
            <h6 className="small fw-bold">Category</h6>

            {["Men", "Women", "Kids"].map((cat) => (
              <div key={cat} className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="category"
                  onChange={() => setSelectedCategory(cat)}
                />
                <label className="form-check-label small">{cat}</label>
              </div>
            ))}
          </div>

          {/* PRICE */}
          <div className="mb-4">
            <h6 className="small fw-bold">Price</h6>

            <div className="form-check">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label small">$0 - $50</label>
            </div>

            <div className="form-check">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label small">$50 - $100</label>
            </div>
          </div>
        </div>

        {/* PRODUCTS GRID */}
        <div className="col-md-9">
          <div className="d-flex justify-content-between mb-4">
            <h6>ALL COLLECTIONS</h6>

            <select className="form-select w-auto">
              <option>Sort by: Default</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>

          <div className="row">
            {products.map((product) => (
              <div className="col-md-3 mb-4" key={product.id}>
                <div className="card border-0">
                  <Link to="/product">
                    <img
                      src={product.image}
                      className="card-img-top"
                      alt="product"
                    />
                  </Link>

                  <div className="card-body text-center">
                    <h6 className="card-title small">{product.name}</h6>
                    <p className="text-muted small">${product.price}</p>
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

export default Collection;
