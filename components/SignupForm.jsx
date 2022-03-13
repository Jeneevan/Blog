
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import classes from "./LoginForm.module.css";

function SignUpForm(props) {
  const [signUp, setSignUp] = useState(true)
  const router = useRouter();
  
  const userNameRef = useRef();
  const passwordRef = useRef();

  function signUpHandler(event) {
    event.preventDefault();

    const enteredUserName = userNameRef.current.value;
    const enteredPassword = passwordRef.current.value;

    const userData = {
      username: enteredUserName,
      password: enteredPassword,
    }

    props.onNewUserSignup(userData)
  }

  return (
    <div className={classes.mainDiv}>
      <h1>Sign up Now!</h1>
      <form onSubmit={signUpHandler}>
        <div className={classes.inputDiv}>
          <input
            type="text"
            placeholder="Username"
            className={classes.input}
            ref={userNameRef}
          />
        </div>
        <div className={classes.inputDiv}>
          <input
            type="password"
            placeholder="Password"
            className={classes.input}
            ref={passwordRef}
          />
        </div>
        <div className={classes.inputDiv}>
          <button type="submit" className={classes.subButton}>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
