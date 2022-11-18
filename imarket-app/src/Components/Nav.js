import React from "react";
import logo from "../Image/logo.png";

function Nav(){ 

    return(
        <div className="hidden sm:ml-6 sm:block m-2 p-3 bg-white shadow-lg  dark:border-gray-900">
            <div className="flex justify-between">

                <img src={logo} className="logo" alt="logo"/>
                <input type="text" placeholder="Search for anything" className=" search bg-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-sm"/>
                <a href="#" className="bg-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="#" className="bg-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Help</a>
                <button className="bg-orange-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Get started </button>
            </div>
        </div>
    )
}

export default Nav;