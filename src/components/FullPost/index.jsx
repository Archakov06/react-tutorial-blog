import React from 'react';
import { Link } from 'react-router-dom';

import './FullPost.scss';

const FullPost = ({ text, createdAt }) => (
  <div className="full-post">
    <div className="container">
      <Link to="/">
        <button className="btn btn-primary">Back</button>
      </Link>
      <div className="full-post__details">
        <i>Posted on {createdAt}</i>
      </div>
      <br />
      <p className="full-post__text">{text}</p>
    </div>
  </div>
);

export default FullPost;
