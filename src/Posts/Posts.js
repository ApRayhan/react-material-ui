import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './Posts.css';
import { Link } from 'react-router-dom';


const Posts = (props) => {
  // console.log(props.post);
  const {title, body, id} = props.post;
  const showPostDetail = props.showPostDetail;

  return (
    <div>
      <div className="single-post">
        <h3>{ title }</h3>
        <p>{ body.substr(0,80) }</p>
        <Link to={ `/post/${ id }`}>
          <Button variant="contained" color="primary">Read More</Button>
        </Link>
      </div>
    </div>
  );
};

export default Posts;