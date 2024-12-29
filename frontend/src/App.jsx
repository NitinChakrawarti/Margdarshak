import Landing from "./landing";
import User from "./auth/user";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from 'react';
import { LoginContext, PostContext } from './context/backcontext';
import { UserContext } from "./context/backcontext";
import axios from "axios";
import { useState } from "react";

function App() {
  const { isAuthenticated, isLoading } = useAuth0();
  const [login, setlogin] = useState(false)
  const [user, setuser] = useState({});
  const [post, setpost] = useState({});

  useEffect(() => {
    async function updateUser() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_USER_API}/auth/profile`,
          { withCredentials: true }
        );
        const userInfo = await response.data;
        setuser(userInfo)
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    }
    updateUser();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="flex space-x-2 transform scale-150">
          {[100, 200, 300, 400, 500, 600].map((delay, index) => (
            <div
              key={index}
              className={`w-4 h-4 bg-yellow-600 rounded-full animate-pulse delay-[${delay}ms]`}
            ></div>
          ))}
        </div>
      </div>
    );
  }


  return (
    <PostContext.Provider value={{ post, setpost }} >
      <LoginContext.Provider value={{ login, setlogin }} >
        {
          isAuthenticated || login || user.name ?

            <UserContext.Provider value={{ user, setuser }} >
              <User />
            </UserContext.Provider>

            : <Landing />
        }
      </LoginContext.Provider>
    </PostContext.Provider>
  )
}

export default App;