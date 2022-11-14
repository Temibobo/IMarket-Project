import React from "react";
import logo from "../Image/logo.png";


function Nav(){

    return(
        <div class="hidden sm:ml-6 sm:block m-2 p-3 bg-black">
            <div class="flex justify-between">

                <img src={logo}/>
                <input type="text" placeholder="Search for anything" class="bg-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-sm"/>
                <a href="#" class="bg-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="#" class="bg-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Help</a>
                <button class="bg-orange-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Get started </button>
            </div>
        </div>
    )
}

export default Nav;