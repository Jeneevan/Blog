import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import classes from "./LoginForm.module.css";

function LoginForm() {
  const router = useRouter();
  const [login, setLogin] = useState(true);
  const userNameRef = useRef();
  const passwordRef = useRef();

  function loginHandler(event) {
    event.preventDefault();

    const enteredUserName = userNameRef.current.value;
    const enteredPassword = passwordRef.current.value;

    if (login) {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB2Gbv6ROTWhbBlwh28la1WcI1l9FcKDIs",
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredUserName,
            password: enteredPassword,
            returnSecureToken: true,
          }),
        }
      )
        .then((res) => {
          if (res.ok) {
            router.push("/");
            return res.json();
          } else {
            res.json().then((data) => {
              let errorMessage = "Auth Failed";
              throw new Error(errorMessage);
            });
          }
        })
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  }
  return (
    <div className={classes.mainDiv}>
      <h1>Login System</h1>
      <form onSubmit={loginHandler}>
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
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
