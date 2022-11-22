import React from "react";
import Nav from "../Components/Nav";
import Foot from "../Components/Foot";
import { Link } from 'react-router-dom';
import loginimage from "../Image/loginimage.png";
import { FiCheckCircle } from "react-icons/fi";

function Create2(){

    return(
        <div>
            <Nav/>

            <div className="grid grid-cols-2 relative ">
                    <div className="relative" style={{backgroundImage:`url(${loginimage})`,backgroundRepeat:"no-repeat",  }}>first</div>


                    
                        <div className=" bg-white flex justify-center text-center mt-24 mb-40">
                            
                            
                                <div className="flex flex-col justify-between ">

                               < p className="text-sm mb-2 text-left ">Step 2 of 2</p>    
                                    <p className="font-bold text-2xl text-left  ">Create your iMarket profile</p>
                                    <p className="text-sm mb-8 text-left  ">lorem ipsum dolor dit amet, consectur adipicing elit</p>


                                    <form className="flex flex-col">
                                        
                                                <input  type="text" placeholder="Enter display name" className=" text-gray-400 rounded-md w-96 px-4 py-3 mx-auto mb-5 "></input>
                                                <input type="text" placeholder="Upload profile photo" className=" text-gray-400 rounded-md   w-96 px-4 mx-auto py-3 mb-5"></input>
                                                
                                                <p className="text-xs text-left mb-4 flex"><FiCheckCircle className="mr-2 mb-2 text-orange-500" /> I accept the  terms & conditions  of the iMarket Community</p>

                                                <Link to='/create' className="hover:bg-gray-300 text-white hover:text-gray-500 bg-blue-900 w-96 px-4 py-3 mx-auto rounded-md text-sm font-medium mb-5">Next</Link>
                                    </form>
                                    
                                    
                                    

                                </div>
                        
                        </div>

                </div>

            <Foot/>
        </div>
    )

}

export default Create2;