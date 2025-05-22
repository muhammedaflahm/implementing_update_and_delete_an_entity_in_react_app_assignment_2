import React, { useEffect, useState } from "react";
import Item from "./Item";

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  const API_URI = import.meta.env.VITE_API_URI; // Or replace with hardcoded URL if needed

  // Fetch items on mount
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await fetch(`${API_URI}/items`);
      const data = await response.json();
      setItems(data);
    } catch (err) {
      setError("Failed to fetch items");
    }
  };

  const deleteItem = async (id) => {
    try {
      const response = await fetch(`${API_URI}/items/${id}`,{
        method: "DELETE",
      });

      if (response.ok) {
        setItems(items.filter((item) => item.id !== id));
      } else {
        throw new Error("Delete failed");
      }
    } catch (err) {
      setError("Failed to delete item");
    }
  };

  return (
    <div>
      <h2>Item List</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {items.map((item) => (
        <Item key={item.id} item={item} onDelete={deleteItem} />
      ))}
    </div>
  );
};

export default ItemList;