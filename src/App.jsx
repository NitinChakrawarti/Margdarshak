
import { useState } from "react";
import Landing from "./landing";
import User from './auth/user'
function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <>
    {
      isLoggedIn ? <User /> : <Landing />
    }
    </>
  )
}

export default App;


