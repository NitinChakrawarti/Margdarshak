import Dashboard from '../usercomponent/dashboard'
import { BackContext } from '../context/backcontext';
import React from 'react';
const User = () => {
  
  const [back, setBack] = React.useState(false);
  
  return (
    <BackContext.Provider value={{back, setBack}}>
      <div>
        <Dashboard />
      </div>
    </BackContext.Provider>
  )
}

export default User
