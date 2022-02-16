import React from "react";
import classes from './Info.module.css';

function Info() {
  return (
    <div className={classes.mainDiv} id="why">
      <div className={classes.para}>
          <h2>Why?</h2>
          <p>
            This page was created to display what current projects I may be working
            on, or concepts im currently learning/practicing. This page is to
            document the challenges, successes and steps I`ve taken over my coding
            career to show other developers, that you can do it too! I was just a
            mere human resources major who had no coding experience prior to all
            this.
          </p>
      </div>
    </div>
  );
}

export default Info;
