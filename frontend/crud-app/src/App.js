import React, { useState } from "react";
import ItemForm from "./components/ItemForm";
import ItemList from './components/ItemList';


const App = () => {
    const [currentItem, setCurrentItem] = useState(null);

    const handleEdit = (item) => {
        setCurrentItem(item);
    };

    const refreshPage = () => {
        setCurrentItem(null);
    };

    return (
        <div>
            <h1>CRUD Application</h1>
            <ItemForm currentItem={currentItem} onRefresh={refreshPage} />
            <ItemList onEdit={handleEdit} />
        </div>
    );
};

export default App;
