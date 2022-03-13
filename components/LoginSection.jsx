import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignupForm";
import { useRouter } from "next/router";

function LoginSection() {
  const [isNewUser, setNewUser] = useState(false);
  const router = useRouter();

  function changeHandler() {
    setNewUser(!isNewUser);
  }



  async function addUser(enteredUser) {
    const response = await fetch("/api/new-user", {
      method: "POST",
      body: JSON.stringify(enteredUser),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);

    router.replace("/");
  }

  



  return (
    <React.Fragment>
      
      {isNewUser ? (
        <SignUpForm onNewUserSignup={addUser}/>
      ) : (
        <LoginForm />
      )}
      <div>

        <center>
          <a className="linkTag" onClick={changeHandler}>
           
            {isNewUser ? "Login" : "Sign up Now!"}
          </a>
        </center>
      </div>
    </React.Fragment>
  );
}

export default LoginSection;
