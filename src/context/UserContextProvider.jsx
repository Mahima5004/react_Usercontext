//it's a wraper component in order to use context component that is why this is jsx file and Context is js file

import React, { useState } from "react";
import UserContext from "./UserContext";

 const UserContextProvider = ({children}) =>{
  const [user, setUser] = useState(null); // all the data defined here will be accessible to children component, user is to read and setUser is to write data
  return (
    <UserContext.Provider value={{user,setUser}}>
        {children}
    </UserContext.Provider>
  )
}
export default UserContextProvider