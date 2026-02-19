import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const products = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    name: "Men Round Neck Cotton T-shirt",
    price: 89,
    image: "https://via.placeholder.com/300x350",
  }));

  return (
    <div>
      {/* ================= HERO SECTION ================= */}
      <section className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="text-muted">Our Bestsellers</p>
            <h2 className="fw-light mb-3">
              Latest <br /> Arrivals
            </h2>
            <Link to="/collection" className="btn btn-dark">
              SHOP NOW
            </Link>
          </div>

          <div className="col-md-6 text-center">
            <img
              src="https://via.placeholder.com/500x500"
              alt="hero"
              className="img-fluid"
            />
          </div>
        </div>
      </section>

      {/* ================= LATEST COLLECTION ================= */}
      <section className="container py-5">
        <h6 className="text-center mb-4">LATEST COLLECTION —</h6>

        <div className="row">
          {products.map((product) => (
            <div className="col-md-3 mb-4" key={product.id}>
              <div className="card border-0 text-center">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt="product"
                />
                <div className="card-body">
                  <h6 className="small">{product.name}</h6>
                  <p className="text-muted small">${product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= BEST SELLERS ================= */}
      <section className="container py-5">
        <h6 className="text-center mb-4">BEST SELLERS —</h6>

        <div className="row">
          {products.map((product) => (
            <div className="col-md-3 mb-4" key={product.id}>
              <div className="card border-0 text-center">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt="product"
                />
                <div className="card-body">
                  <h6 className="small">{product.name}</h6>
                  <p className="text-muted small">${product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="container py-5">
        <div className="row text-center">
          <div className="col-md-4 mb-3">
            <i className="bi bi-box-seam fs-3"></i>
            <p className="mt-2 fw-light">Free Shipping</p>
          </div>

          <div className="col-md-4 mb-3">
            <i className="bi bi-shield-check fs-3"></i>
            <p className="mt-2 fw-light">Secure Payment</p>
          </div>

          <div className="col-md-4 mb-3">
            <i className="bi bi-arrow-repeat fs-3"></i>
            <p className="mt-2 fw-light">Easy Returns</p>
          </div>
        </div>
      </section>

      {/* ================= NEWSLETTER ================= */}
      <section className="container py-5 text-center">
        <h6>Subscribe now & get 20% off</h6>
        <p className="text-muted small">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <div className="d-flex justify-content-center mt-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="form-control w-50 me-2"
          />
          <button className="btn btn-dark">SUBSCRIBE</button>
        </div>
      </section>
    </div>
  );
}

export default Home;
