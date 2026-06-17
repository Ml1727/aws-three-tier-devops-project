import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const API_URL = "/api";

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    const usersRes = await fetch(`${API_URL}/users`);
    const usersData = await usersRes.json();
    setUsers(usersData.data);

    const productsRes = await fetch(`${API_URL}/products`);
    const productsData = await productsRes.json();
    setProducts(productsData.data);

    const ordersRes = await fetch(`${API_URL}/orders`);
    const ordersData = await ordersRes.json();
    setOrders(ordersData.data);
  }

  async function createUser(e) {
    e.preventDefault();

    const response = await fetch(`${API_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        role,
      }),
    });

    if (response.ok) {
      setName("");
      setRole("");
      loadData();
    } else {
      alert("Unable to create user");
    }
  }

  return (
    <main>
      <h1>AWS Three-Tier DevOps Dashboard</h1>
      <p>Frontend connected to Express backend APIs.</p>

      <section>
        <h2>Create User</h2>

        <form onSubmit={createUser}>
          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Enter role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />

          <button type="submit">Add User</button>
        </form>
      </section>

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