import React from 'react'
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"; 
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from '../utils/ValidationSchema';
import signinbg from "../assets/signinimage.png";
import { Link } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';


import visible from "../assets/visibility_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg";
import visibleoff from "../assets/visibility_off_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg";


 const baseUrl = import.meta.env.VITE_API_URL;


const SignUp = () => {
   const navigate = useNavigate(); 

  const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(signUpSchema),
    });
    
    // const onSubmit = (data) => console.log(data);
  
    const [showPassword, setShowPassword] = useState(false);

    const [showPassword2, setShowPassword2] = useState(false);


    const onSubmit = async (data) => {
    try {
      const response = await fetch(`${baseUrl}/api/auth/sign-up`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log(result);
      

      if (!result.success) {
        toast.error(result.errMsg || "Something went wrong!");
        return;
      }

      toast.success(result.message || "Sign up successful!", { duration: 2500 });

      reset();

      // Redirect to login page after delay using useNavigate
      setTimeout(() => {
        navigate("/login"); 
      }, 1500);

    } catch (error) {
      // console.error("Sign up error:", error);
      // toast.error("Sign up failed!");
      console.log(error.message);
    }
  };

  
  
  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-6xl bg-white rounded-lg overflow-hidden shadow-lg">

        {/* Left Section - Form */}
        <div  onSubmit={handleSubmit(onSubmit)}  className="w-full md:w-1/2 p-10">
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

        <section>
        <div className="hidden md:block ">
          <img
            src={signinbg}
            alt="Building"
            className="w-full h-full object-cover"
          />
        </div>

        <section className=' flex items-center gap-2 absolute top-16 right-132'>
          <div className='text-[#FEFEFF] font-poppins  font-[700] p-2 bg-[#3D9970] rounded-full '>
            <h1>BH</h1>
            </div>
          <h2 className='font-[500] text-[#FFFFFF] text-2xl font-poppins'>BetaHouse</h2>
        </section>
        </section>
      </div>
    </div>
    
    </>
  );
};

export default SignUp