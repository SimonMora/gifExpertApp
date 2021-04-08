import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const handleAdd = (newCategory) => {

        setCategories(categories => [newCategory, ...categories]);

    }
    return (
        <>
            <h1>Gif react!</h1>
            <hr />
            <AddCategory handleAdd={handleAdd} />
            {


                categories.map((category) => {
                    return (
                        <>
                            <h2>{category}</h2>
                            <GifGrid
                                key={category}
                                category={category}
                            />
                        </>
                    );
                })
            }



        </>
    );
};

export default GifExpertApp;