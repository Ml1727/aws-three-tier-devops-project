import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

 const API_URL = "/api";

  useEffect(() => {
    fetch(`${API_URL}/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data.data));

    fetch(`${API_URL}/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data.data));

    fetch(`${API_URL}/orders`)
      .then((res) => res.json())
      .then((data) => setOrders(data.data));
  }, []);

  return (
    <main>
      <h1>AWS Three-Tier DevOps Dashboard</h1>
      <p>Frontend connected to Express backend APIs.</p>

      <section>
        <h2>Users</h2>
        {users.map((user) => (
          <div className="card" key={user.id}>
            <strong>{user.name}</strong>
            <p>{user.role}</p>
          </div>
        ))}
      </section>

      <section>
        <h2>Products</h2>
        {products.map((product) => (
          <div className="card" key={product.id}>
            <strong>{product.name}</strong>
            <p>${product.price}</p>
          </div>
        ))}
      </section>

      <section>
        <h2>Orders</h2>
        {orders.map((order) => (
          <div className="card" key={order.id}>
            <strong>{order.product}</strong>
            <p>{order.user}</p>
            <p>Status: {order.status}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

export default App;