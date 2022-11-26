import React from "react";
import products from "../data";
import card1 from "../Image/card1.png";
import card2 from "../Image/card2.png";
import vehicles from "../Image/vehicles.png";
import Property from "../Image/Property.png";
import Electronics from "../Image/Electronics.png";
import jobs from "../Image/jobs.png";
import Homeappliances from "../Image/Homeappliances.png";
import sports from "../Image/sports.png";
import games from "../Image/games.png";
import health from "../Image/health.png";
import food from "../Image/food.png";
import fashion from "../Image/fashion.png";
import services from "../Image/services.png";
import kids from "../Image/kids.png";




import { FiChevronRight } from "react-icons/fi"; 
import Popular from "../Popular";
import ProductItem from "./ProductItem";
import Popup from "../Pages/Popup";
import { useState } from "react";


function ProductGallery(){


const [popup, setPopupOn] = useState(false);




    return(
        <div onClick={() => setPopupOn(false)} type="button" className="gallery flex place-content-evenly w-screen border-4 box-border overflow-x-hidden border-green-500 bg-gray-100 pt-8">
            
            <div className="sidebar bg-white p-6 hidden md:block w-1/4 border-gray-300 rounded-lg shadow-inner  dark:border-gray-700">
                <h4 className="uppercase font-bold mt-2 mr-1">Categories</h4>
                <div className="h-px bg-slate-200 mt-3 mb-3"></div>
                <ul className="left m-4 flex flex-col space-y-6">
                    <li className=" flex gap-3"><img src={vehicles}/><span className="pt-2 mr-16">Vehicles</span><FiChevronRight className="mt-3.5"/></li>
                    <li className=" flex gap-3"><img src={Property}/><span className="pt-2 mr-16">Property</span><FiChevronRight className="mt-3.5"/></li>
                    <li className=" flex gap-3"><img src={Electronics}/><span className="pt-2 mr-12">Electronics</span><FiChevronRight className="mt-3.5"/></li>
                    <li className=" flex gap-3"><img src={jobs}/><span className="pt-2 mr-24">Jobs</span><FiChevronRight className="mt-3.5"/></li>
                    <li className=" flex gap-3"><img src={Homeappliances}/><span className="pt-2 mr-4">Home Appliances</span><FiChevronRight className="mt-3.5"/></li>
                    <li className=" flex gap-3"><img src={sports}/><span className="pt-2 mr-16">Sports</span><FiChevronRight className="mt-3.5"/></li>
                    <li className=" flex gap-3"><img src={games}/><span className="pt-2 mr-16">Games</span><FiChevronRight className="mt-3.5"/></li>
                    <li className=" flex gap-3"><img src={health}/><span className="pt-2 mr-4">Beauty & Health</span><FiChevronRight className="mt-3.5"/></li>
                    <li className=" flex gap-3"><img src={food}/><span className="pt-2 mr-16">Foods</span><FiChevronRight className="mt-3.5"/></li>
                    <li className=" flex gap-3"><img src={fashion}/><span className="pt-2 mr-16">Fashion</span><FiChevronRight className="mt-3.5"/></li>
                    <li className=" flex gap-3"><img src={services}/><span className="pt-2 mr-16">Services</span><FiChevronRight className="mt-3.5"/></li>
                    <li className=" flex gap-3"><img src={kids}/><span className="pt-2 mr-16">Kids</span><FiChevronRight className="mt-3.5"/></li>
                    

                </ul>
            </div>


                    <div className="flex w-3/4 border border-red-500 flex-col">
                         <div className="flex border border-blue-500 flex-wrap w-full h-72 md:pl-5 " >
                                
                                <div className=" hidden md:block w-3/5  border border-orange-500 " style={{ backgroundImage:`url(${card1})`,backgroundRepeat:"no-repeat",width:"610px", minWidth:"550px",  }}></div>
                                <div className=" w-1/4 md:ml-8 min-w-40 border border-red-500 " style={{backgroundImage:`url(${card2})`,backgroundRepeat:"no-repeat", width:"310px", minWidth:"300px", }}></div>
                        </div>


                        <div className="main p-5 ">
                            <div className="popular ">
                                <div className="flex justify-between">
                                    <h3 className="font-bold text-xl">Explore Popular Brands</h3>
                                    <p className="text-orange-500 flex">SEE ALL <FiChevronRight className="m-1" /></p>
                                </div>

                                <div className="m-7 grid grid-cols-6 gap-2 ">{Popular.map((item)=>
                                {
                                    return <img src={item.url} key={item.id} alt={item.name}/>
                                })}
                            </div>
                            
                        </div>


                        <div>
                                <div className="flex justify-between">
                                    <h3 className="font-bold text-xl">Daily Deals</h3>
                                    <p className="text-orange-500 flex ">SEE ALL <FiChevronRight className="m-1" /></p>
                                </div>
                                <div className="flex justify-between mt-5">
                                    <button className="bg-gray-200 hover:bg-gray-300 text-gray-500  py-2 px-4 rounded">Phones</button>
                                    <button className="bg-gray-200 hover:bg-gray-300 text-gray-500  py-2 px-4 rounded">Vehicles</button>
                                    <button className="bg-gray-200 hover:bg-gray-300 text-gray-500  py-2 px-4 rounded">Fashion</button>
                                    <button className="bg-gray-200 hover:bg-gray-300 text-gray-500  py-2 px-4 rounded">Electronics</button>
                                    <button className="bg-gray-200 hover:bg-gray-300 text-gray-500  py-2 px-4 rounded">Appliances</button>
                                    <button className="bg-gray-200 hover:bg-gray-300 text-gray-500  py-2 px-4 rounded">Beauty & Health</button>
                                    <button className="bg-gray-200 hover:bg-gray-300 text-gray-500  py-2 px-4 rounded">Sports</button>
                                    <button className="bg-gray-200 hover:bg-gray-300 text-gray-500  py-2 px-4 rounded">Games</button>
                                    
                                    
                                </div>
                            <div className="daily grid grid-cols-4 gap-3 pt-8 text-gray-600 ">  {products.map ((clip) =>
                                <ProductItem
                                    key={clip.id}
                                    name={clip.name}
                                    url={clip.url}
                                    location={clip.location}
                                    price={clip.price}
                                    category={clip.category}
                                    />)}
                            </div>

                            {popup && < Popup setPopupOn={setPopupOn} />}
                        </div>
                    </div>
                </div>    
        </div>

    )
}


export default ProductGallery;