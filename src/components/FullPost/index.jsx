import React from 'react';
import { Link } from 'react-router-dom';

import './FullPost.scss';

const FullPost = ({ title, createdAt }) => (
  <div className="full-post">
    <div className="container">
      <Link to="/">
        <button className="btn btn-primary">Back</button>
      </Link>
      <div className="full-post__details">
        <i>Posted on {createdAt}</i>
      </div>
      <br />
      <p className="full-post__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, laudantium voluptas harum
        perferendis provident error dolorum excepturi maiores incidunt rem vel molestias quisquam
        possimus voluptatum, nihil in voluptate animi ut!
      </p>
    </div>
  </div>
);

export default FullPost;
