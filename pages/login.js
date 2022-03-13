import React, { useState } from "react";
import { useRouter } from "next/router";
import NavBar from "../components/NavBar";

import LoginSection from "../components/LoginSection";

function Login() {

  return (
    <React.Fragment>
      <NavBar />
      <LoginSection />
    </React.Fragment>
  );
}

export default Login;
