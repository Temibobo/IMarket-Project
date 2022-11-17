import React from "react";
import products from "../data";

import Popular from "../Popular";
import ProductItem from "./ProductItem";


function ProductGallery(){
    return(
        <div className="gallery">
            <div className="sidebar">
                <h4 className="text-bold">Categories</h4>
                <ul className="left">
                    <li>Vehicles</li>
                    <li>Property</li>
                    <li>Electronics</li>
                    <li>Jobs</li>
                    <li>Vendors</li>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Trending Products</li>
                    <li>Contact Us</li>
                    <li>Vendors</li>

                </ul>
            </div>

                <div className="main">
                    <div className="popular ">
                        <h3>Explore Popular Brands</h3>
                        <div className="flex justify-between">{Popular.map((item)=>
                        {
                            return <img src={item.url} key={item.id} alt={item.name}/>
                        })}
                        </div>
                    </div>


                        <div>
                            <h3>Daily Deals</h3>
                            <div className="">  {products.map ((clip) =>
                            <ProductItem
                                key={clip.id}
                                name={clip.name}
                                url={clip.url}
                                location={clip.location}
                                price={clip.price}
                                category={clip.category}
                                 />)}
                            </div>
                        </div>
                </div>
        </div>

    )
}


export default ProductGallery;