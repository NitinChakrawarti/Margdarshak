
import { useState } from "react";
import Landing from "./landing";
import User from './auth/user'
import { useAuth0 } from "@auth0/auth0-react";


function App() {
  const [loading, setLoading] = useState(false);
  const { isAuthenticated, isLoading } = useAuth0();

  return (
    <>

      {
        isLoading ?
          // <div className="flex justify-center items-center h-screen">
          //   <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-yellow-700"></div>
          // </div>
          <div className="flex justify-center items-center h-screen bg-gray-100">
          <div className="flex space-x-2 transform scale-150">
            <div className="w-4 h-4 bg-yellow-600 rounded-full animate-pulse delay-[100ms]"></div>
            <div className="w-4 h-4 bg-yellow-600 rounded-full animate-pulse delay-[200ms]"></div>
            <div className="w-4 h-4 bg-yellow-600 rounded-full animate-pulse delay-[300ms]"></div>
            <div className="w-4 h-4 bg-yellow-600 rounded-full animate-pulse delay-[400ms]"></div>
            <div className="w-4 h-4 bg-yellow-600 rounded-full animate-pulse delay-[500ms]"></div>
            <div className="w-4 h-4 bg-yellow-600 rounded-full animate-pulse delay-[600ms]"></div>
          </div>
        </div>
          :
          <div>
            {
              isAuthenticated ? <User /> : <Landing />
            }
          </div>
      }



    </>
  )
}

export default App;


