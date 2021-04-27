import { useState } from "react";
import { Modal ,Button } from "react-bootstrap";


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
        <Button onClick={() => handlePasswordButtonPress()}>
          {isPasswordChanging ? "Save Password" : "Change Password"}
        </Button>
        <Button variant="danger" onClick={() => logout()}>Logout</Button>
      </div>
    </>
  );
}

export default UserDetails;
