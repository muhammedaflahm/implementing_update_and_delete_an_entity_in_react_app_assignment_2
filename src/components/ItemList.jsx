import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <div>
      <h2>Item List</h2>
      {items.length === 0 ? (
        <p>No items available.</p>
      ) : (
        items.map((item) => <Item key={item.id} item={item} />)
      )}
    </div>
  );
};

export default ItemList;