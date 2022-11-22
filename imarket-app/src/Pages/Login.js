import React from "react";
import Nav from "../Components/Nav";
import Foot from "../Components/Foot";
import loginimage from "../Image/loginimage.png";


function Login(){

    return(
        <div>
            <Nav/>
                <div className="grid grid-cols-2 relative ">
                    <div className="relative" style={{backgroundImage:`url(${loginimage})`,backgroundRepeat:"no-repeat",  }}>first</div>


                    
                        <div className=" bg-white flex justify-center text-center mt-14 mb-AUTO">
                            
                            
                                <div className="flex flex-col justify-between ">
                                    
                                <p className="font-bold text-2xl ">Welcome to iMarket</p>
                                <p className="text-sm ">lorem ipsum dolor dit amet, consectur adipicing elit</p>

                                    <button className="hover:bg-orange-400  bg-gray-300 w-full px-40 py-6 rounded-md text-sm font-medium mb-10 mt-14 ">Login with Google</button>

                                    <form className="">
                                        <input placeholder="Enter email address" className=" text-gray-400 rounded-md block w-full px-5 py-6 mb-5"></input>
                                        <input placeholder="Enter password" className=" text-gray-400 rounded-md block w-full px-5 py-6 mb-10"></input>
                                        <button className="hover:bg-white  bg-blue-900 w-full py-6 rounded-md text-sm font-medium mb-5">Login </button>
                                    </form>
                                    
                                    <div><p>Don't have an account? <span className="text-red-600">Create Account</span></p></div>

                                </div>
                        
                        </div>

                </div>
            <Foot/>

        </div>
    )
}

export default Login;