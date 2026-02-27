import React from "react";
import { useCart } from "../context/CartContext";
import "./StorePages.css";

function Checkout() {
  const { subtotal } = useCart();
  const shipping = subtotal > 999 ? 0 : subtotal ? 99 : 0;
  const total = subtotal + shipping;

  return (
    <div className="page-shell py-4 py-lg-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-7">
            <div className="page-card p-4 reveal-on-scroll">
              <h4 className="page-title mb-3">Delivery Information</h4>
              <form>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input type="text" className="form-control" placeholder="First name" />
                  </div>
                  <div className="col-md-6 mb-3">
                    <input type="text" className="form-control" placeholder="Last name" />
                  </div>
                </div>
                <div className="mb-3">
                  <input type="email" className="form-control" placeholder="Email address" />
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Street address" />
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input type="text" className="form-control" placeholder="City" />
                  </div>
                  <div className="col-md-6 mb-3">
                    <input type="text" className="form-control" placeholder="State" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input type="text" className="form-control" placeholder="Zip code" />
                  </div>
                  <div className="col-md-6 mb-3">
                    <input type="text" className="form-control" placeholder="Country" />
                  </div>
                </div>
                <div className="mb-0">
                  <input type="text" className="form-control" placeholder="Phone number" />
                </div>
              </form>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="page-card p-4 summary-panel reveal-on-scroll">
              <h5 className="fw-bold mb-3">Order Summary</h5>
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal</span>
                <span>Rs. {subtotal}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Shipping</span>
                <span>Rs. {shipping}</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between fw-bold mb-4">
                <span>Total</span>
                <span>Rs. {total}</span>
              </div>

              <h6 className="fw-semibold mb-3">Payment Method</h6>
              <div className="form-check mb-2">
                <input className="form-check-input" type="radio" name="payment" id="stripe" />
                <label className="form-check-label" htmlFor="stripe">
                  Stripe
                </label>
              </div>
              <div className="form-check mb-2">
                <input className="form-check-input" type="radio" name="payment" id="razorpay" />
                <label className="form-check-label" htmlFor="razorpay">
                  Razorpay
                </label>
              </div>
              <div className="form-check mb-4">
                <input className="form-check-input" type="radio" name="payment" id="cod" />
                <label className="form-check-label" htmlFor="cod">
                  Cash on Delivery
                </label>
              </div>
              <button className="btn btn-dark w-100">Place Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
