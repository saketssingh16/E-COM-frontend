import React from "react";

function Checkout() {
  return (
    <div className="container py-5">
      <div className="row">
        {/* LEFT COLUMN - DELIVERY INFO */}
        <div className="col-md-6">
          <h6 className="fw-light mb-4">DELIVERY INFORMATION —</h6>

          <form>
            <div className="row">
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                />
              </div>
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                />
              </div>
            </div>

            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email address"
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Street"
              />
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="City"
                />
              </div>
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="State"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Zip code"
                />
              </div>
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Country"
                />
              </div>
            </div>

            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Phone" />
            </div>
          </form>
        </div>

        {/* RIGHT COLUMN - CART TOTALS */}
        <div className="col-md-6">
          <h6 className="fw-light mb-4">CART TOTALS —</h6>

          <div className="d-flex justify-content-between mb-2">
            <span>Subtotal</span>
            <span>$100.00</span>
          </div>

          <div className="d-flex justify-content-between mb-2">
            <span>Shipping</span>
            <span>$10.00</span>
          </div>

          <hr />

          <div className="d-flex justify-content-between mb-4">
            <strong>Total</strong>
            <strong>$110.00</strong>
          </div>

          {/* PAYMENT METHOD */}
          <h6 className="fw-light mb-3">PAYMENT METHOD —</h6>

          <div className="form-check mb-2">
            <input
              className="form-check-input"
              type="radio"
              name="payment"
              id="stripe"
            />
            <label className="form-check-label" htmlFor="stripe">
              Stripe
            </label>
          </div>

          <div className="form-check mb-2">
            <input
              className="form-check-input"
              type="radio"
              name="payment"
              id="razorpay"
            />
            <label className="form-check-label" htmlFor="razorpay">
              Razorpay
            </label>
          </div>

          <div className="form-check mb-4">
            <input
              className="form-check-input"
              type="radio"
              name="payment"
              id="cod"
            />
            <label className="form-check-label" htmlFor="cod">
              Cash on Delivery
            </label>
          </div>

          <button className="btn btn-dark w-100">PLACE ORDER</button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
