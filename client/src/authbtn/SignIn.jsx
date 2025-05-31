import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInSchema } from '../utils/ValidationSchema';
import signinbg from "../assets/signinimg2.png";
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';

import visible from "../assets/visibility_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg";
import visibleoff from "../assets/visibility_off_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg";



const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInSchema),
  });
  
  const onSubmit = (data) => console.log(data);

  const [showPassword, setShowPassword] = useState(false);
  
    return (
      <>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-6xl bg-white rounded-lg overflow-hidden shadow-lg">

        
        <div className="w-full md:w-1/2 p-10 space-y-4">
          <h2 className="text-2xl font-bold mb-2">Welcome Back to BetaHouse!</h2>
          <p className="mb-6 text-gray-600">Let’s get started by filling out the information below</p>

          <div className="mt-4">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input type="email" placeholder="Enter your Email" className="border p-3 rounded-md w-full" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              {...register("password")}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-[#3D9970]"
            />
            <p className="text-red-500 text-xs mt-1">{errors.password?.message}</p>

            <button
                  type="button"
                  className="absolute left-150 top-63 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)} 
                >
                  <img
                    src={showPassword ? visibleoff : visible} 
                    alt="Toggle Visibility"
                    className="w-6 h-6 transition-opacity duration-200"
                  />
                </button>
          </div>


          <div className="mt-4 flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm text-gray-600">Remember Me</span>
            </label>
            <a href="#" className="text-sm text-red-500">Forgot Password</a>
          </div>

          <button className="w-full mt-6 bg-[#3D9970] text-white p-3 rounded-md hover:bg-green-700 cursor-pointer">Sign up</button>

          <div className="flex items-center my-4">
            <hr className="flex-grow border-t" />
            <span className="mx-2 text-gray-400">or</span>
            <hr className="flex-grow border-t" />
          </div>

          <button className="w-full flex items-center justify-center border border-gray-400 p-3 rounded-md hover:bg-gray-50">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google logo" className="w-5 h-5 mr-2" />
            Continue with Google
          </button>

          <p className="mt-4 text-sm text-center text-gray-600">
            New User? <Link to="/SignUp" className="text-green-600 cursor-pointer">Sign Up</Link>
          </p>
        </div>

        <div className="hidden md:block md:w-1/2">
          <img
            src={signinbg}
            alt="Building"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
    </>
  )
}

export default SignIn

