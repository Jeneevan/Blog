import React, {useState} from "react";
import classes from "./NavBar.module.css";

const Links = [
  {
    id: 1,
    text: "Home",
    url: "#home"
},
{
  id: 2,
  text: "About",
  url: "#why"
},
{
  id: 3,
  text: "Blogs",
  url: "#blogs"
}
]

function NavBar() {
  const [scroll, setScroll] = useState(false)

  function handleScroll(){
    setScroll(!scroll)
  }
  
  return (
    <header className={classes.header} onScroll={handleScroll}>
      <nav className={classes.nav}>
        
        <div className={classes.titleSpan}>
          <span>Aerexx</span>
        </div>
        <div className={classes.linkDiv}>
          {Links.map((link) => {
            return <a className={classes.navLink} href={link.url} key={link.id}>
              {link.text}
            </a>
          })}
        </div>
          
      </nav>
    </header>
  );
}

export default NavBar;
