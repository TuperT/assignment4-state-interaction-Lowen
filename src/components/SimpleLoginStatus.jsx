import { useState } from "react";

const SimpleLoginStatus = () => {
    const [isLoggedIn, setIsLoggedIn] =  useState (false);
    return(
        <>
        {isLoggedIn 
        ? <div><p>Welcome back!</p> <button onClick={() => setIsLoggedIn(false)}>Log Out</button> </div> 
        : <button onClick={() => setIsLoggedIn(true)}>Log In</button>}
        </>
    )
}

export default SimpleLoginStatus;