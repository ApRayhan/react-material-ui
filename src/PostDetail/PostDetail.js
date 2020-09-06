import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';
import './postDetails.css'

const PostDetail = () => {
  const { postId } = useParams();
  const [ post, setPost ] = useState({});
  const { title, body, userId } = post;

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
    fetch(url)
    .then(res => res.json())
    .then(data => setPost(data))
  }, []);

  // Comments 
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => setComments(data))
  }, [])


  return (
    <div className="post">
      <div className="postDetails">
        <h2>{ title }</h2>
        <p className="body">{ body }</p>
      </div>
      <h2>Post Comment </h2>
      {
        comments.map(comment => <Comment key={comment.id} comment={ comment }></Comment>)
      }
    </div>
  );
};

export default PostDetail;