import React, { useEffect, useState } from "react";
import { apiFetch } from "../config/api";
import "./StorePages.css";

const initialProductForm = {
  name: "",
  price: "",
  category: "",
  image: "",
  description: "",
  stock: "",
};

const initialUserForm = {
  name: "",
  email: "",
  password: "",
  role: "user",
};

function Admin() {
  const [stats, setStats] = useState(null);
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [productForm, setProductForm] = useState(initialProductForm);
  const [userForm, setUserForm] = useState(initialUserForm);
  const [loading, setLoading] = useState(false);

  const loadAll = async () => {
    setLoading(true);
    try {
      const [statsData, productsData, usersData] = await Promise.all([
        apiFetch("/api/admin/stats"),
        apiFetch("/api/products"),
        apiFetch("/api/admin/users"),
      ]);
      setStats(statsData.stats);
      setProducts(productsData.products || []);
      setUsers(usersData.users || []);
    } catch (error) {
      alert(error.message || "Admin data loading failed");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAll();
  }, []);

  const addProduct = async (event) => {
    event.preventDefault();
    try {
      await apiFetch("/api/products", {
        method: "POST",
        body: JSON.stringify(productForm),
      });
      setProductForm(initialProductForm);
      await loadAll();
    } catch (error) {
      alert(error.message || "Failed to add product");
    }
  };

  const deleteProduct = async (id) => {
    try {
      await apiFetch(`/api/products/${id}`, { method: "DELETE" });
      await loadAll();
    } catch (error) {
      alert(error.message || "Failed to delete product");
    }
  };

  const addUser = async (event) => {
    event.preventDefault();
    try {
      await apiFetch("/api/admin/users", {
        method: "POST",
        body: JSON.stringify(userForm),
      });
      setUserForm(initialUserForm);
      await loadAll();
    } catch (error) {
      alert(error.message || "Failed to create user");
    }
  };

  const deleteUser = async (id) => {
    try {
      await apiFetch(`/api/admin/users/${id}`, { method: "DELETE" });
      await loadAll();
    } catch (error) {
      alert(error.message || "Failed to delete user");
    }
  };

  return (
    <div className="page-shell py-4 py-lg-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3 className="page-title">Admin Dashboard</h3>
          <button className="btn btn-outline-dark btn-sm" onClick={loadAll} disabled={loading}>
            {loading ? "Refreshing..." : "Refresh"}
          </button>
        </div>

        <div className="row g-3 mb-4">
          {[
            { label: "Products", value: stats?.totalProducts ?? 0 },
            { label: "Users", value: stats?.totalUsers ?? 0 },
            { label: "Orders", value: stats?.totalOrders ?? 0 },
            { label: "Units Sold", value: stats?.unitsSold ?? 0 },
            { label: "Revenue", value: `Rs. ${stats?.revenue ?? 0}` },
          ].map((item) => (
            <div className="col-6 col-lg-2" key={item.label}>
              <div className="page-card p-3 h-100">
                <div className="small text-muted">{item.label}</div>
                <div className="fw-bold fs-5">{item.value}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="row g-4">
          <div className="col-lg-6">
            <div className="page-card p-4">
              <h5 className="fw-bold mb-3">Add Product</h5>
              <form onSubmit={addProduct} className="d-grid gap-2">
                <input
                  className="form-control"
                  placeholder="Name"
                  value={productForm.name}
                  onChange={(e) =>
                    setProductForm((prev) => ({ ...prev, name: e.target.value }))
                  }
                />
                <input
                  className="form-control"
                  placeholder="Price"
                  type="number"
                  value={productForm.price}
                  onChange={(e) =>
                    setProductForm((prev) => ({ ...prev, price: e.target.value }))
                  }
                />
                <input
                  className="form-control"
                  placeholder="Category"
                  value={productForm.category}
                  onChange={(e) =>
                    setProductForm((prev) => ({ ...prev, category: e.target.value }))
                  }
                />
                <input
                  className="form-control"
                  placeholder="Image URL"
                  value={productForm.image}
                  onChange={(e) =>
                    setProductForm((prev) => ({ ...prev, image: e.target.value }))
                  }
                />
                <textarea
                  className="form-control"
                  placeholder="Description"
                  value={productForm.description}
                  onChange={(e) =>
                    setProductForm((prev) => ({ ...prev, description: e.target.value }))
                  }
                />
                <input
                  className="form-control"
                  placeholder="Stock"
                  type="number"
                  value={productForm.stock}
                  onChange={(e) =>
                    setProductForm((prev) => ({ ...prev, stock: e.target.value }))
                  }
                />
                <button className="btn btn-dark" type="submit">
                  Add Product
                </button>
              </form>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="page-card p-4">
              <h5 className="fw-bold mb-3">Create User/Login</h5>
              <form onSubmit={addUser} className="d-grid gap-2">
                <input
                  className="form-control"
                  placeholder="Name"
                  value={userForm.name}
                  onChange={(e) => setUserForm((prev) => ({ ...prev, name: e.target.value }))}
                />
                <input
                  className="form-control"
                  placeholder="Email"
                  type="email"
                  value={userForm.email}
                  onChange={(e) => setUserForm((prev) => ({ ...prev, email: e.target.value }))}
                />
                <input
                  className="form-control"
                  placeholder="Password"
                  type="password"
                  value={userForm.password}
                  onChange={(e) =>
                    setUserForm((prev) => ({ ...prev, password: e.target.value }))
                  }
                />
                <select
                  className="form-select"
                  value={userForm.role}
                  onChange={(e) => setUserForm((prev) => ({ ...prev, role: e.target.value }))}
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
                <button className="btn btn-dark" type="submit">
                  Create User
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="row g-4 mt-1">
          <div className="col-lg-7">
            <div className="page-card p-4">
              <h5 className="fw-bold mb-3">Products</h5>
              <div style={{ maxHeight: "420px", overflow: "auto" }}>
                {products.map((product) => (
                  <div key={product.id} className="d-flex justify-content-between border-bottom py-2">
                    <div>
                      <div className="fw-semibold">{product.name}</div>
                      <div className="small text-muted">
                        Rs. {product.price} | {product.category}
                      </div>
                    </div>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => deleteProduct(product.id)}
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="page-card p-4">
              <h5 className="fw-bold mb-3">Users</h5>
              <div style={{ maxHeight: "420px", overflow: "auto" }}>
                {users.map((user) => (
                  <div key={user.id} className="d-flex justify-content-between border-bottom py-2">
                    <div>
                      <div className="fw-semibold">{user.name}</div>
                      <div className="small text-muted">
                        {user.email} | {user.role}
                      </div>
                    </div>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => deleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
