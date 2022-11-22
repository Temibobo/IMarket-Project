import React from "react";
import logo from "../Image/logo.png";
import { Link } from 'react-router-dom';
import { FiHelpCircle, FiSearch } from "react-icons/fi";


function Nav(){ 

    return(
        <div className="hidden sm:ml-6 sm:block  p-3 bg-white shadow-lg  dark:border-gray-300">
            <div className="flex justify-between">

                <img src={logo} className="logo" alt="logo"/>
                <input type="text "  placeholder="Search for anything " className="  search w-80  rounded-md text-sm font-sm"/>
                <div className="flex justify-items-end space-x-4">
                    <Link to='/' className=" hover:bg-gray-300  hover:text-black px-3 py-2 rounded-md text-sm font-bold">Home</Link>
                    <Link to="/signup" className=" hover:bg-gray-300 hover:text-black px-3 py-2 rounded-md text-sm font-medium">Signup</Link>
                     <Link to="/" className=" hover:bg-gray-300 hover:text-black px-3 py-2 rounded-md text-sm font-medium flex "><FiHelpCircle className="m-1"/> Help</Link>
                    <Link to='/login' className=" bg-orange-500 hover:bg-gray-300 hover:text-black px-7 py-2 rounded-md text-sm font-medium">Get started </Link>
                </div>
            </div>
        </div>
    )
}

export default Nav;