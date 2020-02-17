import React from "react";
import "./ShowMessages.css";

const ShowMessages = props => {

  let allPosts = props.messageData.map(arg => (
    <div className='post'>
      <div><b>{arg.nickname}</b> said:</div>
      <div className='post_text'><blockquote>"{arg.message}"</blockquote></div>
    </div>
  )).reverse();

  return (
    <div className="messages-form decor">
      {allPosts}
    </div>
  );
};

export default ShowMessages;
