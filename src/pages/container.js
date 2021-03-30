import { useState, useEffect } from "react";
import {  Redirect } from "react-router-dom";

function Container() {
  const [hasUserLoggedIn, setUserLogin] = useState(false);

  const checkLoginStatus = () => {
    const user = localStorage.getItem("username");
    setUserLogin(user ? true : false);
  };

  // useeffect is used as Componentdidmount, we check if user data is available in local storage or not
  useEffect(() => {
    checkLoginStatus();
  }, []);

  // if data present in localstorage we redirect to home page else login page
  return hasUserLoggedIn ? <Redirect to="/home" /> : <Redirect to="/login" />;
}

export default Container;
