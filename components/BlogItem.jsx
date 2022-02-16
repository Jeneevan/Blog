import React from "react";

export default function BlogItem(props) {
  return (
    <div id={props.id}>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  );
}
