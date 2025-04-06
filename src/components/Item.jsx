const Item = ({ item }) => {
    const handleDelete = async () => {
      try {
        const response = await fetch(`http://${import.meta.env.VITE_API_URI}/doors/${item.id}`, {
          method: "DELETE",
        });
  
        if (!response.ok) throw new Error("Failed to delete item");
  
        alert("Item deleted successfully!");
        window.location.reload(); // Refresh list after deletion
      } catch (err) {
        alert(`Error: ${err.message}`);
      }
    };
  
    return (
      <div>
        <p>{item.name}</p>
        <button onClick={handleDelete}>Delete</button>
      </div>
    );
  };
  
  export default Item;
  