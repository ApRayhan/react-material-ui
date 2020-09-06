import React, { useEffect, useState } from 'react';
import './Comment.css';
import { Avatar } from '@material-ui/core';

const Comment = (props) => {
  const { body, email } = props.comment;

  // User Image
  const image = `https://joeschmoe.io/api/v1/${email}`;


  return (
    <div>
      <div className="userDetails">
        <Avatar src={ image } alt=""/>
        <span>{ email }</span>
      </div>
      <p className="commentBody">{ body }</p>
    </div>
  );
};

export default Comment;