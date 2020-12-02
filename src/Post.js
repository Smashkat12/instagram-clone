import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";

function Post() {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          src="/static/images/avatar/1.jpg"
          alt="Chuma"
        />
        <h3>Username</h3>
      </div>

      {/* header -> avatar + username */}
      <img
        className="post__image"
        src="https://miro.medium.com/max/1876/1*aBAwNcieQlaQJa2OEnyZhw.png"
        alt=""
      />
      {/* image */}
      <h4 className="post__text">
        <strong>Chuma: </strong>I love this!!!
      </h4>
      {/* username + comment */}
    </div>
  );
}

export default Post;
