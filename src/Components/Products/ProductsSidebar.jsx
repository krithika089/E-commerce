import React from "react";
import "./ProductsSidebar.css"
import LinkWithIcon from "../LinkWithIcon/LinkWithIcon";
import useData from './../../hooks/useData';

const ProductsSidebar = () => {
    const {data : category,error} = useData("/category");
    
    return(
        <aside className="products_sidebar">
            <h3>Category</h3>
            <div className="category_links">
                {
                    error && <em>{error.message}</em>
                }
                {
                    category && 
                    category.map((data) =>  <LinkWithIcon title ={data.name}
                        key={data._id}
                        link ={`/products?category=${data.name}`}
                        emoji ={`http://localhost:5000/category/${data.image}`}
                        sidebar="true"
                    />)
                }
            </div>
        </aside>
    );
}
export default ProductsSidebar;