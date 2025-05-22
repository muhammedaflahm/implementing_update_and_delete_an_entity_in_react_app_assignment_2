const Item = ({ item, onDelete }) => {
    return (
      <div style={{ marginBottom: "10px" }}>
        <span>{item.name}</span>
        <button onClick={() => onDelete(item.id)} style={{ marginLeft: "10px" }}>
          Delete
        </button>
        {/* Optional Edit Button */}
        {/* <button style={{ marginLeft: "5px" }}>Edit</button> */}
      </div>
    );
  };
  
  export default Item;