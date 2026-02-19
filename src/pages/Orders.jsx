import React from "react";

function Orders() {
  const orders = [
    {
      id: 1,
      name: "Men Round Neck Pure Cotton T-shirt",
      quantity: 1,
      size: "M",
      price: 50,
      status: "Ready to ship",
    },
    {
      id: 2,
      name: "Men Round Neck Pure Cotton T-shirt",
      quantity: 1,
      size: "M",
      price: 50,
      status: "Shipped",
    },
  ];

  return (
    <div className="container py-5">
      {/* PAGE TITLE */}
      <h5 className="fw-light mb-4">MY ORDERS —</h5>

      {/* ORDER LIST */}
      {orders.map((order) => (
        <div
          key={order.id}
          className="d-flex justify-content-between align-items-center border-bottom py-4"
        >
          {/* LEFT SIDE */}
          <div className="d-flex align-items-center gap-3">
            <img
              src="https://via.placeholder.com/80x100"
              alt="product"
              className="img-fluid"
              style={{ width: "80px" }}
            />

            <div>
              <h6 className="mb-1">{order.name}</h6>
              <p className="text-muted small mb-1">
                ${order.price} &nbsp; | &nbsp; Quantity: {order.quantity} &nbsp;
                | &nbsp; Size: {order.size}
              </p>

              <p className="small mb-0">
                <span className="text-success">●</span> {order.status}
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <button className="btn btn-outline-dark btn-sm">Track Order</button>
        </div>
      ))}
    </div>
  );
}

export default Orders;
