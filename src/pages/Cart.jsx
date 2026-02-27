import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./StorePages.css";

const fallbackImage = "https://picsum.photos/500/650?fashion";
const handleImageError = (event) => {
  event.currentTarget.src = fallbackImage;
};

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, subtotal } = useCart();

  const shipping = subtotal > 999 ? 0 : cartItems.length ? 99 : 0;
  const total = subtotal + shipping;

  return (
    <div className="page-shell py-4 py-lg-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="page-card p-3 p-md-4 reveal-on-scroll">
              <h4 className="page-title mb-3">Your Cart</h4>

              {!cartItems.length && (
                <p className="mb-0 text-muted">Your cart is empty. Add products from collection.</p>
              )}

              {cartItems.map((item) => (
                <div key={`${item.id}-${item.size}`} className="d-flex justify-content-between border-bottom py-3 gap-3">
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
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                      onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={item.quantity}
                      className="form-control"
                      style={{ width: "72px" }}
                      onChange={(event) => updateQuantity(item.id, item.size, event.target.value)}
                      min="1"
                    />
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                      onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                    >
                      +
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => removeFromCart(item.id, item.size)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-4">
            <div className="page-card p-4 summary-panel reveal-on-scroll">
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

              {cartItems.length ? (
                <Link to="/checkout" className="btn btn-dark w-100">
                  Proceed to Checkout
                </Link>
              ) : (
                <Link to="/collection" className="btn btn-outline-dark w-100">
                  Browse Products
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
