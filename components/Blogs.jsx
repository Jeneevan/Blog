import React, { useState, useEffect } from "react";
import classes from "./Blogs.module.css";
import BlogItem from "./BlogItem";

function Blogs() {
  const [data, setData] = useState ([])
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("api/new-blog")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
    
        console.log(data)
      });
  }, []);



  if (isLoading) return <p>Loading...</p>;
  return (
    <div className={classes.contentDiv} id="blogs">
      <h1 className={classes.blogHeading}>Blogs</h1>

      {data.map((item, index) => {
        return ( <div key={item._id} className={classes.blogDiv}>
          <hr/>
          <BlogItem title={item.title} content={item.content} id={item._id}/> 
      
        </div>
         
        )
      })}
    </div>
  );
}

export default Blogs;
