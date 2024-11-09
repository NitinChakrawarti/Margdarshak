
import { useState } from 'react';
import Home from '../pages/home';
import User from '../auth/user';

const Switch = () => {
  const [islogin, setIslogin] = useState(true);
  // const [islogin, setIslogin] = useState(false);
  return (
    <>
      {
        islogin ? <User /> : <Home />
      }
    </>
  )
}

export default Switch
