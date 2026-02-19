import React from "react";

function Contact() {
  return (
    <div className="container py-5">
      {/* TITLE */}
      <div className="text-center mb-5">
        <h4 className="fw-light">CONTACT US —</h4>
      </div>

      {/* CONTACT CONTENT */}
      <div className="row align-items-center justify-content-center mb-5">
        {/* LEFT IMAGE */}
        <div className="col-md-5 mb-4 mb-md-0">
          <img
            src="https://via.placeholder.com/500x400"
            alt="contact"
            className="img-fluid"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="col-md-5">
          <h6 className="fw-bold">OUR STORE</h6>
          <p className="text-muted small mb-4">
            123 Fashion Street
            <br />
            New York, NY 10001
            <br />
            United States
            <br />
            <br />
            Tel: +1 212-456-7890
            <br />
            Email: support@forever.com
          </p>

          <h6 className="fw-bold">CAREERS AT SAKE_ITT</h6>
          <p className="text-muted small">
            Learn more about our teams and job openings.
          </p>

          <button className="btn btn-outline-dark btn-sm">Explore Jobs</button>
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

export default Contact;
