import React from 'react'
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from '../utils/ValidationSchema';
import signinbg from "../assets/signinimage.png";
import { Link } from 'react-router-dom';

import visible from "../assets/visibility_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg";
import visibleoff from "../assets/visibility_off_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg";



const SignUp = () => {
  
  const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(signUpSchema),
    });
    
    const onSubmit = (data) => console.log(data);
  
    const [showPassword, setShowPassword] = useState(false);

    const [showPassword2, setShowPassword2] = useState(false);
  
  
  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-6xl bg-white rounded-lg overflow-hidden shadow-lg">

        {/* Left Section - Form */}
        <div className="w-full md:w-1/2 p-10">
          <h2 className="text-2xl font-bold mb-2">Join our community of home seekers and explore the possibilities that await.</h2>
          <p className="mb-6 text-gray-600">Let’s get started by filling out the information below</p>

          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="Enter Name" className="border p-3 rounded-md w-full" />
            <input type="text" placeholder="Enter Name" className="border p-3 rounded-md w-full" />
          </div>

          <div className="mt-4">
            <input type="email" placeholder="Enter your Email" className="border p-3 rounded-md w-full" />
          </div>

         <div>
                     <label className="block text-sm font-medium mb-1"></label>
                     <input
                       type={showPassword ? "text" : "password"}
                       {...register("password")}
                       placeholder="Enter your password"
                       className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-[#3D9970]"
                     />
                     <p className="text-red-500 text-xs mt-1">{errors.password?.message}</p>
         
                     <button
                           type="button"
                           className="absolute left-147 top-72 cursor-pointer"
                           onClick={() => setShowPassword(!showPassword)} 
                         >
                           <img
                             src={showPassword ? visibleoff : visible} 
                             alt="Toggle Visibility"
                             className="w-6 h-6 transition-opacity duration-200"
                           />
                         </button>
                   </div>

         <div>
                     <label className="block text-sm font-medium mb-1"></label>
                     <input
                       type={showPassword ? "text" : "password"}
                       {...register("password")}
                       placeholder="Enter your password"
                       className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-[#3D9970]"
                     />
                     <p className="text-red-500 text-xs mt-1">{errors.cPassword?.message}</p>
         
                     <button
                           type="button"
                           className="absolute left-147 top-84 cursor-pointer"
                           onClick={() => setShowPassword2(!showPassword2)} 
                         >
                           <img
                             src={showPassword2 ? visibleoff : visible} 
                             alt="Toggle Visibility"
                             className="w-6 h-6 transition-opacity duration-200"
                           />
                         </button>
                   </div>

          <div className="mt-4 flex items-center">
            <input type="checkbox" className="mr-2" />
            <span className="text-sm text-gray-600">I agree to <a href="#" className="text-green-600">Terms of Service</a> and <a href="#" className="text-green-600">Privacy Policies</a></span>
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
            Already have an account? <Link to="/SignIn" className="text-green-600">Sign in</Link>
          </p>
        </div>

        {/* Right Section - Image */}
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
  );
};

export default SignUp