import React from "react";
import "./StorePages.css";

const fallbackImage = "https://picsum.photos/900/700?fashion";
const handleImageError = (event) => {
  event.currentTarget.src = fallbackImage;
};

function About() {
  return (
    <div className="page-shell py-4 py-lg-5">
      <div className="container">
        <div className="page-card p-4 p-lg-5 reveal-on-scroll">
          <div className="row align-items-center g-4">
            <div className="col-lg-5">
              <img
                src="https://loremflickr.com/900/700/fashion,store,team?lock=301"
                alt="About Sake-itt"
                className="visual-cover"
                onError={handleImageError}
              />
            </div>
            <div className="col-lg-7">
              <p className="pill-badge mb-3">ABOUT SAKE-ITT</p>
              <h2 className="page-title mb-3">Style-First Shopping, Built for Everyday India</h2>
              <p className="section-subtitle">
                SAKE-ITT started with one goal: make trend-forward fashion accessible,
                reliable, and enjoyable. We curate quality styles, fast delivery, and smooth
                support so you can focus on what fits you best.
              </p>
              <p className="section-subtitle mb-0">
                From essentials to statement pieces, our catalog is shaped by real customer
                feedback, comfort standards, and modern design.
              </p>
            </div>
          </div>
        </div>

        <div className="row g-3 g-lg-4 mt-1">
          <div className="col-md-4 reveal-on-scroll">
            <div className="page-card p-4 h-100">
              <h6 className="fw-bold">Quality First</h6>
              <p className="section-subtitle mb-0">
                Every item is reviewed for fabric feel, fit, and finish before listing.
              </p>
            </div>
          </div>
          <div className="col-md-4 reveal-on-scroll">
            <div className="page-card p-4 h-100">
              <h6 className="fw-bold">Fast Fulfillment</h6>
              <p className="section-subtitle mb-0">
                Optimized dispatch and tracking for a dependable delivery experience.
              </p>
            </div>
          </div>
          <div className="col-md-4 reveal-on-scroll">
            <div className="page-card p-4 h-100">
              <h6 className="fw-bold">Customer Care</h6>
              <p className="section-subtitle mb-0">
                Responsive support with transparent updates and easy issue resolution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
