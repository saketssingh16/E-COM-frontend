import React from "react";

function About() {
  return (
    <div className="container py-5">
      {/* TITLE */}
      <div className="text-center mb-5">
        <h4 className="fw-light">ABOUT US —</h4>
      </div>

      {/* MAIN SECTION */}
      <div className="row align-items-center mb-5">
        {/* LEFT IMAGE */}
        <div className="col-md-5 mb-4 mb-md-0">
          <img
            src="https://via.placeholder.com/500x500"
            alt="about"
            className="img-fluid"
          />
        </div>

        {/* RIGHT TEXT */}
        <div className="col-md-7">
          <p className="text-muted small">
            SAKE_ITT was born out of a passion for innovation and a desire to
            redefine the way people shop online. Our journey began with a simple
            idea: to curate high-quality, fashionable products that inspire
            confidence and individuality.
          </p>

          <p className="text-muted small">
            Since our inception, we’ve worked tirelessly to build a trusted
            e-commerce platform that connects customers with premium brands and
            timeless styles.
          </p>

          <h6 className="fw-bold mt-4">Our Mission</h6>
          <p className="text-muted small">
            Our mission is to empower individuals through fashion, offering
            convenience, quality, and exceptional service at every step of their
            shopping experience.
          </p>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="mb-5">
        <h6 className="fw-light mb-4">WHY CHOOSE US —</h6>

        <div className="row text-center">
          <div className="col-md-4 border p-4">
            <h6 className="fw-bold">QUALITY ASSURANCE</h6>
            <p className="text-muted small">
              We carefully select and test each product to ensure premium
              quality and durability.
            </p>
          </div>

          <div className="col-md-4 border p-4">
            <h6 className="fw-bold">CONVENIENCE</h6>
            <p className="text-muted small">
              Enjoy a seamless shopping experience with secure payments and fast
              delivery.
            </p>
          </div>

          <div className="col-md-4 border p-4">
            <h6 className="fw-bold">EXCEPTIONAL CUSTOMER SERVICE</h6>
            <p className="text-muted small">
              Our support team is always ready to assist you with any inquiries
              or concerns.
            </p>
          </div>
        </div>
      </div>

      {/* SUBSCRIBE SECTION */}
      <div className="row justify-content-center mt-5 pt-4">
        <div className="col-md-6 text-center">
          <h5 className="mb-2">Subscribe now & get 20% off</h5>
          <p className="text-muted small">
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>

          <div className="input-group mt-3">
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
            />
            <button className="btn btn-dark">SUBSCRIBE</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
