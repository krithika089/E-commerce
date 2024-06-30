import React from "react";

import "./FeaturedSection.css";
import ProductCard from "../Products/ProductCard";

const FeaturedSection = () => {
    return (
        <section className='featured_products'>
            <h2>Featured Products</h2>

            <div className='align_item featured_products_list'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </section>
    );
};

export default FeaturedSection;
