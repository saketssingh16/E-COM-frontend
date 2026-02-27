import React, { useEffect, useState } from "react";
import { apiFetch } from "../config/api";
import "./StorePages.css";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const loadOrders = async () => {
      try {
        const data = await apiFetch("/api/orders/my");
        setOrders(data.orders || []);
      } catch (error) {
        console.error(error);
      }
    };
    loadOrders();
  }, []);

  return (
    <div className="page-shell py-4 py-lg-5">
      <div className="container">
        <div className="page-card p-3 p-md-4 reveal-on-scroll">
          <h4 className="page-title mb-3">My Orders</h4>
          {!orders.length && <p className="text-muted mb-0">No orders yet.</p>}
          {orders.map((order) => (
            <div key={`${order.id}-${order.product_name}`} className="d-flex justify-content-between border-bottom py-3 gap-3">
              <div>
                <h6 className="mb-1 fw-bold">{order.product_name}</h6>
                <p className="mb-1 text-muted">
                  Rs. {order.price_at_purchase} | Qty: {order.quantity}
                </p>
                <p className="small mb-0">
                  <span className="text-success">●</span> {order.status}
                </p>
              </div>
              <div className="text-end small text-muted">
                <div>Order #{order.id}</div>
                <div>{new Date(order.created_at).toLocaleString()}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Orders;
