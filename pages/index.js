import React from "react";
import NavBar from "../components/NavBar";
import Landing from "../components/Landing";
import Info from "../components/Info";
import Blogs from "../components/Blogs";


function Home() {
  return (
    <div>
      <NavBar />
      <Landing />
      <Info/>
      <Blogs/>
    </div>
  );
}

export default Home;
