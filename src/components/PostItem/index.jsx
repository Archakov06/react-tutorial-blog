import React from 'react';
import { Link } from 'react-router-dom';

import './PostItem.scss';

const PostItem = ({ title, createdAt, _id, onRemove }) => (
  <div className="post-item">
    <Link to={`/post/${_id}`}>
      <h2>{title}</h2>
    </Link>
    <p>
      <i>Posted on {createdAt}</i>
      <a href="javascript://" onClick={onRemove}>
        Remove
      </a>
      <Link to={`/post/${_id}/edit`}>Edit</Link>
    </p>
  </div>
);

export default PostItem;
