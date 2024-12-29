import { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios'
import { useContext } from 'react';
import { LoginContext } from '../context/backcontext';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const { loginWithRedirect } = useAuth0();
  const [isloading, setisloading] = useState(false);
  const navigate = useNavigate();


  const loginContext = useContext(LoginContext);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Toggle between Login and Sign-Up form
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Handle form submission
  const signupreq = async (e) => {
    e.preventDefault();
    setisloading(true);
    const result = await axios.post(`${import.meta.env.VITE_USER_API}/auth/sign-up`, {
      name: formData.name,
      email: formData.email,
      password: formData.password
    })
      .then((response) => {
        const data = response.data;
        if (data) {
          alert("You can login now")
          setIsLogin(true);
        }
      })
      .catch((error) => {
        alert('Sign up failed', error)
        console.error('Error:', error);
      })
      .finally(() => {
        setisloading(false); // Ensure this function or state setter exists in your context
        setFormData({ name: '', email: '', password: '' });
      });
  };


  const loginreq = async (e) => {
    e.preventDefault();
    setisloading(true);
    const result = await axios.post(`${import.meta.env.VITE_USER_API}/auth/user-login`, {
      email: formData.email,
      password: formData.password
    },
      {
        withCredentials: true,
      })
      .then((response) => {
        const data = response.data;
        if (data) {
          navigate('/');
          loggedin();
        }
      })
      .catch((error) => {
        alert(`${error.response.data.message}`)
        console.error('Error:', error);
      })
      .finally(() => {
        setisloading(false); // Ensure this function or state setter exists in your context
        setFormData({ email: '', password: '' });
      });
  }

  const loggedin = () => {
    loginContext.setlogin(true);
  }

  return (
    <div className="flex flex-col md:flex-row w-full justify-center">
      {/* Sidebar */}
      <div className="bg-yellow-700 pt-20 md:pt-0 pb-10 px-5 md:px-10 lg:px-20  flex flex-col items-center justify-center md:w-[30%] w-full">
        <h1 className="font-bold text-[6vmax] text-white">मार्गदर्शक</h1>
        <p className="text-lg text-center text-white/80">
          Join us to know the real <br /> power you have
        </p>
      </div>

      {/* Main Content */}
      <section className="flex flex-col bg-white pt-0 md:pt-0 gap-10 pb-10 px-5 mt-16 md:px-10 lg:px-20 justify-center md:w-[70%] w-full">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-center text-3xl font-semibold text-gray-800 mb-6">
            {isLogin ? 'Login to Your Account' : 'Create an Account'}
          </h2>

          {/* Form */}
          <form className="space-y-4" onSubmit={!isLogin ? signupreq : loginreq}>
            {/* Name Field (Visible only for Sign-Up) */}
            {!isLogin && (
              <div>
                <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-700"
                  required
                />
              </div>
            )}

            {/* Email Field */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-700"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="********"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-700"
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-600 hover:text-gray-800"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-yellow-700 text-white rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
            >
              {/* {isLogin ? 'Login' : 'Sign Up'} */}
              {isLogin ? (!isloading ? 'Login' : 'Login in process') : (!isloading ? 'Sign up' : 'processing')}
            </button>
          </form>

          {/* Toggle Form Link */}
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

        {/* Google Sign-In */}
        {/* <h1 className="text-3xl font-bold ml-48">Or</h1>
        <div className="mx-auto md:ml-32 flex items-center">
          Continue with
          <button
            onClick={() => loginWithRedirect()}
            className="flex justify-center items-center gap-4 mx-2 py-2 px-4 text-white rounded-lg shadow-md bg-black hover:bg-yellow-600 transition duration-300"
          >
            <FaGoogle /> Google
          </button>
        </div> */}
      </section>
    </div>
  );
};

export default SignUp;
