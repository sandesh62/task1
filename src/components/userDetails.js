import { useState } from "react";

function UserDetails({ username, userPassword, logout }) {
  const [isPasswordChanging, setPasswordStatus] = useState(false);
  const [password, setPassword] = useState(userPassword);

  const handlePasswordUpdate = (e) => {
    let targetValue = e.currentTarget.value;
    setPassword(targetValue);
  };

  const handlePasswordButtonPress = async () => {
      if (isPasswordChanging) {
        await localStorage.setItem("password", password);
        setPasswordStatus(false)
      }
      else{
        setPasswordStatus(true)
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
        <label>Username : {username}</label>
        {/* conditional handling of text input/display password state */}
        <label>
          Password :{" "}
          {isPasswordChanging ? (
            <input
              type="password"
              placeholder="Enter Password"
              name={"password"}
              onChange={handlePasswordUpdate}
            />
          ) : (
            password ? password: userPassword
          )}
        </label>
        <button onClick={() => handlePasswordButtonPress()}>
          {isPasswordChanging ? "Save Password" : "Change Password"}
        </button>
        <button onClick={() => logout()}>Logout</button>
      </div>
    </>
  );
}

export default UserDetails;
