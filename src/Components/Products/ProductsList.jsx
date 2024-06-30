import React from "react";
import "./ProductsList.css";
import ProductCard from "./ProductCard";
import useData from "../../hooks/useData";
import { useSearchParams } from "react-router-dom";


const ProductsList = () => {
    const [search,setSearch] = useSearchParams();
    const category = search.get("category");
    const page = search.get("page");
    const {data ,error} = useData("/products" , {
        params:{
            category:category,
            page:page
        }
    } , [category,page]); //data : {products} is equal to using data.products 

    const handlePageClick = page => {
        const currentSearchParams = Object.fromEntries([...search]);
        console.log(currentSearchParams);
        setSearch({...currentSearchParams , page:page});
    }

    return(
        <section className="products_list" >
            <header className="align_item products_list_header"> 
                 <h2>Products </h2>
                 <select className="products_sort">
                    <option value="">Relevance</option>
                    <option value="price_desc">Price HIGH to LOW</option>
                    <option value="price_asc">Price LOW to HIGH</option>
                    <option value="rate_desc">Rate HIGH to LOW</option>
                    <option value="rate_asc">Rate LOW to HIGH</option>
                 </select>
            </header>
            <div className="align_item products_list_card">
                {
                    error && <em>{error}</em>
                }
              { 
                data?.products && 
                data.products.map((product) => 
                <ProductCard key={product._id} 
                  id={product._id}
                  price={product.price} 
                  title={product.title}
                  rating={product.reviews.rate}
                  reviewsCount={product.reviews.counts}
                  imgSrc={product.images[0]}
                  stock={product.stock}
                />)
              }
              <button onClick={() => handlePageClick(2)}>Page 2</button>
                
              
            </div>
        </section>
    );
}
export default ProductsList;