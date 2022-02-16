import React from "react";
import classes from "./Landing.module.css";
import Image from "next/image";
import BlogSVG from "../Images/bloggin.svg";

function Landing() {
  return (
    <div className={classes.component} id="home">
  
      <div className={classes.landCont}>
        <h1 className={classes.heading}>The Toronto Dev</h1>
        <div className={classes.unDraw}>
          <Image src={BlogSVG} alt="blog"/>
        </div>
      </div>

    </div>
  );
}

export default Landing;
