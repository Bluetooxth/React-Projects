import React, { useState } from "react";

const App = () => {
  const [items, setItems] = useState([]);
  const [newItems, setNewItems] = useState("");

  const addItem = () => {
    if (newItems === "") {
      alert("Please enter a task");
    } else {
      setItems([...items, newItems]);
      setNewItems("");
    }
  };

  const deleteItem = (dl) => {
    setItems(items.filter((_, index) => index !== dl));
  };

  return (
    <section className="container">
      <input
        className="input"
        type="text"
        value={newItems}
        onChange={(e) => setNewItems(e.target.value)}
      />
      <button className="add" onClick={addItem}>
        Add
      </button>
      <div className="todolist">
        {items.map((item, index) => (
          <p className="task" key={index}>
            {item}
            <button className="delete" onClick={() => deleteItem(index)}>
              delete
            </button>
          </p>
        ))}
      </div>
    </section>
  );
};

export default App;