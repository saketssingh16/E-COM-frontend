import React from "react";
import { Link } from "react-router-dom";

function Cart() {
  const cartItems = [
    {
      id: 1,
      name: "Men Round Neck Pure Cotton T-shirt",
      price: 50,
      quantity: 1,
      size: "L",
    },
    {
      id: 2,
      name: "Men Round Neck Pure Cotton T-shirt",
      price: 50,
      quantity: 1,
      size: "L",
    },
  ];

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const shipping = 10;
  const total = subtotal + shipping;

  return (
    <div className="container py-5">
      {/* TITLE */}
      <h6 className="fw-light mb-4">YOUR CART —</h6>

      <div className="row">
        {/* LEFT SIDE - CART ITEMS */}
        <div className="col-md-8">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="d-flex justify-content-between align-items-center border-bottom py-3"
            >
              {/* LEFT PART */}
              <div className="d-flex align-items-center gap-3">
                <img
                  src="https://via.placeholder.com/80x100"
                  alt="product"
                  style={{ width: "80px" }}
                />

                <div>
                  <h6 className="mb-1">{item.name}</h6>
                  <p className="text-muted small mb-1">
                    ${item.price} | Size: {item.size}
                  </p>
                </div>
              </div>

              {/* RIGHT PART */}
              <div className="d-flex align-items-center gap-3">
                <input
                  type="number"
                  value={item.quantity}
                  className="form-control"
                  style={{ width: "70px" }}
                  readOnly
                />

                <i className="bi bi-trash" style={{ cursor: "pointer" }}></i>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE - CART TOTALS */}
        <div className="col-md-4">
          <h6 className="fw-light mb-3">CART TOTALS —</h6>

          <div className="d-flex justify-content-between mb-2">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>

          <div className="d-flex justify-content-between mb-2">
            <span>Shipping Fee</span>
            <span>${shipping}</span>
          </div>

          <hr />

          <div className="d-flex justify-content-between mb-4">
            <strong>Total</strong>
            <strong>${total}</strong>
          </div>

          <Link to="/checkout" className="btn btn-dark w-100">
            PROCEED TO CHECKOUT
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
