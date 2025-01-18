import React, { useEffect, useState } from "react";
import { getAllItems, deleteItem } from "../api/itemApi";


const ItemList = ({ onEdit }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        loadItems();
    }, []);

    const loadItems = async () => {
        const response = await getAllItems();
        setItems(response.data);
    };

    const handleDelete = async (id) => {
        await deleteItem(id);
        loadItems();
    };

    return (
        <div>
            <h2>Items</h2>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        {item.name} - {item.description}
                        <button onClick={() => onEdit(item)}>Edit</button>
                        <button onClick={() => handleDelete(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;
