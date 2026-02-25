import React from "react";
import { Link } from "react-router-dom";
import "./StorePages.css";

const fallbackImage = "https://picsum.photos/500/650?fashion";
const handleImageError = (event) => {
  event.currentTarget.src = fallbackImage;
};

function Cart() {
  const cartItems = [
    {
      id: 1,
      name: "Men Round Neck Pure Cotton T-shirt",
      price: 1499,
      quantity: 1,
      size: "L",
      image: "https://loremflickr.com/500/650/men,tshirt,fashion?lock=501",
    },
    {
      id: 2,
      name: "Women Linen Summer Dress",
      price: 1899,
      quantity: 1,
      size: "M",
      image: "https://loremflickr.com/500/650/women,dress,fashion?lock=502",
    },
  ];

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = 99;
  const total = subtotal + shipping;

  return (
    <div className="page-shell py-4 py-lg-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="page-card p-3 p-md-4">
              <h4 className="page-title mb-3">Your Cart</h4>
              {cartItems.map((item) => (
                <div key={item.id} className="d-flex justify-content-between border-bottom py-3 gap-3">
                  <div className="d-flex gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-item-image"
                      onError={handleImageError}
                    />
                    <div>
                      <h6 className="mb-1 fw-bold">{item.name}</h6>
                      <p className="mb-1 text-muted">Size: {item.size}</p>
                      <p className="mb-0 fw-semibold">Rs. {item.price}</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <input
                      type="number"
                      value={item.quantity}
                      className="form-control"
                      style={{ width: "72px" }}
                      readOnly
                    />
                    <button type="button" className="btn btn-sm btn-outline-danger">
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-4">
            <div className="page-card p-4 summary-panel">
              <h5 className="fw-bold mb-3">Price Summary</h5>
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
              <Link to="/checkout" className="btn btn-dark w-100">
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
