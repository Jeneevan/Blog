import React from "react";
import { useRef } from "react";
import classes from "./BlogForm.module.css";

function BlogForm(props) {
  const titleRef = useRef();
  const contentRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();

    const enteredTitle = titleRef.current.value;
    const enteredContent = contentRef.current.value;

    const blogData = {
      title: enteredTitle,
      content: enteredContent,
    };

    props.onAddBlog(blogData);
  }

  return (
    <div className={classes.contentDiv}>
      <h1 className={classes.Heading}>Create Blog Post</h1>
      <form onSubmit={handleSubmit}>
        <div className={classes.inputDiv}>
          <div className={classes.textDiv}>
            <label htmlFor="Title" className={classes.labels}>
              Title:
            </label>
          </div>
          <div>
            <input
              ref={titleRef}
              type="text"
              name="Title:"
              className={classes.inputTitle}
            />
          </div>
        </div>

        <div className={classes.inputDiv}>
          <div className={classes.textDiv}>
            <label htmlFor="content" className={classes.labels}>
              Blog:
            </label>
          </div>
          <div>
            <textarea
              className={classes.input}
              ref={contentRef}
              name="content"
              type="text"
              rows="15"
              cols="50"
            ></textarea>
            <div>
              <button className={classes.button} type="submit">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default BlogForm;
