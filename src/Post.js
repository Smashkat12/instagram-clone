import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";

function Post({imageUrl, username, caption}) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          src="/static/images/avatar/1.jpg"
          alt="Chuma"
        />
        <h3>{username}</h3>
      </div>

      {/* header -> avatar + username */}
      <img
        className="post__image"
        src={imageUrl}
        alt=""
      />
      {/* image */}
      <h4 className="post__text">
        <strong>{username}: </strong>{caption}
      </h4>
      {/* username + comment */}
    </div>
  );
}

export default Post;
