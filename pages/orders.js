import Layout from "@/components/Layout";
import axios from "axios";

import { useEffect, useState } from "react";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios.get("/api/orders").then((responce) => {
      setOrders(responce.data);
    });
  }, []);
  return (
    <Layout>
      <h1>Orders</h1>
      <table className="basic">
        <thead>
          <tr>
            <th>Date</th>
            <th>Paid</th>
            <th>Recipient</th>
            <th>Products</th>
          </tr>
        </thead>
        <tbody>
          {orders.length > 0 &&
            orders.map((order) => (
              <tr key={order._id}>
                <td>
                  {new Date(order.createdAt).toLocaleString("en-US", {
                    month: "numeric",
                    day: "numeric",
                    year: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric",
                    hour12: true, // Use 12-hour clock with AM/PM
                  })}
                </td>
                <td>
                    {order.paid ? 'Yes' : 'No'}
                </td>
                <td>
                  {order.name} {order.email}
                  <br />
                  {order.city} {order.postalCode} {order.country}
                  <br />
                  {order.streetAddress}
                </td>
               
                <td>
                  {order.line_items.map((l, index) => (
                    <span key={`${order._id}-${index}`}>
                      {l.price_data?.product_data.name} x{l.quantity}
                      <br />
                    </span>
                  ))}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Layout>
  );
}
