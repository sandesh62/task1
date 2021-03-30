import { useState, useEffect } from "react";
import { navigateToPage } from "../routes/navigation";
import { useHistory, Redirect } from "react-router-dom";

const initialState = {
  username: "",
  password: "",
};

function Login() {
  const [user, setUsernamePassword] = useState(initialState);
  const [rememberMe, setRememberMe] = useState(false);
  const history = useHistory();

  // her we capture HTML dom event and update the state accordingly.
  // NOTE: we have kept username and password in the same object to avoid over coding of same nature
  // e.currentTarget returns the "name" tag that we have passed to input field below
  const handleuserUpdate = (e) => {
    let targetValue = e.currentTarget;
    let updatedValue = targetValue.value;
    if (targetValue.name === "username") {
      setUsernamePassword({ ...user, username: updatedValue });
    } else {
      setUsernamePassword({ ...user, password: updatedValue });
    }
  };

  // handling submit button
  // saving data in local only if user selects remember me
  //  we save a flag "loggedinfirsttime" and "firsttimeuserdata" for the home page to function independant of user selecing remember me
  const handleFormSubmit = async () => {
    if (user.username && user.password) {
      if (rememberMe) {
        await localStorage.setItem("username", user.username);
        await localStorage.setItem("password", user.password);
      }
      await localStorage.setItem("loggedInFirstTime", true);
      await localStorage.setItem("firstTimeUserData", JSON.stringify(user));
      navigateToPage(history, "home");
    } else {
      alert("Please enter your login credentials");
    }
  };

  return (
    <>
      <div 
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
         
          
        }}
      >
        <label>
          <b>Username</b>
        </label>
        <input
          type="text"
         
          placeholder="Enter Username"
          name={"username"}
          onChange={handleuserUpdate}
        />
        <label>
          <b>Password</b>
        </label>
        <input
          type="password"
         
          placeholder="Enter Password"
          name={"password"}
          onChange={handleuserUpdate}
        />
        <label>
          <input
            type="checkbox"
            name="rememberMe"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
          Remember me
        </label>
        <button  onClick={() => handleFormSubmit()}>Submit</button>
      </div>
    </>
  );
}

export default Login;
