import React from "react";
import logo from "../Image/logo.png";


function Nav(){ 

    return(
        <div className="hidden sm:ml-6 sm:block  p-3 bg-white shadow-lg  dark:border-gray-300">
            <div className="flex justify-between">

                <img src={logo} className="logo" alt="logo"/>
                <input type="text" placeholder="Search for anything" className=" search px-20  rounded-md text-sm font-sm"/>
                <div className="flex justify-items-end space-x-4">
                    <a href="#" className="bg-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                    <a href="#" className="bg-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Help</a>
                    <button className=" bg-orange-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Get started </button>
                </div>
            </div>
        </div>
    )
}

export default Nav;