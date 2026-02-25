import React from "react";
import "./StorePages.css";

const fallbackImage = "https://picsum.photos/900/700?store";
const handleImageError = (event) => {
  event.currentTarget.src = fallbackImage;
};

function Contact() {
  return (
    <div className="page-shell py-4 py-lg-5">
      <div className="container">
        <div className="page-card p-4 p-lg-5">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <img
                src="https://loremflickr.com/900/700/fashion,customer,store?lock=401"
                alt="Contact store"
                className="visual-cover"
                onError={handleImageError}
              />
            </div>
            <div className="col-lg-6">
              <p className="pill-badge mb-3">CONTACT US</p>
              <h2 className="page-title mb-3">We are Here to Help You Shop Better</h2>
              <p className="section-subtitle mb-4">
                Reach us for order support, size guidance, product details, or career
                opportunities. We usually reply within 24 hours.
              </p>
              <p className="mb-1 fw-semibold">SAKE-ITT Store</p>
              <p className="text-muted mb-1">123 Fashion Street, New York, NY 10001</p>
              <p className="text-muted mb-1">Phone: +1 212-456-7890</p>
              <p className="text-muted mb-4">Email: support@sakeitt.com</p>
              <button className="btn btn-dark">Explore Jobs</button>
            </div>
          </div>
        </div>

        <div className="page-card mt-4 p-4 text-center">
          <h5 className="fw-bold mb-2">Subscribe & Get 20% Off</h5>
          <p className="section-subtitle mb-3">Weekly style edits and exclusive offers in your inbox.</p>
          <div className="newsletter-form mx-auto">
            <input type="email" className="form-control" placeholder="Enter your email" />
            <button className="btn btn-dark">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
