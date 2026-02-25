import React from "react";
import "./StorePages.css";

const fallbackImage = "https://picsum.photos/500/650?order";
const handleImageError = (event) => {
  event.currentTarget.src = fallbackImage;
};

function Orders() {
  const orders = [
    {
      id: 1,
      name: "Men Round Neck Pure Cotton T-shirt",
      quantity: 1,
      size: "M",
      price: 1499,
      status: "Ready to ship",
      image: "https://loremflickr.com/500/650/men,tshirt,fashion?lock=601",
    },
    {
      id: 2,
      name: "Women Linen Summer Dress",
      quantity: 1,
      size: "S",
      price: 1899,
      status: "Shipped",
      image: "https://loremflickr.com/500/650/women,dress,fashion?lock=602",
    },
  ];

  return (
    <div className="page-shell py-4 py-lg-5">
      <div className="container">
        <div className="page-card p-3 p-md-4 reveal-on-scroll">
          <h4 className="page-title mb-3">My Orders</h4>
          {orders.map((order) => (
            <div key={order.id} className="d-flex justify-content-between border-bottom py-3 gap-3">
              <div className="d-flex gap-3">
                <img
                  src={order.image}
                  alt={order.name}
                  className="order-item-image"
                  onError={handleImageError}
                />
                <div>
                  <h6 className="mb-1 fw-bold">{order.name}</h6>
                  <p className="mb-1 text-muted">
                    Rs. {order.price} | Qty: {order.quantity} | Size: {order.size}
                  </p>
                  <p className="small mb-0">
                    <span className="text-success">●</span> {order.status}
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <button type="button" className="btn btn-outline-dark btn-sm">
                  Track Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Orders;
