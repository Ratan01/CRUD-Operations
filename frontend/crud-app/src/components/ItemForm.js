import React, { useState } from "react";
import { createItem, updateItem } from "../api/itemApi";



const ItemForm = ({ currentItem, onRefresh }) => {
    const [item, setItem] = useState(currentItem || { name: "", description: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (item.id) {
            await updateItem(item.id, item);
        } else {
            await createItem(item);
        }
        onRefresh();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={item.name}
                onChange={(e) => setItem({ ...item, name: e.target.value })}
                required
            />
            <input
                type="text"
                placeholder="Description"
                value={item.description}
                onChange={(e) => setItem({ ...item, description: e.target.value })}
                required
            />
            <button type="submit">{item.id ? "Update" : "Create"}</button>
        </form>
    );
};

export default ItemForm;
