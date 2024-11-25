// this is a empty repo or global space where we store all different data used by various components throughout 
//the project
//inorder to get access of this space to read or write data we need a ContextProvider which will act as wraper 
// to use context as main.jsx has StrictMode as a wraper which is used throughout all the components

import React from "react";

const UserContext = React.createContext();

export default UserContext