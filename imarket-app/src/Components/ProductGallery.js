import React from "react";
import products from "../data";
import card1 from "../Image/card1.png";
import card2 from "../Image/card2.png";


import Popular from "../Popular";
import ProductItem from "./ProductItem";


function ProductGallery(){
    return(
        <div className="gallery flex place-content-evenly bg-gray-50 pt-8">
            <div className="sidebar  p-6  border-gray-200 rounded-lg shadow-md  dark:border-gray-700">
                <h4 className="uppercase font-bold mt-2 mr-1">Categories</h4>
                <ul className="left m-4">
                    
                    <li className=" m-6 ">Vehicles</li>
                    <li className=" m-6">Property</li>
                    <li className=" m-6">Electronics</li>
                    <li className=" m-6">Jobs</li>
                    <li className=" m-6">Home Appliances</li>
                    <li className=" m-6">Sport</li>
                    <li className=" m-6">Games</li>
                    <li className=" m-6">Beauty & Health</li>
                    <li className=" m-6">Foods</li>
                    <li className=" m-6">Fashion</li>
                    <li className=" m-6">Services</li>
                    <li className=" m-6">Kids</li>
                    

                </ul>
            </div>


                    <div className="flex flex-col">
                            <div className="flex h-72 ml-5" >
                                
                                <div className="centered w-3/5 " style={{backgroundImage:`url(${card1})`,backgroundRepeat:"no-repeat",  }}></div>
                                <div className="centered w-2/5 ml-9" style={{backgroundImage:`url(${card2})`,backgroundRepeat:"no-repeat",  }}></div>
                        </div>


                        <div className="main p-5">
                            <div className="popular ">
                                <h3 className="font-bold text-xl">Explore Popular Brands</h3>
                                <div className="m-7 grid grid-cols-6 gap-2">{Popular.map((item)=>
                                {
                                    return <img src={item.url} key={item.id} alt={item.name}/>
                                })}
                            </div>
                        </div>


                        <div>
                            <h3 className="font-bold text-xl">Daily Deals</h3>
                            <div className="daily grid grid-cols-4 gap-2 pt-6">  {products.map ((clip) =>
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
        </div>

    )
}


export default ProductGallery;