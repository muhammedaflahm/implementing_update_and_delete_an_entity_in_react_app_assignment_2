import { useEffect, useState } from "react";
import ItemList from "./components/ItemList";

const API_URI = `http://${import.meta.env.VITE_API_URI}/doors`; // Ensure VITE_API_URI is correct

function App() {
  const [items, setItems] = useState([]); // Store the fetched items
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URI);
        if (!response.ok) throw new Error("Failed to fetch items");
        const data = await response.json();
        setItems(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  if (loading) return <p>Loading items...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return <ItemList items={items} />;
}

export default App;