import React, { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { FaGoogle } from 'react-icons/fa';

const SignUp = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { loginWithRedirect, } = useAuth0();

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  

  return (
    <div className="flex flex-col md:flex-row w-full justify-center">
      <div className="bg-yellow-700 pt-20 md:pt-0 pb-10 px-5 md:px-10 lg:px-20 flex flex-col items-center justify-center md:w-[30%] w-100">
        <h1 className="font-bold text-[6vmax] text-white">मार्गदर्शक</h1>
        <p className="text-lg text-center text-white/80">
          Join us to know the real <br /> power you have
        </p>
      </div>

      <section className="flex flex-col bg-white pt-0 md:pt-24 pb-10 px-5 mt-4 md:px-10 lg:px-20  gap-4 justify-center md:w-[70%] w-100">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6 ">
          <h2 className="text-center text-3xl font-semibold text-gray-800 mb-6">
            {isLogin ? 'Login to Your Account' : 'Create an Account'}
          </h2>

          <form className="space-y-4">
            {!isLogin && (
              <>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-700"
                    required
                  />
                </div>
               
              </>
            )}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-700"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="********"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-700"
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-600 hover:text-gray-800"
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-yellow-700 text-white rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
            >
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
              <span
                onClick={toggleForm}
                className="text-yellow-700 font-semibold cursor-pointer hover:underline"
              >
                {isLogin ? 'Sign Up' : 'Login'}
              </span>
            </p>
          </div>
        </div>

        <h1 className='text-3xl font-bold ml-48'>Or</h1>
        <div className='mx-auto md:ml-32 flex items-center'>
          Continue with
          <button
            onClick={() => loginWithRedirect()}
            className=" flex justify-center items-center gap-4 mx-2 py-2  px-4  text-white rounded-lg shadow-md bg-black hover:bg-yellow-600 transition duration-300"
          >
           <FaGoogle /> Google
          </button>
        </div>
      </section>
    </div>
  );
};

export default SignUp;